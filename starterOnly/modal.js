/**
 * DOM Elements
 */
const formData = document.querySelectorAll(".formData");
const iconTopNav = document.querySelector(".fa-bars");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const modalCloseBtn2 = document.querySelector(".close2");
const modalSuccess = document.querySelector(".modal-success");
const successMessageBtn = document.querySelector(".btn-success");
const x = document.getElementById("myTopnav");

const birthdateInput = document.querySelector("#birthdate");
const cguCheckbox = document.querySelector("#checkbox1");
const emailInput = document.querySelector("#email");
const firstNameInput = document.querySelector("#first");
const formDataInput = document.querySelectorAll(".formData input");
const lastNameInput = document.querySelector("#last");
const locationsRadio = document.getElementsByName("location");
const mainForm = document.querySelector(".main-form");
const quantityInput = document.querySelector("#quantity");

const errorMessage = document.querySelector(".error-message");
const errorMessageBirthdate = document.querySelector(".error-birthdate");
const errorMessageCGU = document.querySelector(".error-cgu");
const errorMessageEmail = document.querySelector(".error-email");
const errorMessageFirst = document.querySelector(".error-first");
const errorMessageLast = document.querySelector(".error-last");
const errorMessageLocations = document.querySelector(".error-locations");
const errorMessageQuantity = document.querySelector(".error-quantity");


/**
 * REGEX
 */
// Regex rules allow: Capital, lowercase and accent's letters, hyphen, apostrophe.
// & prohibit : numbers, specials characteres, spaces.      
const nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;

// Regex format : rules allow letters/numbers/dot {min-lenght 2} + [@]+ letters/numbers {min-lenght 2} + [.] + letters {min-lenght 2,20}
const emailRegExp = /^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$/;

// Regex for format JJ/MM/AAAA and year of birth = 1930 < 2009 for valid birthdate.
// Just numbers.
const birthdateRegExp = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

// Regex for number 0 to 99.
// Just numbers.
const quantityRegExp = /^([0-9]){1,2}$/;


/**
 * Functions related to display and layouts
 */
function editNav() {
    if (x.className === "topnav") {
        x.className += " responsive";
        iconTopNav.style.color = "transparent";
    } else {
        x.className = "topnav";
        iconTopNav.style.color = "#FE142F";
    }
}


function displayModal() {
    modalbg.style.display = "block";
}


function closeModal() {
    modalbg.style.display = "none";
}


function closeModalSuccess() {
    modalbg.style.display = "none";
    modalSuccess.style.display = "none";
    mainForm.reset();
}


/**
 * Functions related to check form
 */
function checkFirstName() {
    const isFirstNameCorrect = nameRegExp.test(firstNameInput.value)

    if (isFirstNameCorrect) {
        errorMessageFirst.style.display = "none";
        firstNameInput.style.border = "none";
    } else {
        errorMessageFirst.style.display = "block";
        firstNameInput.style.border = "red 2px solid";
    }
    
    return isFirstNameCorrect
}


function checkLastName() {
    const isLastNameCorrect = nameRegExp.test(lastNameInput.value)

    if (isLastNameCorrect) {
        errorMessageLast.style.display = "none";
        lastNameInput.style.border = "none";        
    } else {
        errorMessageLast.style.display = "block";
        lastNameInput.style.border = "red 2px solid";
    }

    return isLastNameCorrect
}


function checkEmail() {
    const isEmailCorrect = emailRegExp.test(emailInput.value)

    if (isEmailCorrect) {
        errorMessageEmail.style.display = "none";
        emailInput.style.border = "none";
    } else {
        errorMessageEmail.style.display = "block";
        emailInput.style.border = "red 2px solid";
    }
    
    return isEmailCorrect;
};

function checkBirthdate() {
    const isBirthdateCorrect = birthdateRegExp.test(birthdateInput.value)

    if (isBirthdateCorrect) {
        errorMessageBirthdate.style.display = "none";
        birthdateInput.style.border = "none";        
    } else {
        errorMessageBirthdate.style.display = "block";
        birthdateInput.style.border = "red 2px solid";
    }

    return isBirthdateCorrect;
}


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


function checkLocations() {
    let checkedCount = 0;

    for (let i = 0; i < locationsRadio.length; i++) {
        if(locationsRadio[i].checked) {
            checkedCount++;
        }
    }

    const isCheckCountValid = checkedCount > 0;

    if (isCheckCountValid) {
        errorMessageLocations.style.display = "none";
    } else {
        errorMessageLocations.style.display = "block";
    }

    return isCheckCountValid;
}


function checkCGU() {
    const isCGUChecked = cguCheckbox.checked;

    if (isCGUChecked) {
        errorMessageCGU.style.display = "none";        
    } else {
        errorMessageCGU.style.display = "block";
    }

    return isCGUChecked;
}


/**
 * Event Listeners
 */
modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));

modalCloseBtn.addEventListener("click", closeModal);

modalCloseBtn2.addEventListener("click", closeModalSuccess);

successMessageBtn.addEventListener("click", closeModalSuccess);

mainForm.addEventListener("submit",function(e) {
    e.preventDefault();
    const isFormValid = checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkQuantity() && checkLocations() && checkCGU();

    checkFirstName();
    checkLastName();
    checkEmail();
    checkBirthdate();
    checkQuantity();
    checkLocations();
    checkCGU();

    if(isFormValid) {
        modalSuccess.style.display = "block";
    }
});