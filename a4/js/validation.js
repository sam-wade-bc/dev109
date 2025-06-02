function validateForm() {
    
// Set validity variable
    var isValid = true;

// Clear previous messages
    var errorMessagesDiv = document.getElementById("errorMessages");
    errorMessagesDiv.innerHTML = "";

// Establish variables to validate
    var firstName = document.getElementById("FirstName").value.trim();
    var lastName = document.getElementById("LastName").value.trim();
    var email = document.getElementById("EMail").value.trim();
    var phone = document.getElementById("Phone").value.trim();
    var username = document.getElementById("Username").value.trim();
    var password = document.getElementById("Password").value.trim();
    var address = document.getElementById("Address").value.trim();
    var city = document.getElementById("City").value.trim();
    var state = document.getElementById("State").value.trim();
    var country = document.getElementById("Country").value;
    var zipCode = document.getElementById("ZipCode").value.trim();


//Validate first name
    if (firstName === "" || firstName.length > 20) {
        errorMessagesDiv.innerHTML += "<p>Please enter your First Name (max length: 20).</p>";
        isValid = false;
    }

//Validate Last Name
    if (lastName === "" || lastName.length > 20) {
        errorMessagesDiv.innerHTML += "<p>Please enter your Last Name (max length: 20).</p>";
        isValid = false;
    }

//Establish email regular expression then validate
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        errorMessagesDiv.innerHTML += "<p>Please enter a valid Email address.</p>";
        isValid = false;
    }
//Establish phone regular expression then validate
    var phoneRegex = /^[0-9]+$/;
    if (phone === "" || !phoneRegex.test(phone)) {
        errorMessagesDiv.innerHTML += "<p>Please enter a valid Phone number (numeric only).</p>";
        isValid = false;
    }

//Validate username


//Validate password
    var hasUpperCase = /[A-Z]/;
    var hasLowerCase = /[a-z]/;
    var hasNumber = /[0-9]/;
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    var 
    if (!hasUpperCase.test(password)&& !hasLowerCase.test(password)&& !hasNumber.test(password)&& !hasSpecialChar(password)){
     errorMessagesDiv.innerHTML += "<p>Password is invalid, Please include one of each: Upper Case, Lower Case, Number, and Special Character.</p>";
     isValid=false;
    }

//Validate address with length
    if (address === "" || address.length > 50) {
        errorMessagesDiv.innerHTML += "<p>Please enter your Address (max length: 50).</p>";
        isValid = false;
    }

//Validate state only if country is USA
    if (country==="001" && state === "000"){
       errorMessagedDiv.innerHTML += "<p>Please Select a State</P>";
       isValid = false;
    }

//Validate country
    if (country === "000") {
        errorMessagesDiv.innerHTML += "<p>Please select a valid Country.</p>";
        isValid = false;
    }
//Establish zip code regular exression then validate 
    var zipRegex = /^[0-5]+$/;
    if (zipCode===""||!zipRegex.test(zipCode)){
       errorMessagesDiv.innerHTML += "<p>Please enter a valid zip code. (Max length: 5)</p>"
       isValid = false;  
    }
//Finaly return validity status to form. 
    return isValid;
}
