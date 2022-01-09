/*c) Write a JS function to validate contents of a form – 
the form should have at least one mandatory numerical field and one field to be 
checked with a regular expression(e.g.an e - mail).
Fields not passing validation should have their style modified to inform the user.
The JS function should return false if form fails validation, true if it passes.
*/
function validateForm() {
    //vars storing which elements failed validation
    var nameFailed = false;
    var ageFailed = false;
    var emailFailed = false;

    //vars storing form elements
    var name = document.forms[0].fullName;
    var nameLabel = document.getElementById("nameLabel");
    var age = document.forms[0].age;
    var ageLabel = document.getElementById("ageLabel");
    var email = document.forms[0].email;
    var emailLabel = document.getElementById("emailLabel");
    //instantiate regex's
    
    let emailRegex = /^.+[@][a-zA-Z]+\.com$/;
    let nameRegex = /^\D+\s\D+$/;
    
    //validation
    if (!nameRegex.test(name.value)) {
        nameFailed = true;
        name.style.color = "red";
        nameLabel.style.color = "red";
    }
    if (age.value === "" || age.value < 0) {
        ageFailed = true;
        age.style.color = "red";
        ageLabel.style.color = "red";
    }

    if (!emailRegex.test(email.value)) {
        emailFailed = true;
        email.style.color = "red";
        emailLabel.style.color = "red";
    }

    //return true if validation successful
    if (nameFailed || ageFailed || emailFailed) {
        document.getElementById("successIndicator").innerHTML = "Failure";
        return false;
    }
    else {
        document.getElementById("successIndicator").innerHTML = "Success!";
        return true;
    }
}