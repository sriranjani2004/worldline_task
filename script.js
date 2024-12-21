function validateForm() {
    // Get form elements
    var surname = document.getElementById("surname").value;
    var firstname = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var confirmemail = document.getElementById("confirmemail").value;
    var mobile = document.getElementById("mobile").value;
    var confirmobile = document.getElementById("confirmobile").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var companyname = document.getElementById("companyname").value;
    var companyaddress = document.getElementById("companyaddress").value;
    var companyphone = document.getElementById("companyphone").value;
  
    // Regular expressions for email and mobile number validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileRegex = /^\d{10}$/;
  
    // Validate fields
    if (surname == "") {
      alert("Please enter your surname.");
      return false;
    }
    if (firstname == "") {
      alert("Please enter your first name.");
      return false;
    }
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (confirmemail == "") {
      alert("Please confirm your email address.");
      return false;
    }
    if (email != confirmemail) {
      alert("Email addresses do not match.");
      return false;
    }
    if (mobile == "") {
      alert("Please enter your mobile number.");
      return false;
    } else if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (confirmobile == "") {
      alert("Please confirm your mobile number.");
      return false;
    }
    if (mobile != confirmobile) {
      alert("Mobile numbers do not match.");
      return false;
    }
    if (password == "") {
      alert("Please enter your password.");
      return false;
    }
    if (confirmpassword == "") {
      alert("Please confirm your password.");
      return false;
    }
    if (password != confirmpassword) {
      alert("Passwords do not match.");
      return false;
    }
    if (companyname == "") {
      alert("Please enter your company name.");
      return false;
    }
    if (companyaddress == "") {
      alert("Please enter your company address.");
      return false;
    }
    if (companyphone == "") {
      alert("Please enter your company phone number.");
      return false;
    }
  
    // If all validations pass, submit the form
    return true;
  }