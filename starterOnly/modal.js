//==============================================================================================
// DOM Elements
//================

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const modalSuccess = document.querySelector(".modal-success");
const successMessageBtn = document.querySelector(".btn-success");
const modalCloseBtn2 = document.querySelector(".close2");

const mainForm = document.querySelector(".main-form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.getElementsByName("location");
const cgu = document.querySelector("#checkbox1");
const newsletter = document.querySelector("#checkbox2");

const errorMessage = document.querySelectorAll(".errorMessage");
const formDataInput = document.querySelectorAll(".formData input");

//=======================================================
// Variable / Regular Expression
//==============================
let valid = true;

// Regex rules allow: Capital, lowercase and accent's letters, hyphen, apostrophe.
// & prohibit : numbers, specials characteres, spaces.      
let nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;

// Regex format : rules allow letters/numbers/dot {min-lenght 2} + [@]+ letters/numbers {min-lenght 2} + [.] + letters {min-lenght 2,20}
let emailRegExp = /^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$/;

//  Regex just for format JJ/MM/AAAA - unlimited age.
// let birthdateRegExp = /^(\d{2}[/]\d{2}[/]\d{4})|(\d{4})-(\d{2})-(\d{2})$/;

// Regex for format JJ/MM/AAAA and year of birth = 1930 < 2009 for valid birthdate.
// Just numbers.
let birthdateRegExp = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// Regex for number 0 to 99.
// Just numbers.
let quantityRegExp = /^([0-9]){1,2}$/;

//==============================================================================================
// Functions for TopNav responsive
//========================

function editNav() {
    const x = document.getElementById("myTopnav");
    const iconTopNav = document.querySelector(".fa-bars");
      if (x.className === "topnav") {
          x.className += " responsive";
          iconTopNav.style.color = "transparent";
      } else {
          x.className = "topnav";
          iconTopNav.style.color = "#FE142F";
      }
  }
  
//==============================================================================================
// Launch modal form
//========================

// launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
    modalbg.style.display = "block";
}

//===============================================================
// Close modal form
// & without reset form input
//===========================

// with Cross-sign-btn
modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
    modalbg.style.display = "none";
}

//===============================================================
// Close modal-success message
// & reset form input
//===========================

// with Cross-sign-btn: "X"
modalCloseBtn2.addEventListener("click", closeModalSuccess);

// with btn: "FERMER"
successMessageBtn.addEventListener("click", closeModalSuccess);

function closeModalSuccess() {
    modalbg.style.display = "none";
    modalSuccess.style.display = "none";
    mainForm.reset();
}

//==============================================================================================
// Variables & functions for error messages
//==========================================

// Array with all form Input
let formDataArr = Array.from(formDataInput);

// Array with all message error 
// Inside <span class="error-message"></span>
let errorMessageArr = Array.from(errorMessage);

// Function Display error message when validation is not valid
function displayErrorMessage(index) {
    // Add class="error-message" at span under input form
    // & add style CSS for error message : display: block and color: red
    errorMessageArr[index].classList.add("data-error");

    // Add class="data-error-visible" at input form
    // & add style CSS for error message : border-color: red
	formDataArr[index].classList.add("data-error-visible");
};

// Function Hide error message when validation is valid
function hideErrorMessage(index) {
    // Remove class="error-message" in span 
    // & remove style CSS for error message
    errorMessageArr[index].classList.remove("data-error");

    // Remove class="data-error-visible" in span
    // & remove style CSS for error message
    formDataArr[index].classList.remove("data-error-visible");
};

//=============================================
// Functions for Check the input value in Form 
//=============================================

function checkFirstName() {
    if (!nameRegExp.test(firstName.value)) {
        displayErrorMessage(0);
        valid = false;
    } else {
        valid;
        hideErrorMessage(0);
    }
    return valid;
};

function checkLastName() {
    if (!nameRegExp.test(lastName.value)) {
        displayErrorMessage(1);
        valid = false;
    } else {
        valid;
        hideErrorMessage(1);
    }
    return valid;
}

function checkEmail() {
    if (!emailRegExp.test(email.value)) {
        displayErrorMessage(2);
        valid = false;
    } else {
        valid;
        hideErrorMessage(2);
    }
    return valid;
}

function checkBirthdate() {
    if (!birthdateRegExp.test(birthdate.value)) {
        displayErrorMessage(3);
        valid = false;
    } else {
        valid;
        hideErrorMessage(3);
    }
    return valid;
}

function checkQuantity() {
    if (!quantityRegExp.test(quantity.value)) {
        displayErrorMessage(4);
        valid = false;
    } else {
        valid;
        hideErrorMessage(4);
    }
    return valid;
}

function checkLocations() {
    let checkedCount = 0;

    for (let i = 0; i < locations.length; i++) {
        if(locations[i].checked) {
            checkedCount++;
        }};

    if (checkedCount === 0) {
        displayErrorMessage(5);
        valid = false;
    } else {
        valid;
        hideErrorMessage(5);
    }
    return valid;
}

function checkCGU() {
    let checkedCount = cgu.checked;

    if (!checkedCount) {
        displayErrorMessage(6);
        valid = false;
    } else {
        valid;
        hideErrorMessage(6);
    }
    return valid;
}

// Not required
// This input is valid when it's checked or not checked.
function checkNewsletter() {
    let checkedCount = newsletter.checked;
    if (checkedCount || !checkedCount) {
        valid;
    }
    return valid;
}

//==============================================================================================
// Form validation on submit button
// & open the modal with success message
//===================================================

mainForm.addEventListener("submit",function(e) {
    e.preventDefault();
    valid = true;

    checkFirstName(firstName.value);
    checkLastName(lastName.value);
    checkEmail(email.value);
    checkBirthdate(birthdate.value);
    checkQuantity(quantity.value);
    checkLocations(locations.value);
    checkCGU(cgu.value);
    checkNewsletter(newsletter.value);

    if(valid) {
        modalSuccess.style.display = "block";
    }
    return valid;  
});
