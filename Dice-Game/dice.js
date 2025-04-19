var header = document.getElementById("header");
var diceImages1 = document.getElementById("img1");
var diceImages2 = document.getElementById("img2");

function randomNumber(){
    let randomGenerator1 = Math.floor(Math.random() * 6) + 1;
    let randomGenerator2 = Math.floor(Math.random() * 6) + 1;

    var diceImage1 = "images/dice" + randomGenerator1 + ".png";
    var diceImage2 = "images/dice" + randomGenerator2 + ".png";

    diceImages1.setAttribute("src", diceImage1);
    diceImages2.setAttribute("src", diceImage2);

    if (randomGenerator1 > randomGenerator2) {
        header.innerText = "Player 1 WIN!";
    } else if (randomGenerator1 < randomGenerator2) {
        header.innerText = "Player 2 WIN!";
    } else {
        header.innerText = "DRAW";
    }
    
}
