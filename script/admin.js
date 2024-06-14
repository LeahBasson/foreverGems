// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()


    let container = document.querySelector('[data]')
    let sortingAlphabetically = document.querySelector('[sorting]')
    let products = JSON.parse(localStorage.getItem('products'))  || [];
    // items/products 
    let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout'))
        : []

// Delete Function
function deleteProduct(index){
    try{
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts(products);
        location.reload();
    } catch(e) {
        alert('Unable to Delete');
    }
}

function displayProducts(args) {
  container.innerHTML = "";
  try {
      args.forEach((product, i) => {
          container.innerHTML += `
          <tr>
          <td>${product.productName}</td>
          <td>${product.category}</td>
          <td><img class="adminImages" src ='${product.img_url}'></td>
          <td>${product.Material}</td>
          <td>R${product.Amount}</td>
          <td>
          <div>
              <div class="buttons">
              <button class="btnEdit" data-bs-toggle="modal" data-bs-target="#updateProduct${product.id}" >EDIT</button>
              <button class="btnDelete" onclick="deleteProduct(${i})">DELETE</button>
              </div>

              <div class="modal fade" id="updateProduct${product.id}" tabindex="-1" aria-labelledby="updateProduct${product.id}" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="updateProduct${product.id}">UPDATE PRODUCT</h1>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                    <div class="container">

                    <input class="form-control m-2" type="text"  value="${product.productName}" name ="admin-name" id="admin-name${product.id}">
                    <input class="form-control m-2" type="text" value="${product.category}" name ="admin-category" id="admin-category${product.id}" >
                    <textarea class="form-control m-2" name="admin-material" id="admin-material${product.id}">${product.Material}</textarea>
                    <input class="form-control m-2" type="number" value="${product.Amount}" name="admin-amount" id="admin-amount${product.id}">
                    <input class="form-control m-2" type="text" value="${product.gender}" name ="admin-gender" id="admin-gender${product.id}">
                    <input class="form-control m-2" type="text" value="${product.img_url}" name ="admin-img_url" id="admin-img_url${product.id}">
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-secondary" onclick='UpdateProduct(${i})'>Save changes</button>
                  </div>
                </div>
                  </div>
              </div>
          </div>
          </td>
      </tr>
      `;
      })
  } catch(e) {
      tableContent.innerHTML = `
      <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
              <p>No Products Found</p>
          </div>
      </div>
      `;
  }
}
displayProducts(products)

// Edit Functionality
function UpdateProduct(index){
try{
    let product = products[index];
    // taps into the index to target the elements for the specific product
    product.productName = document.querySelector(`#admin-name${product.id}`).value;
    product.category = document.querySelector(`#admin-category${product.id}`).value;
    product.Material = document.querySelector(`#admin-material${product.id}`).value;
    product.Amount = document.querySelector(`#admin-amount${product.id}`).value;
    product.gender = document.querySelector(`#admin-gender${product.id}`).value;
    product.img_url = document.querySelector(`#admin-img_url${product.id}`).value;
    // Updates the product in the array
    products[index] = Object.assign({}, product);
    // Updates localStorage with the new list of products
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts(products);
    location.reload();
} catch(e) {
    alert('Unable to Edit the Products');
}
}


document.getElementById('saveNewProduct').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting 

    // Get form input values
    const productName = document.querySelector('#productName').value.trim();
    const productCategory = document.querySelector('#productCategory').value.trim();
    const productMaterial = document.querySelector('#productMaterial').value.trim();
    const productAmount = document.querySelector('#productAmount').value.trim();
    const productGender = document.querySelector('#productGender').value.trim();
    const productImage = document.querySelector('#productImage').value.trim();

    // Check if all required fields are filled
    if (productName && productCategory && productMaterial && productAmount && productGender && productImage) {
        // Creates a new product from the form values
        let newProduct = {
            productName,
            category: productCategory,
            Material: productMaterial,
            Amount: productAmount,
            gender: productGender,
            img_url: productImage,
        };

        // Adds the new product to the products array
        products.push(newProduct);

        // Updates localStorage with the new list of products
        localStorage.setItem('products', JSON.stringify(products));

        // Updates the display of products
        displayProducts(products);

        // Clears the form fields
        document.querySelector('#productName').value = '';
        document.querySelector('#productCategory').value = '';
        document.querySelector('#productMaterial').value = '';
        document.querySelector('#productAmount').value = '';
        document.querySelector('#productGender').value = '';
        document.querySelector('#productImage').value = '';

        // Close the modal
        var myModalEl = document.getElementById('addProductModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
    } else {
        alert('Please fill in all required fields.');
    }
});

         // Function to validate footer form field
function validateFooterForm() {
    let footerForm = document.forms["footerForm"];
    let footerEmail = footerForm["footerEmail"].value;
  
    if (footerEmail === "") {
        document.getElementById("footer_error").innerHTML = "Please enter your email address";
        return false; // Prevent form submission
      } 
      else {
        document.getElementById("footer_error").innerHTML = ""; 
        }

        return true; // Allow form submission if validation passes
}

  // Get the footer form element
  let footerForm = document.forms["footerForm"];

  // Attach the event listener to the footer form's submit event
  footerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateFooterForm()) {
      event.target.submit();
    }
  });

  // Sort alphabetically by product name 
  let isToggle = false;
  sortingAlphabetically.addEventListener('click', () => {
try {
  if (!products) throw new Error('Please try again later');
  if (!isToggle) {

    // Sort by product name in ascending order (A to Z)
      products.sort((a, b) => a.productName.localeCompare(b.productName));
      sortingAlphabetically.textContent = 'NAME: A TO Z';
      isToggle = true;
  } else {
      // Sort by product name in descending order (Z to A)
      products.sort((a, b) => b.productName.localeCompare(a.productName));
      sortingAlphabetically.textContent = 'NAME: Z TO A';
      isToggle = false;
  }
  displayProducts(products);
} catch (e) {
  container.textContent = e.message || 'We are working on this issue';
}
});

  // Counter
window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}

