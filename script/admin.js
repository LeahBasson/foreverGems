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

        function displayProducts(args) {
            container.innerHTML = ""
            try {
                args.forEach(product => {
                    container.innerHTML += `
                         <tr>
                    <td>${product.productName}</td>
                    <td>${product.category}</td>
                    <td><img class="adminImages" src = '${product.img_url}'></td>
                    <td>${product.Material}</td>
                    <td>R${product.Amount}</td>
                    <td><button class="btnEdit" >EDIT</button>
                    <button class="btnDelete" >DELETE</button>
                    </td>
                    </tr>
                    `
                })
        
            } catch (e) {
                container.innerHTML +=`<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>`
            }
        }
        displayProducts(products)

      
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

        
        

         // Function to validate footer form fields
function validateFooterForm() {
    let footerForm = document.forms["footerForm"];
    let footerEmail = footerForm["footerEmail"].value;
    // ... other validations for the footer form
  
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