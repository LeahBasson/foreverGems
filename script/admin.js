// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()


    let container = document.querySelector('[data]')
    let sortingAlphabetically = document.querySelector('[sorting]')
    let products = JSON.parse(
        localStorage.getItem('products')
    )
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
                <button class="btnEdit" data-bs-toggle="modal" data-bs-target="#updateProduct${product.id}">Edit</button>
                <button class="btnDelete" onclick="deleteProduct(${i})">Delete</button>
                </div>
                <div class="modal fade" id="updateProduct${product.id}" tabindex="-1" aria-labelledby="updateProduct${product.id}" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="updateProduct${product.id}">Update Product</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                      <div class="container">
                      <input class="form-control m-2" type="text" placeholder="Enter a Product Name" value="${product.productName}" name ="admin-name" id="admin-name${product.id}" required>
                      <input class="form-control m-2" type="text" placeholder="Enter a Product Name" value="${product.category}" name ="admin-name" id="admin-name${product.id}" required>
                      <input class="form-control m-2" type="text" placeholder="Enter Image URL" value="${product.img_url}" name="admin-image" id="admin-image${product.id}" required>
                      <textarea class="form-control m-2" placeholder="Enter your Product details" required name="admin-details" id="admin-details${product.id}">${product.Material}</textarea>
                      <input class="form-control m-2" type="number" placeholder="Enter the Product Amount" value="${product.Amount}" name="admin-amount" id="admin-amount${product.id}" required>
                      </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-secondary" onclick='UpdateProduct(${JSON.stringify(product)}, ${i})'>Save changes</button>
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


document.getElementById('saveNewProduct').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    try{
        // Creates a new product from the form values
        let newProduct = {
            productName: document.querySelector('#productName').value,
            category: document.querySelector('#productCategory').value,
            img_url: document.querySelector('#productImage').value,
            Material: document.querySelector('#productMaterial').value,
            Amount: document.querySelector('#productAmount').value,    
        };
        // Adds the new product to the sweetProducts array
        products.push(newProduct);
        // Updates localStorage with the new list of products
        localStorage.setItem('products', JSON.stringify(products));
        // Updates the display of products
        displayProducts(products);
        // Clears the form fields
        document.querySelector('#productName').value = '';
        document.querySelector('#productCategory').value = '';
        document.querySelector('#productImage').value = '';
        document.querySelector('#productMaterial').value = '';
        document.querySelector('#productAmount').value = '';
        // Close the modal
        var myModalEl = document.getElementById('addProductModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
    } catch(e) {
        alert('Unable to add new product');
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

  // Counter
window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}