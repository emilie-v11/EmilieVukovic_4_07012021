function editNav() {
  var x = document.getElementById("myTopnav");
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
const modalCross = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal Event and form
modalCross.addEventListener("click", function() {
    modalbg.style.display = "none"; });

/* ! 2 méthodes : laquelle mieux ??? 
** Demander à Thomas laquelle est la plus correcte

*Close Modal Event and Form
modalCross.addEventListener("click", function() {
    modalbg.style.display = "none";
    }));

                OU

*Close Modal Event
modalCross.addEventListener("click", closeModal);

*Close Modal Form
function closeModal() {
    modalbg.style.display = "none";
}

*/


/**
 * Session Thomas
 * 
 * - 1. Sélectionner le formulaire
 * - 2. Ajouter un event listener au submit du formulaire (autrement dit, je vais déclencher quand le formulaire va être soumis)
 * - 3. Sélectionner le noeud (input) prénom
 * - 4. J'essaye de faire un logger sa valeur au submit du form

 */

// Je sélectionne le noeud .main-form
const mainForm = document.querySelector('.main-form')
const firstName = document.querySelector('#first')


function checkFirstName(value) {
  if (value < 2) {
    console.log("Le formulaire n'est pas bon, la valeur fait moins de 2 caractères")
  } else {
    console.log("Tout est ok, cette valeur est correct")
  }
}

// Ajouter mon event listener au submit
mainForm.addEventListener('submit', function(event) {
  event.preventDefault()

  // Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  checkFirstName(firstName.value.length)
})

