// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()


    let container = document.querySelector('[data]')
    // let searchProduct = document.querySelector('[searchProduct]')
    // let sortingByAmount = document.querySelector('[sorting]')
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
                container.textContent = "Please try again later"
            }
        }
        displayProducts(products)