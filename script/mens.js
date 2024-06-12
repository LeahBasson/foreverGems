// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()
    

    let container = document.querySelector('[ourStore]')
    let searchProduct = document.querySelector('[searchProduct]')
    let sortingByAmount = document.querySelector('[sorting]')
    let productsFromStorage = JSON.parse(localStorage.getItem('products')) || [];
    let manProducts = productsFromStorage.filter(({ gender }) => gender === "Man");

    // items/products 
    let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout'))
        : []

        function displayProducts(args) {
            container.innerHTML = "";
            try {
                container.innerHTML =  `<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>`
                setTimeout(function(){
                    container.innerHTML = ""
                    args.forEach(product => {
                    container.innerHTML += `
                        <div class="card">
                            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                            <div class="card-body">
                                <h5 class="card-title">${product.productName}</h5>
                                <p class="card-text">${product.Material}</p>
                                <p class="card-text">
                                    <span class="shadow amount fw-bold">Amount</span>
                                    R${product.Amount}
                                </p>
                                <button type='button' class="btn btnAddToCart" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                            </div>
                        </div>
                    `
                })
                },500)
                
        
            } catch (e) {
                console.log(7)
            }
        }
        displayProducts(manProducts);
        
       //The DOMContentLoaded event ensures that the script runs after the full HTML document has been loaded.       
       document.addEventListener('DOMContentLoaded', (event) => { 
        let searchInput = document.getElementById('searchInput');
        let container = document.getElementById('container');
        let products = manProducts; // Ensure this is the correct reference to your products array
    
        searchInput.addEventListener('input', () => {
            let searchValue = searchInput.value.trim();
            let isPlaceholderShowing = searchValue === '';
    
            if (isPlaceholderShowing) {
                displayProducts(products); // Display all products if search input is empty
            } else {
                try {
                    let filteredProducts = products.filter(product => 
                        product.productName.toLowerCase().includes(searchValue.toLowerCase())
                    );
    
                    if (filteredProducts.length > 0) {
                        displayProducts(filteredProducts);
                    } else {
                        container.innerHTML = '<span class="error-message">Product not found**</span>';// Display a message when no matching products
                    }
                } catch (e) {
                    container.textContent = e.message || 'Please try again later';
                }
            }
        });
    });


         // Sorting by ascending and descending
let isToggle = false
sortingByAmount.addEventListener('click', () => {
    try {
        if (!manProducts) throw new Error('Please try again later')
        if (!isToggle) {
            manProducts.sort((a, b) => b.Amount - a.Amount)
            sortingByAmount.textContent = 'PRICE: HIGH TO LOW'
            isToggle = true
        } else {
            manProducts.sort((a, b) => a.Amount - b.Amount)
            sortingByAmount.textContent = 'PRICE: LOW TO HIGH'
            isToggle = false
        }
        displayProducts(manProducts)
    } catch (e) {
        container.textContent = e.message || 'We are working on this issue'
    }
})

        // Add to cart
        function addToCart(product) {
            try {
                checkoutItems.push(product)
                localStorage.setItem('checkout', JSON.stringify(checkoutItems))
                document.querySelector('[counter]').textContent = checkoutItems.length || 0
            } catch (e) {
                alert("Unable to add to cart")
            }
        }
        // window.onload = () => {
        //     document.querySelector('[counter]').textContent = checkoutItems.length || 0
        // }

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