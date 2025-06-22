// var drumClick = document.querySelectorAll('button');
// let drum = new Audio();

// document.addEventListener("keydown", function(event){
    
//     switch (event.key){
//         case 'w':
//             drum.src = '../Drum Kit Starting Files/sounds/crash.mp3'
//             drum.play();
//             break;
//         case 'a':
//             drum.src = '.../Drum Kit Starting Files/sounds/kick-bass.mp3';
//             drum.play();
//             break;
//         case 's':
//             drum.src = '../Drum Kit Starting Files/sounds/snare.mp3';
//             drum.play();
//             break;
//         case 'd':
//             drum.src = '../Drum Kit Starting Files/sounds/tom-1.mp3';
//             drum.play();
//             break;
//         case 'j':
//             drum.src = '../Drum Kit Starting Files/sounds/tom-2.mp3';
//             drum.play();
//             break;
//         case 'k':
//             drum.src = '../Drum Kit Starting Files/sounds/tom-3.mp3';
//             drum.play();
//             break;
//         case 'l':
//             drum.src = '../Drum Kit Starting Files/sounds/tom-4.mp3';
//             drum.play();
//             break;
//     }
// });

var numberOfDrums = document.querySelectorAll(".drum").length

for (var i = 0;i < numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

};

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break
        default: console.log(buttonInnerHTML);
    };
};

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

};
