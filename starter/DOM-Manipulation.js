'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

//Reload Game
document.querySelector(".again").addEventListener("click", () => {    
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";    
    document.querySelector("h1").textContent = "Guess My Number!";
    document.querySelector("body").style.backgroundColor = "#149ef8";
});


//Handling click events and Number input scenarios
document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    
    //when there is no input
    if(!guess) {
        displayMessage("Please enter a Number.");
    }

    //when player wins
    else if(guess === secretNumber) {
        displayMessage("Correct Number!");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        
        //setting highscore display
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    //when the guess is wrong
    else if (guess !== secretNumber) {
        if(score > 1) {
         displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
        score--;
        document.querySelector(".score").textContent = score;    
        } else {
        displayMessage("You Lost the Game...");
        document.querySelector("h1").textContent = "You Lost the Game...";
        document.querySelector("body").style.backgroundColor = "#e20713";
        } 
    }  
});