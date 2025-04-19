var header = document.getElementById("header");
var diceImages1 = document.getElementById("img1");
var diceImages2 = document.getElementById("img2");

function randomNumber(){
    let randomGenerator1 = Math.random();
    let randomGenerator2 = Math.random();

    let roundDecimal = randomGenerator1.toFixed(1);
    let roundDecimal2 = randomGenerator2.toFixed(1);
    
    
    if (roundDecimal < 0.2) {
        diceImages1.setAttribute("src", "./images/dice1.png")
        roundDecimal = 1;
    } else if (0.2 < roundDecimal < 0.5) {
        diceImages1.setAttribute("src", "./images/dice2.png")
        roundDecimal = 2;
    } else if (0.5 < roundDecimal < 0.6){
        diceImages1.setAttribute("src", "./images/dice3.png")
        roundDecimal = 3;
    } else if (0.6 < roundDecimal < 0.7){
        diceImages1.setAttribute("src", "./images/dice4.png")
        roundDecimal = 4;
    } else if (0.7 < roundDecimal < 0.8){
        diceImages1.setAttribute("src", "./images/dice5.png")
        roundDecimal = 5;
    } else {
        diceImages1.setAttribute("src", "./images/dice6.png")
        roundDecimal = 6;
    }
    
    if (roundDecimal2 < 0.2) {
        diceImages2.setAttribute("src", "./images/dice1.png")
        roundDecimal2 = 1;
    } else if (0.2 < roundDecimal2 < 0.5) {
        diceImages2.setAttribute("src", "./images/dice2.png")
        roundDecimal2 = 2;
    } else if (0.5 < roundDecimal2 < 0.6){
        diceImages2.setAttribute("src", "./images/dice3.png")
        roundDecimal2 = 3;
    } else if (0.6 < roundDecimal2 < 0.7){
        diceImages2.setAttribute("src", "./images/dice4.png")
        roundDecimal2 = 4;
    } else if (0.7 < roundDecimal2 < 0.8){
        diceImages2.setAttribute("src", "./images/dice5.png")
        roundDecimal2 = 5;
    } else {
        diceImages2.setAttribute("src", "./images/dice6.png")
        roundDecimal2 = 6;
    }

    console.log(roundDecimal);
    console.log(roundDecimal2);

    if (roundDecimal > roundDecimal2) {
        header.innerText = "Player 1 WIN!";
    } else if (roundDecimal < roundDecimal2) {
        header.innerText = "Player 2 WIN!";
    } else {
        header.innerText = "DRAW";
    }
    
}

randomNumber();