// This is the end
//set a background
//display the stop watch
//countdown the the time

// Set the date we're counting down to
var timer = getElementById("explode");
var addColor = setInterval(function() {setColor(), }, 1000);
var countDown = new Date("Aug 7, 2017 18:37:25").getTime();

// Update the count down every 1 second
var time = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var timeFrame = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var minutes = Math.floor((timeFrame % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeFrame % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="explode"
    document.getElementById("explode").innerHTML = minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(time);
        document.getElementById("explode").innerHTML = "World has been destroyed";
    }
}, 1000);

function setColor() {
    var colorToPic = document.body;
    colorToPic.style.backgroundColor = colorToPic.style.backgroundColor === "goldenrod" ? "blueviolet" : "goldenrod";
}

function worldEnds() {
    clearInterval(addColor);
}
