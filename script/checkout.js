// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()

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
