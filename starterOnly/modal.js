//==============================================================================================
// DOM ELEMENTS
//========================

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const modalSuccess = document.querySelector(".modal-success");
const successMessageBtn = document.querySelector(".btn-success");
const modalCloseBtn2 = document.querySelector(".close2");
const x = document.getElementById("myTopnav");
const iconTopNav = document.querySelector(".fa-bars");

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

// ======================================================
// Variable / Regular Expression                        
//========================
let valid = true;

// Regex rules allow: Capital, lowercase and accent's letters, hyphen, apostrophe.
// & prohibit : numbers, specials characteres, spaces.      
let nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;

// Regex format : rules allow letters/numbers/dot {min-lenght 2} + [@]+ letters/numbers {min-lenght 2} + [.] + letters {min-lenght 2,20}
let emailRegExp = /^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$/;

// Regex for format JJ/MM/AAAA and year of birth = 1930 < 2009 for valid birthdate.
// Just numbers.
let birthdateRegExp = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// Regex for number 0 to 99.
// Just numbers.
let quantityRegExp = /^([0-9]){1,2}$/;

//==============================================================================================
//  OPEN AND CLOSE MODAL
//==============================================================================================

// ======================================================
// Functions for TopNav responsive
//========================

function editNav() {
      if (x.className === "topnav") {
          x.className += " responsive";
          iconTopNav.style.color = "transparent";
      } else {
          x.className = "topnav";
          iconTopNav.style.color = "#FE142F";
      }
  };
  
// ======================================================
// Launch modal form
//========================

// launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
    modalbg.style.display = "block";
};

//===============================================================
// Close modal form
//===========================

// with Cross-sign-btn
modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
    modalbg.style.display = "none";
};

//===============================================================
// Close modal-success message
// & reset form input after passing the validation
//===========================

// with Cross-sign-btn: "X"
modalCloseBtn2.addEventListener("click", closeModalSuccess);

// with btn: "FERMER"
successMessageBtn.addEventListener("click", closeModalSuccess);

function closeModalSuccess() {
    modalbg.style.display = "none";
    modalSuccess.style.display = "none";
    mainForm.reset();
};

//==============================================================================================
//  VALIDATION SUBSCRIPTION FORM
//==============================================================================================

//==================================================
// Validation each Input
//========================

// when click on submit button of the form 
// event test each input with regex or condition.
//      If (!regex/condition(input.value)) {
//          => errorMessage display:block; 
//              + Input border red
//          => valid = false 
//      } else {
//          => errorMessage display:block; 
//              + Input border red
//          => valid = true 
//      }
//      ===> valid true for this Input

//==================================================
// Functions for Check the input value in Form 
//========================

function checkFirstName() {
    if(!nameRegExp.test(firstNameInput.value)) {
        errorMessageFirst.style.display = "block";
        firstNameInput.style.border = "red 2px solid";
        valid = false;
    } else {
        errorMessageFirst.style.display = "none";
        firstNameInput.style.border = "none";
        valid;
    }
    return valid;
};

function checkLastName() {
    if (!nameRegExp.test(lastNameInput.value)) {
        errorMessageLast.style.display = "block";
        lastNameInput.style.border = "red 2px solid";
        valid = false;
    } else {
        errorMessageLast.style.display = "none";
        lastNameInput.style.border = "none";
        valid;
    }
    return valid;
};

function checkEmail() {
    if (!emailRegExp.test(emailInput.value)) {
        errorMessageEmail.style.display = "block";
        emailInput.style.border = "red 2px solid";
        valid = false;
    } else {
        errorMessageEmail.style.display = "none";
        emailInput.style.border = "none";
        valid;
    }
    return valid;
};

function checkBirthdate() {
    if (!birthdateRegExp.test(birthdateInput.value)) {
        errorMessageBirthdate.style.display = "block";
        birthdateInput.style.border = "red 2px solid";
        valid = false;
    } else {
        errorMessageBirthdate.style.display = "none";
        birthdateInput.style.border = "none";
        valid;
    }
    return valid;
};

function checkQuantity() {
    if (!quantityRegExp.test(quantityInput.value)) {
        errorMessageQuantity.style.display = "block";
        quantityInput.style.border = "red 2px solid";
        valid = false;
    } else {
        errorMessageQuantity.style.display = "none";
        quantityInput.style.border = "none";
        valid;
    }
    return valid;
};

function checkLocations() {
    let checkedCount = 0;

    for (let i = 0; i < locationsRadio.length; i++) {
        if(locationsRadio[i].checked) {
            checkedCount++;
        }};

    if (checkedCount === 0) {
        errorMessageLocations.style.display = "block";
        valid = false;
    } else {
        errorMessageLocations.style.display = "none";
        valid;
    }
    return valid;
};

function checkCGU() {
    let checkedCount = cguCheckbox.checked;

    if (!checkedCount) {
        errorMessageCGU.style.display = "block";
        // cgu.style.border = "red 2px solid";
        valid = false;
    } else {
        errorMessageCGU.style.display = "none";
        // cgu.style.border = "none";
        valid;
    }
    return valid;
};

// Not required, so no error message
// This input is valid when it's checked or not checked.
function checkNewsletter() {
    let checkedCount = newsletterCheckbox.checked;

    if (checkedCount || !checkedCount) {
        valid;
    }
    return valid;
};

//==============================================================================================
// Form validation on submit button
// & open the modal with success message
//===================================================

// If each input = true 
// ===> valid all the form
// Display the modal with success message

mainForm.addEventListener("submit",function(e) {
    e.preventDefault();
    valid = true;

    checkFirstName(firstNameInput.value);
    checkLastName(lastNameInput.value);
    checkEmail(emailInput.value);
    checkBirthdate(birthdateInput.value);
    checkQuantity(quantityInput.value);
    checkLocations(locationsRadio.value);
    checkCGU(cguCheckbox.value);
    checkNewsletter(newsletterCheckbox.value);

    if(valid) {
        modalSuccess.style.display = "block";
    }
    return valid;  
});
