// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

     // Function to validate footer form fields
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

// Getting cart items from localStorage
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
let checkoutTable = document.querySelector('[table-checkout]');


// Displaying cart items
function cartItems() {
  if (cart.length === 0) {
      checkoutTable.innerHTML = "<tr><td colspan='6'>Add items to your cart</td></tr>"; // Message that displays if no items in cart
      return;
  }

  let cartProducts = cart.reduce((groupedItems, item) => {
      if (!groupedItems[item.id]) {
          groupedItems[item.id] = [];
      }
      groupedItems[item.id].push(item);
      return groupedItems;
  }, {});

  let tableContent = "";
  let finalTotal = 0; // Initialize finalTotal

  for (let id in cartProducts) {
      let productGroup = cartProducts[id];
      let product = productGroup[0];
      let quantity = productGroup.length;
      let amount = product.Amount;
      let total = amount * quantity;
      finalTotal += total;

      try{
        tableContent +=
          `<tr >
              <td>${product.productName}</td>
              <td><img class="checkoutImages" src="${product.img_url}" alt="${product.productName}"></td>
              <td>${product.category}</td>
              <td>${quantity}</td>
              <td>R${product.Amount}</td>
              <td>R${total}</td>
          </tr>`;
        
      
      } 
      catch (e) {
        tableContent  +=  `<div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>`
      }
      
  }

  //Display amount due
  const headingElement = document.querySelector('#total-container'); 
  headingElement.textContent = `Amount Due : R${finalTotal}`;
  checkoutTable.innerHTML = tableContent;
}

// Call the cartItems function
cartItems();


//Purchase button
document.querySelector('[purchase]').addEventListener('click', () => {
  alert("Thank you for purchasing");
})

//Clear
document.querySelector('[clear]').addEventListener('click', () => {
  // Clear the cart and update local storage
  cart = []; // Clear the cart
  localStorage.setItem('checkout', JSON.stringify(cart)); // Update local storage
  cartItems(); // Update the cart display
  document.querySelector('#total-container').style.display = 'none'; // Hide the amount due
});

  // Get the footer form element
  let footerForm = document.forms["footerForm"];

  // Attach the event listener to the footer form's submit event
  footerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateFooterForm()) {
      event.target.submit();
    }
  });

  //Counter
  window.onload = () => {
    document.querySelector('[counter]').textContent = cart.length || 0;
};