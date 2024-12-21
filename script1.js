function validateForm() {
    var regNo = document.getElementById("regNo").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;

    // Regular expressions for validation
    var regNoRegex = /^\d{2}[A-Z]{3}\d{4}$/;
    var usernameRegex = /^[a-zA-Z]+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var mobileRegex = /^\d{10}$/;
    var dobRegex = /^\d{2}\d{2}\d{4}$/;

    // Validate fields
    if (regNo == "") {
        alert("Please enter your registration number.");
        return false;
    } else if (!regNoRegex.test(regNo)) {
        alert("Invalid registration number format. Please follow the format 25BCE0001.");
        return false;
    }

    if (username == "") {
        alert("Please enter your username.");
        return false;
    } else if (!usernameRegex.test(username)) {
        alert("Username cannot contain digits.");
        return false;
    }

    if (password == "") {
        alert("Please enter your password.");
        return false;
    } else if (!passwordRegex.test(password)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character, and be at least 8 characters long.");
        return false;
    }

    if (mobile == "") {
        alert("Please enter your mobile number.");
        return false;
    } else if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    if (dob == "") {
        alert("Please enter your date of birth.");
        return false;
    } else if (!dobRegex.test(dob)) {
        alert("Invalid date of birth format. Please follow the format DDMMYYYY.");
        return false;
    }

    return true;
}