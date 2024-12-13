
// Function to play the corresponding drum sound
function playSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        default:
            return; // Exit the function if the key is not recognized
    }
    audio.play();
}

// Function to animate the button
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Detecting button clicks
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting keyboard presses
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});
