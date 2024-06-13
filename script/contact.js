// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()


// Function to validate form fields
function validateForm() {
    let form = document.forms["myForm"];
    let name = form["name"].value;
    let email = form["email"].value;
    let phone = form["phone"].value;
    let message = form["message"].value;

    if (name === "") {
        document.getElementById("name_error").innerHTML = "Please enter your name";
        return false; // Prevent form submission
      } 
      else if (email === ""){
        document.getElementById("email_error").innerHTML = "Please enter your email address";
        return false; 
      }
      else if (phone === ""){
        document.getElementById("phone_error").innerHTML = "Please enter your phone number";
        return false; 
      }
      else if (message === ""){
        document.getElementById("message_error").innerHTML = "Please enter your inquiry";
        return false; 
      }

      else {
        document.getElementById("name_error").innerHTML = ""; // Clear the error message
        document.getElementById("email_error").innerHTML = "";
        document.getElementById("phone_error").innerHTML = "";
        document.getElementById("message_error").innerHTML = "";
      }
    
  
    return true; // Allow form submission if validation passes
  }
  

 // Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    let form = document.forms["myForm"];
  
    // Attach the event listener to the form's submit event
    form.addEventListener("submit", function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Call the validateForm function and check if it returns true
      if (validateForm()) {
        // If validation passes, submit the form
        event.target.submit();
      }
    });
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