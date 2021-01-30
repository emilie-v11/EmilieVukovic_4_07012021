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
// Variable RegExp
//================
let valid = true;
let nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;
let emailRegExp = /^([a-zA-Z0-9.]{1,})+@([a-zA-Z0-9-]{2,})+[.]+([a-zA-Z0-9-]{2,4})$/;
let birthdateRegExp = /^(\d{2}[/]\d{2}[/]\d{4})|(\d{4})-(\d{2})-(\d{2})$/;
let quantityRegExp = /^([0-9]){1,2}$/;

//==============================================================================================
// Functions for TopNav responsive
//=======================================================

function editNav() {
    const x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
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
function errorMessageOn(index) {
    // Add class="error-message" at span under input form
    // & add style CSS for error message : display: block and color: red
    errorMessageArr[index].classList.add("data-error");

    // Add class="data-error-visible" at input form
    // & add style CSS for error message : border-color: red
	formDataArr[index].classList.add("data-error-visible");
};

// Function Hide error message when validation is valid
function errorMessageOff(index) {
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
        errorMessageOn(0);
        valid = false;
    } else {
        valid;
        errorMessageOff(0);
    }
    return valid;
};

function checkLastName() {
    if (!nameRegExp.test(lastName.value)) {
        errorMessageOn(1);
        valid = false;
    } else {
        valid;
        errorMessageOff(1);
    }
    return valid;
}

function checkEmail() {
    if (!emailRegExp.test(email.value)) {
        errorMessageOn(2);
        valid = false;
    } else {
        valid;
        errorMessageOff(2);
    }
    return valid;
}

function checkBirthdate() {
    if (!birthdateRegExp.test(birthdate.value)) {
        errorMessageOn(3);
        valid = false;
    } else {
        valid;
        errorMessageOff(3);
    }
    return valid;
}

function checkQuantity() {
    if (!quantityRegExp.test(quantity.value)) {
        errorMessageOn(4);
        valid = false;
    } else {
        valid;
        errorMessageOff(4);
    }
    return valid;
}

function checkLocation() {
    let checkedCount = 0;

    for (let i = 0; i < locations.length; i++) {
        if(locations[i].checked) {
            checkedCount++;
        }};

    if (checkedCount === 0) {
        errorMessageOn(5);
        valid = false;
    } else {
        valid;
        errorMessageOff(5);
    }
    return valid;
}

function checkCGU() {
    let checkedCount = cgu.checked;

    if (!checkedCount) {
        errorMessageOn(6);
        valid = false;
    } else {
        valid;
        errorMessageOff(6);
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
    checkLocation(locations.value);
    checkCGU(cgu.value);
    checkNewsletter(newsletter.value);

    if(valid) {
        modalSuccess.style.display = "block";
    }
    return valid;  
});
