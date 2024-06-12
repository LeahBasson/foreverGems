// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

    let container = document.querySelector('[ourStore]')
    let searchProduct = document.querySelector('[searchProduct]')
    let sortingByAmount = document.querySelector('[sorting]')
    let womanProducts = JSON.parse(
        localStorage.getItem('products')
    ).filter( ({gender})=> gender == "Woman")
    // items/products 
    let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout'))
        : []

        function displayProducts(args) {
            container.innerHTML = ""
            try {
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
        
            } catch (e) {
                container.textContent = "Please try again later"
            }
        }
        displayProducts(womanProducts)
        
        //The DOMContentLoaded event ensures that the script runs after the full HTML document has been loaded.       
        document.addEventListener('DOMContentLoaded', (event) => { 
            let searchInput = document.getElementById('searchInput');
            let container = document.getElementById('container');
            let products = womanProducts; // Ensure this is the correct reference to your products array
        
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
        window.onload = () => {
            document.querySelector('[counter]').textContent = checkoutItems.length || 0
        }