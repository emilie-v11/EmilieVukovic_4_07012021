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
