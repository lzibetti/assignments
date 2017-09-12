var timer = document.getElementById("explode");
var colorToPic = document.getElementById("body");
colorToPic.style.background = "blue";
var seconds = document.getElementById('seconds');
var display = document.getElementById('display');
var minutes = document.getElementById('minutes');
var colon = document.getElementById('colon');
var secondsDis = 20;

setInterval(function () {

    if (secondsDis >= 0) {
        seconds.innerHTML = secondsDis;
        if (secondsDis < 10) {
            seconds.innerHTML = "0" + secondsDis;
            colorToPic.style.background = (colorToPic.style.background !== "goldenrod") ? "goldenrod" : "blueviolet";
        }
        secondsDis = secondsDis - 1;
    } else {
        var display = document.getElementById("body");
        var sound = new Audio('sound.mp3');
        colorToPic.style.background = "";
        seconds.innerHTML = "";
        timer.innerHTML = "";
        sound.play(-3);
        display.className += "backgroundPic";
    }
}, 1000);
