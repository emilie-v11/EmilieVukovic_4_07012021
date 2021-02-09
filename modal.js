/**
 * DOM Elements
 */
const myTopnav = document.getElementById("myTopnav");
const iconTopNav = document.querySelector(".fa-bars");
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const modalSuccess = document.querySelector(".modal-success");
const modalCloseBtn2 = document.querySelector(".close2");
const successMessageBtn = document.querySelector(".btn-success");

const mainForm = document.querySelector(".main-form");
const formDataInput = document.querySelectorAll(".formData input");
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const locationsRadio = document.getElementsByName("location");
const cguCheckbox = document.querySelector("#checkbox1");
const newsletterCheckbox = document.querySelector("#checkbox2");

const errorMessage = document.querySelector(".error-message");
const errorMessageFirst = document.querySelector(".error-first");
const errorMessageLast = document.querySelector(".error-last");
const errorMessageEmail = document.querySelector(".error-email");
const errorMessageBirthdate = document.querySelector(".error-birthdate");
const errorMessageQuantity = document.querySelector(".error-quantity");
const errorMessageLocations = document.querySelector(".error-locations");
const errorMessageCGU = document.querySelector(".error-cgu");


/**
 * REGEX
 */
// Regex for firstName & lastName.
// Regex rules allow: Capital, lowercase and accent's letters, hyphen, apostrophe.
// & prohibit : numbers, specials characteres, spaces.      
const nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;

// Regex for email.
// Regex format : rules allow letters/numbers/dot {min-lenght 2} + [@]+ letters/numbers {min-lenght 2} + [.] + letters {min-lenght 2,20}
const emailRegExp = /^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$/;

// Regex for birthdate.
// Regex for format JJ/MM/AAAA and year of birth = 1930 < 2009 for valid birthdate.
// Just numbers.
const birthdateRegExp = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// Regex for quantity.
// Regex for value 0 to 99.
// Just figures & numbers.
const quantityRegExp = /^([0-9]){1,2}$/;


/**
 * Functions related to display and layouts
 */

 // Topnav responsive for small screen
function editNav() {
    if (myTopnav.className === "topnav") {
        myTopnav.className += " responsive";
        iconTopNav.style.color = "#ffffff";
    } else {
        myTopnav.className = "topnav";
        iconTopNav.style.color = "#FE142F";
    }
}

// Display the modal with form
function displayModal() {
    modalbg.style.display = "block";
}

// Close the modal
function closeModal() {
    modalbg.style.display = "none";
}

// Close the modal with success message when the validation was successful
// And reset the form fields
function closeModalSuccess() {
    modalbg.style.display = "none";
    modalSuccess.style.display = "none";
    mainForm.reset();
}


/**
 * Functions related to check form
 * Test each fields with condition or regex
 */

 // Required, if the fields is empty or don't meet the regex requirements,
// an error message under the input is displayed,
// and colours the input's borders red.
function checkFirstName() {
    const isFirstNameValid = nameRegExp.test(firstNameInput.value)

    if (isFirstNameValid) {
        errorMessageFirst.style.display = "none";
        firstNameInput.style.border = "none";
    } else {
        errorMessageFirst.style.display = "block";
        firstNameInput.style.border = "red 2px solid";
    }
    
    return isFirstNameValid
}

// Required, if the fields is empty or don't meet the regex requirements,
// an error message under the input is displayed,
// and colours the input's borders red.
function checkLastName() {
    const isLastNameValid = nameRegExp.test(lastNameInput.value)

    if (isLastNameValid) {
        errorMessageLast.style.display = "none";
        lastNameInput.style.border = "none";        
    } else {
        errorMessageLast.style.display = "block";
        lastNameInput.style.border = "red 2px solid";
    }

    return isLastNameValid
}

// Required, if the fields is empty or don't meet the regex requirements,
// an error message under the input is displayed,
// and colours the input's borders red.
function checkEmail() {
    const isEmailValid = emailRegExp.test(emailInput.value)

    if (isEmailValid) {
        errorMessageEmail.style.display = "none";
        emailInput.style.border = "none";
    } else {
        errorMessageEmail.style.display = "block";
        emailInput.style.border = "red 2px solid";
    }
    
    return isEmailValid;
};

// Required, if the fields is empty or don't meet the regex requirements,
// an error message under the input is displayed,
// and colours the input's borders red.
function checkBirthdate() {
    const isBirthdateValid = birthdateRegExp.test(birthdateInput.value)

    if (isBirthdateValid) {
        errorMessageBirthdate.style.display = "none";
        birthdateInput.style.border = "none";        
    } else {
        errorMessageBirthdate.style.display = "block";
        birthdateInput.style.border = "red 2px solid";
    }

    return isBirthdateValid;
}

// Required, if the fields is empty or don't meet the regex requirements,
// an error message under the input is displayed,
// and colours the input's borders red.
function checkQuantity() {
    const isQuantityValid = quantityRegExp.test(quantityInput.value)

    if (isQuantityValid) {
        errorMessageQuantity.style.display = "none";
        quantityInput.style.border = "none";        
    } else {
        errorMessageQuantity.style.display = "block";
        quantityInput.style.border = "red 2px solid";
    }
    
    return isQuantityValid;
}

// Required, one radio-btn must be checked.
// If none is checked : an error message under the CGU input is displayed.
// no border's input for checkbox CGU.
function checkLocations() {
    let checkedCount = 0;

    for (let i = 0; i < locationsRadio.length; i++) {
        if(locationsRadio[i].checked) {
            checkedCount++;
        }
    }

    const isLocationsValid = checkedCount > 0;

    if (isLocationsValid) {
        errorMessageLocations.style.display = "none";
    } else {
        errorMessageLocations.style.display = "block";
    }

    return isLocationsValid;
}

// Required, this checkbox must be checked.
// If it isn't : an error message under the CGU input is displayed.
// no border's input for checkbox CGU.
function checkCGU() {
    const isCGUValid = cguCheckbox.checked;

    if (isCGUValid) {
        errorMessageCGU.style.display = "none";        
    } else {
        errorMessageCGU.style.display = "block";
    }

    return isCGUValid;
}


// Not required, so no error message
// This field is valid whether it is checked or not
function checkNewsletter() {
    const isNewsletterValid = newsletterCheckbox.checked || !newsletterCheckbox.checked;
    
    if (isNewsletterValid) {
    }
    return isNewsletterValid;
}


/**
 * Event Listeners
 */
// Event for display the modal of the form by clicking red buttons "Je m'inscris".
modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));

// Event for close the modal of the form by clicking on the button (X).
modalCloseBtn.addEventListener("click", closeModal);

// Event for close the modal of the success message by clicking on the button (X).
// And reset the form fields.
modalCloseBtn2.addEventListener("click", closeModalSuccess);

// Event for close the modal of the success message by clicking on the red button "Fermer".
// And reset the form fields.
successMessageBtn.addEventListener("click", closeModalSuccess);

// Event that submits the form after checking each field of the form. 
// They must all meet the conditions and constraints requested for success the submitting.
// If this the case, the modal with success message is displayed.
mainForm.addEventListener("submit",function(e) {
    e.preventDefault();
    const isFormValid = checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkQuantity() && checkLocations() && checkCGU() && checkNewsletter();

    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkQuantity();
    checkLocations();
    checkCGU();
    checkNewsletter();

    if(isFormValid) {
        modalSuccess.style.display = "block";
    }
});