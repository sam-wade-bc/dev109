function validateForm(event) {
   
// Set validity variable to start
var isValid = true;

// establish each validation ids
var invalidDiv = document.getElementById("invalidDiv");
var firstNameInvalidDiv = document.getElementById("firstNameInvalidDiv");
var lastNameInvalidDiv = document.getElementById("lastNameInvalidDiv");
var emailInvalidDiv = document.getElementById("emailInvalidDiv");
var phoneInvalidDiv = document.getElementById("phoneInvalidDiv");
var usernameInvalidDiv  = document.getElementById("usernameInvalidDiv");
var passwordInvalidDiv = document.getElementById("passwordInvalidDiv");
var addressInvalidDiv = document.getElementById("addressInvalidDiv");
var stateInvalidDiv = document.getElementById("stateInvalidDiv");
var cityInvalidDiv = document.getElementById("cityInvalidDiv");
var countryInvalidDiv = document.getElementById("countryInvalidDiv");
var zipCodeInvalidDiv = document.getElementById("zipCodeInvalidDiv");

// Set all error messages clear first
invalidDiv.innerHTML = "";
firstNameInvalidDiv.innerHTML = "";
lastNameInvalidDiv.innerHTML = "";
emailInvalidDiv.innerHTML = "";
phoneInvalidDiv.innerHTML = "";
usernameInvalidDiv.innerHTML = "";
passwordInvalidDiv.innerHTML = "";
addressInvalidDiv.innerHTML = "";
cityInvalidDiv.innerHTML="";
stateInvalidDiv.innerHTML = "";
zipCodeInvalidDiv.innerHTML = "";
    

// Establish variables to validate from form submit
var firstName = document.getElementById("FirstName").value.trim();
var lastName = document.getElementById("LastName").value.trim();
var email = document.getElementById("Email").value.trim();
var phone = document.getElementById("Phone").value.trim();
var username = document.getElementById("Username").value.trim();
var password = document.getElementById("Password").value.trim();
var address = document.getElementById("Address").value;
var city = document.getElementById("City").value.trim();
var state = document.getElementById("State").value.trim();
var country = document.getElementById("Country").value;
var zipCode = document.getElementById("ZipCode").value.trim();


//Validate first name
    if (firstName === "" || firstName.length > 20) {
        firstNameInvalidDiv.innerHTML = "<p>Please enter your first name (max length: 20)</p>";
        isValid = false;
    }

//Validate Last Name
    if (lastName === "" || lastName.length > 20) {
        lastNameInvalidDiv.innerHTML = "<p>Please enter your last name (max length: 20)</p>";
        isValid = false;
    }

//Establish email regular expression then validate
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        emailInvalidDiv.innerHTML = "<p>Please enter a valid email address</p>";
        isValid = false;
    }
//Establish phone regular expression then validate
    var phoneRegex = /^[0-9]+$/;
    if (phone === "" || !phoneRegex.test(phone) || phone.length < 10 || phone.length > 15) {
        phoneInvalidDiv.innerHTML = "<p>Please enter a valid phone number (10-15 digits)</p>";
        isValid = false;
    }

//Validate username
    if (username.length>12|| username===""){
       usernameInvalidDiv.innerHTML = "<p>Invalid username (Max length: 12)</p>";
       isValid=false;
}

//Validate password
    var hasUpperCase = /[A-Z]/;
    var hasLowerCase = /[a-z]/;
    var hasNumber = /[0-9]/;
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    if (password===""){
       passwordInvalidDiv.innerHTML += "<p>Please enter a valid password</p>";
       isValid=false;
     }
    else
    {
    if (!hasUpperCase.test(password)){
       passwordInvalidDiv.innerHTML += "<p>Password is missing a capital letter</p>";
       isValid=false;
     }
    if(!hasLowerCase.test(password)){
       passwordInvalidDiv.innerHTML += "<p>Password is missing a lower case letter</p>";
       isValid=false;
     }
    if(!hasNumber.test(password)){
       passwordInvalidDiv.innerHTML += "<p>Password is missing a number</p>";
       isValid=false;
     }
    if(!hasSpecialChar.test(password)){
       passwordInvalidDiv.innerHTML += "<p>Password is missing a special character</p>";
       isValid=false;
     }
    if(password.length>7){
       passwordInvalidDiv.innerHTML += "<p>Password is too long (Max length: 7)</p>";
       isValid=false;
    }
    }


//Validate address with length or blank
    if (address === "" || address.length > 50) {
        addressInvalidDiv.innerHTML = "<p>Please enter your Address (max length: 50)</p>";
        isValid = false;
    }

//Validate city

if (city === ""||city.length>15){
  cityInvalidDiv.innerHTML="<p>Invlaid City (Max characters:15)</p>";
  isValid = false;
}

//Validate state only if country is USA
    if (country==="001" && state === "000"){
       stateInvalidDiv.innerHTML = "<p>Please Select a State</p>";
       isValid = false;
    }
    if (state==="000" && country==="000"){
       stateInvalidDiv.innerHTML = "<p>Please Select a State and Country</p>";
       isValid = false;
      
    }

//Validate country
    if (country.value === "000") {
        countryInvalidDiv.innerHTML = "<p>Please select a valid Country</p>";
        isValid = false;
    }
//Establish zip code regular exression then validate 
    var zipRegex = /^\d{5}$/;
    if (zipCode===""||!zipRegex.test(zipCode)){
       zipCodeInvalidDiv.innerHTML = "<p>Please enter a valid 5 digit zip code.</p>";
       isValid = false;  
    }
  
//Set error if the form is invalidated in any way and set action.
    if (!isValid) {
        invalidDiv.innerHTML = "<p>Please correct the above errors before submitting again</p>";
        event.preventDefault();
        return false;
    }
//Finaly return true if valid
      return true;   
}
