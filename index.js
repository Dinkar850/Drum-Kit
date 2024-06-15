
function playAudio(keystroke) {
    var audio;
    switch(keystroke) {
        case 'w': audio = new Audio("sounds/tom-1.mp3"); audio.play(); break;
        case 's': audio = new Audio("sounds/tom-2.mp3"); audio.play(); break;
        case 'a': audio = new Audio("sounds/tom-3.mp3"); audio.play(); break;
        case 'd': audio = new Audio("sounds/tom-4.mp3"); audio.play(); break;
        case 'j': audio = new Audio("sounds/kick-base.mp3"); audio.play(); break;
        case 'k': audio = new Audio("sounds/snare.mp3"); audio.play(); break;
        case 'l': audio = new Audio("sounds/crash.mp3"); audio.play(); break;
        default: console.log("no music");
        
    }
}

document.querySelectorAll("button.drum").forEach((ele) => {ele.addEventListener("click", (event) => {
    playAudio(event.target.textContent);
    buttonChange(event.target.textContent); 
    console.log(event.target.textContent);
})}) 

document.addEventListener("keydown", (event) => {
    playAudio(event.key);
    buttonChange(event.key);
    console.log(event.key);
})



function buttonChange(keystroke) {
    const validKeystrokes = ['w', 'a', 's', 'j', 'd', 'k', 'l'];
    if (!validKeystrokes.includes(keystroke)) {
        return;
    }
    var buttonPressed = document.querySelector("." + keystroke);
    buttonPressed.classList.add("pressed");
    setTimeout(() => {
        buttonPressed.classList.remove("pressed");
    }, 100);
}



