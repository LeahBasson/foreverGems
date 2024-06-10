// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

//Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
//In order to make the string into an array you need to use JSON.parse
let products = JSON.parse(localStorage.getItem('products'))  

 //Ternary operator is used to check if we have data in the local storage
? JSON.parse(localStorage.getItem('products'))  : localStorage.setItem('products', JSON.stringify
    (
        [
            {
            id: 1,
            productName: "Dome Figure Slim Ring",
            category: "Rings",
            Material: "Gold",
            Amount: 1200,
            gender: "Woman",
            img_url: "https://leahbasson.github.io/MyImages/jsProject/domeFigureSlimRing.jpg"
            },
            {
                id: 2,
                productName : "Layered Opal Necklace",
                category: "Necklaces",
                Material: "Gold Vermeil, Opal",
                Amount: 1500,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/LayeredOpalNecklace.jpg"
            },
            {
                id: 3,
                productName: "Pearl Charm Necklace",
                category: "Necklaces",
                Material: "Gold Vermeil, Pearl",
                Amount: 1000,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/PearlCharmNecklace.jpg"
            },
            {
                id: 4,
                productName: "Tube Medium Hoops",
                category: "Earrings",
                Material: "Gold Vermeil",
                Amount: 500,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/TubeMediumHoops.jpg"
            },
            {
                id: 5,
                productName: "Anchor Chain Bracelet",
                category: "Bracelets",
                Material: "14k Yellow Gold",
                Amount: 900,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/AnchorChainBracelet.jpg"
            },
            {
                id: 6,
                productName: "Black Onyx Square Signet Ring",
                category: "Rings",
                Material: "14k Yellow Gold, Black Onyx",
                Amount: 1200,
                gender: "Man",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/MensBlackOnyxSquareSignetRing.jpg"
            },
            {
                id: 7,
                productName: "Bold Huggie Hoops",
                category: "Earrings",
                Material: "14k Yellow Gold",
                Amount: 500,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/BoldHuggieHoops.jpg"
            },
            {
                id: 8,
                productName: "Stacker Ring",
                category: "Rings",
                Material: "14k Yellow Gold",
                Amount: 1300,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/StackerRing.jpg"
            },
            {
                id: 9,
                productName: "Puffy Charlotte Cuff Bracelet",
                category: "Bracelets",
                Material: "14k Yellow Gold",
                Amount: 1100,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/PuffyCharlotteCuffBracelet.jpg"
            },
            {
                id: 10,
                productName: "Bold Diamond Eternity Ring",
                category: "Rings",
                Material: "14k Yellow Gold, Natural Diamond",
                Amount: 1800,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/BoldDiamondEternityRing.jpg"
            },
            {
                id: 11,
                productName: "Large Pave Diamond Round Necklace",
                category: "Necklaces",
                Material: "14k Yellow Gold, Natural Diamond",
                Amount: 850,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/LargePaveDiamondRoundNecklace.jpg"
            },
            {
                id: 12,
                productName: "Diamond Mini Studs",
                category: "Earrings",
                Material: "14k Yellow Gold, Natural Diamond",
                Amount: 400,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/DiamondMiniStuds.jpg"
            },
            {
                id: 12,
                productName: "Serpentine Chain Bracelet",
                category: "Bracelets",
                Material: "14k Yellow Gold",
                Amount: 1000,
                gender: "Woman",
                img_url: "https://leahbasson.github.io/MyImages/jsProject/SerpentineChainBracelet.jpg"
            }
        ]  
    )
) 

//Code for everytime you add a recent product
function recentProducts(){
    let latestProducts = products.reverse().slice(0, 4);
    console.log(latestProducts);
    latestProducts.forEach(product => {
        wrapper.innerHTML += `
        <div class="card">
            <img src="${[product.img_url]}" class="card-img-top" alt="${product.productName}">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <h4 class="product-amount">R${product.Amount}</h4>
                <p class="card-text">${product.Material}</p>
            </div>
        </div> `
        
    })
}

recentProducts()
