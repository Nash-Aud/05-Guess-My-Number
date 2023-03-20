'use strict';
// //setting message
// document.querySelector(".message").textContent = "Correct Number!"

// //selecting elements
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 55;

// //setting a value in input field
// document.querySelector(".guess").value = 23;
// =================================================================================================================

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;




//Handling click events
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector(".message").textContent = "Please enter a Number."
    }
    else if(guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number!"
    }
    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too High!"
    }
    else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "Too Low!"
    }
});