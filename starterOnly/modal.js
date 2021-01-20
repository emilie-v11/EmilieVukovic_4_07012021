
function editNav() {
  const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");


//change after delete the second button
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal Event and form
modalCloseBtn.addEventListener("click", function() {
    modalbg.style.display = "none"; });

//=============================================================
// Variable Form DOM elements:
let mainForm = document.querySelector(".main-form");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let locations = document.getElementsByName("location");
let checkbox1 = document.querySelector("#checkbox1");


// Variable Regex
let nameRegExp = /(^[A-ZÀ-Ÿa-z]+[-A-ZÀ-Ÿa-z]*)$/; // forbidden space between & after
let emailRegExp = /^([a-zA-Z0-9.]{1,})+@([a-zA-Z0-9-]{2,})+[.]+([a-zA-Z0-9-]{2,4})$/;
let birthdateRegExp = /(\d{4})-(\d{2})-(\d{2})/; // /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
let quantityRegExp = /^([0-9]|[0-9]){1,2}$/;

// Functions for Check the input value in Form
function checkFirstName() {
    if (!nameRegExp.test(firstName.value) || firstName.value.length < 2) {
        return ("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    } else {
        return ("prénom ok");
    }
}

function checkLastName() {
    if (!nameRegExp.test(lastName.value)|| lastName.value.length < 2) {
        return ("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    } else {
        return ("nom ok");
    }
}

function checkEmail() {
    if (!emailRegExp.test(email.value)) {
        return ("Veuillez entrer un email valide.");
    } else {
        return ("email ok");
    }
}

// TODO change regex for birthdate between 1920<2008 ??
function checkBirthdate() {
    if (!birthdateRegExp.test(birthdate.value)) {
        return ("Veuillez entrer une date de naissance valide.");
    } else {
        return ("date ok");
    }
}

function checkQuantity(value) {
    if (!quantityRegExp.test(quantity.value)) {
        return ("Veuillez entrer un chiffre entre 0 et 99.");
    } else {
        return ("nombre ok");
    }
}

function checkLocation() {
    let checkedCount = 0;

    for (let i = 0; i < locations.length; i++) {
        if(locations[i].checked) {
        checkedCount++;
        }};

    if (checkedCount === 0) {
        return ("Veuillez choisir une ville.");
    } else {
        return ("ville ok");
    }
}

function checkCheckbox1() {
    let checkedCount = checkbox1.checked;

    if (!checkedCount) {
        return ("Veuillez accepter les conditions d'utilisation.");
    } else {
        return ("CGU ok");
    }
}

function checkCheckbox2() {
    let checkedCount = checkbox2.checked;

    if (!checkedCount) {
        return ("Vous ne souhaitez pas être prévenu des prochains évènements.");
    } else {
        return ("on vous prévient ok");
    }
}


// Verification validity of the form on submit button
mainForm.addEventListener("submit", function(event) {
    event.preventDefault()

    checkFirstName(firstName.value)
    checkLastName(lastName.value)
    checkEmail(email.value)
    checkBirthdate(birthdate.value)
    checkQuantity(quantity.value)
    checkLocation(locations.value)
    checkCheckbox1(checkbox1.value)
    checkCheckbox2(checkbox1.value)


    console.log(checkFirstName(firstName.value));
    console.log(checkLastName(lastName.value));
    console.log(checkEmail(email.value));
    console.log(checkBirthdate(birthdate.value));
    console.log(checkQuantity(quantity.value));
    console.log(checkLocation(locations.value));
    console.log(checkCheckbox1(checkbox1.value));
    console.log(checkCheckbox2(checkbox1.value));
})

