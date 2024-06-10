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
        
        // keyup
        searchProduct.addEventListener('keyup', () => {
            try {
                if (searchProduct.value.length < 1) {
                    displayProducts(products)
                }
                let filteredProduct = products.filter(product => product.productName.toLowerCase().includes(searchProduct.value))
                displayProducts(filteredProduct)
                if (!filteredProduct.length) throw new Error(`${searchProduct.value} product was not found`)
            } catch (e) {
                container.textContent = e.message || 'Please try again later'
            }
        })
        // Sorting by ascending and descending
        let isToggle = false
        sortingByAmount.addEventListener('click', () => {
            try {
                if (!products) throw new Error('Please try again later')
                if (!isToggle) {
                    products.sort((a, b) => b.amount - a.amount)
                    sortingByAmount.textContent = 'Sorted by highest amount'
                    isToggle = true
                } else {
                    products.sort((a, b) => a.amount - b.amount)
                    sortingByAmount.textContent = 'Sorted by lowest amount'
                    isToggle = false
                }
                displayProducts(products)
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