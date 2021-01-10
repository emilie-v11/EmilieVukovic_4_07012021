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
// const modalBtn = document.querySelector(".modal-btn");
const modalBtn = document.querySelector(".btn-signup");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");


// launch modal event and form
modalBtn.addEventListener("click", function() {
    modalbg.style.display = "block";
});


// close modal event and form
modalCross.addEventListener("click", function() {
    modalbg.style.display = "none";
});
