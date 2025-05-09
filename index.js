for(var i =0 ; i<=6; i++){
document.getElementsByClassName("drum")[i].addEventListener("click" , handleclick);
}

function handleclick(){
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);

    // this.style.color = "white";
}
document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonHtml(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case "a": 
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    }
}
function buttonAnimation(currentkey){
    var animation = document.querySelector("."+ currentkey);
    animation.classList.add("pressed");
    setTimeout(function(){
        animation.classList.remove("pressed");
    })
}
// document.querySelector(".w").addEventListener("click", function(){
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// });

// document.querySelector(".a").addEventListener("click", function(){
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// });

// document.querySelector(".s").addEventListener("click", function(){
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// });

// document.querySelector(".d").addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// });

// document.querySelector(".j").addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// });

// document.querySelector(".k").addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// });

// document.querySelector(".l").addEventListener("click", function(){
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// });