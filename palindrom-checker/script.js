const inputBox = document.getElementById('input-box')
const display = document.getElementById('display-palindrom')
const cardContainer = document.getElementById('card-container')

function checkPalindrom(){
    if (inputBox.value === ""){
        alert("Empty");
    } else {
        let word = inputBox.value;
        if (word === word.split("").reverse().join("")){
            cardContainer.style.boxShadow = '0 0 24px rgba(59, 252, 0, 0.5)';
            cardContainer.style.transition = 'box-shadow 0.5s ease, transform 0.5s ease';
            display.innerText = `${word} is a palindrom`;
        } else {
            cardContainer.style.boxShadow = '0 0 24px rgba(252, 38, 0, 0.5)';
            cardContainer.style.transition = 'box-shadow 0.5s ease, transform 0.5s ease';
            display.innerText = `${word} is not a palindrom`;
        }
    }
    inputBox.value = "";
}