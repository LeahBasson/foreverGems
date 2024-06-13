// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()  

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