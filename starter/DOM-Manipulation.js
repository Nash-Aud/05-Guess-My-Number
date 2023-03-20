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
let score = 20;


//Handling click events and Number input scenarios
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    
    //when there is no input
    if(!guess) {
        document.querySelector(".message").textContent = "Please enter a Number."
    }

    //when player wins
    else if(guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number!"
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
    }

    //when guess is too High
    else if (guess > secretNumber) {
        if(score > 1) {
        document.querySelector(".message").textContent = "Too High!"
        score--;
        document.querySelector(".score").textContent = score;    
        } else {
        document.querySelector(".message").textContent = "You Lost the Game...";
        document.querySelector("h1").textContent = "You Lost the Game...";
        document.querySelector("body").style.backgroundColor = "#e20713";
        } 
    }

    //when guess is too low
    else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "Too Low!"
            score--;
            document.querySelector(".score").textContent = score;    
            } else {
            document.querySelector(".message").textContent = "You Lost the Game...";
            document.querySelector("h1").textContent = "You Lost the Game...";
            document.querySelector("body").style.backgroundColor = "#e20713";
            } 
    }
});