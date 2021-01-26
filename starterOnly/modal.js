//==============================================================================================
// DOM Elements
//================

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

//=======================================================
// DOM elements Variable Form
//================

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
// let birthdateRegExp = /^(\d{4})-(\d{2})-(\d{2})*$/;
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
// Functions for launch & close modal / event
//=======================================================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal Event and form
modalCloseBtn.addEventListener("click", function() {
    modalbg.style.display = "none"; });


//==============================================================================================
// Functions for Check the input value in Form 
//=============================================

//variables & functions for error messages ================================
let formDataArr = Array.from(formDataInput);
let errorMessageArr = Array.from(errorMessage);

function errorMessageOn(index) {
	errorMessageArr[index].classList.add("data-error");
	formDataArr[index].classList.add("data-error-visible", true);
};

function errorMessageOff(index) {
	errorMessageArr[index].classList.remove("data-error");
	formDataArr[index].classList.remove("data-error-visible");
};
//==========================================================================

function checkFirstName() {
    if (!nameRegExp.test(firstName.value)) {
        errorMessageOn(0);
        return valid = false;
    } else {
        errorMessageOff(0);
        return valid = true;
    }
}

function checkLastName() {
    if (!nameRegExp.test(lastName.value)) {
        errorMessageOn(1);
        return valid = false;
    } else {
        errorMessageOff(1);
        return valid = true;
    }
}

function checkEmail() {
    if (!emailRegExp.test(email.value)) {
        errorMessageOn(2);
        return valid = false;
    } else {
        errorMessageOff(2);
        return valid = true;
    }
}

function checkBirthdate() {
    if (!birthdateRegExp.test(birthdate.value)) {
        errorMessageOn(3);
        return valid = false;
    } else {
        errorMessageOff(3);
        return valid = true;
    }
}

function checkQuantity() {
    if (!quantityRegExp.test(quantity.value)) {
        errorMessageOn(4);
        return valid = false;
    } else {
        errorMessageOff(4);
        return valid = true;
    }
}

function checkLocation() {
    let checkedCount = 0;

    for (let i = 0; i < locations.length; i++) {
        if(locations[i].checked) {
            checkedCount++;
        }};

    if (checkedCount === 0) {
        errorMessageOn(5);
        return valid = false;
    } else {
        errorMessageOff(5);
        return valid = true;
    }
}

function checkCGU() {
    let checkedCount = cgu.checked;

    if (!checkedCount) {
        errorMessageOn(6);
        return valid = false;
    } else {
        errorMessageOff(6);
        return valid = true;
    }
}

function checkNewsletter() {
    let checkedCount = newsletter.checked;

    if (!checkedCount) {
        return valid = true;
    } else {
        return valid = true;
    }
}

//==============================================================================================
// Verification validity of the form on submit button
//===================================================

const succesMessage = document.querySelector(".success-message");

mainForm.addEventListener("submit", function(e) {
    e.preventDefault()

    checkFirstName()
    checkLastName()
    checkEmail()
    checkBirthdate()
    checkQuantity()
    checkLocation()
    checkCGU()
    checkNewsletter()

    console.log(checkFirstName(firstName.value));
    console.log(checkLastName(lastName.value));
    console.log(checkEmail(email.value));
    console.log(checkBirthdate(birthdate.value));
    console.log(checkQuantity(quantity.value));
    console.log(checkLocation(locations.value));
    console.log(checkCGU(cgu.value));
    console.log(checkNewsletter(checkbox1.value));

    if (formDataArr === false) {
        return ("formulaire non valide")
        e.preventDefault;
    } else {

    }
})

