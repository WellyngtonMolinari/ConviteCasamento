// (function ($) {
//     "use strict";
//       $('.sakura-falling').sakura();
// })(jQuery);

$(document).on('click', function(){
    document.getElementById("my_audio").play();
});

// Set the date we're counting down to
var countDownDate = new Date("Nov 29, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Dias</div>" + "<div class='hours block'>" + hours + "<br>Horas</div>" + "<div class='minutes block'>" + minutes + "<br>Minutos</div>" + "<div class='seconds block'>" + seconds + "<br>Segundos</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "O casamentou já foi firmado! Deus os abençõe!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

// confetti
const defaults = {
    spread: 100, // explosion velocity
    ticks: 50, // high values = less confetti falling
    gravity: 0.05, // Even lower gravity to slow down the fall
    decay: 0.995, // Slower decay to make confetti last even longer
    startVelocity: 60,
    shapes: ["heart"],
    colors: ["324eeb", "83c3ff", "ff83f5", "a430f1"],
    origin: { y: 0 }, 
};

let confettiInterval;

function launchConfetti() {
    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 2.5,
        origin: { x: Math.random(), y: 0 }, // Random x position at the top
    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 3.5,
        origin: { x: Math.random(), y: 0 }, // Random x position at the top
    });

    confetti({
        ...defaults,
        particleCount: 15,
        scalar: 4,
        origin: { x: Math.random(), y: 0 }, // Random x position at the top
    });
}

function handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
        // Start the confetti interval if the page is visible
        confettiInterval = setInterval(launchConfetti, 500);
    } else {
        // Clear the confetti interval if the page is not visible
        clearInterval(confettiInterval);
    }
}

// Add an event listener for visibility change
document.addEventListener('visibilitychange', handleVisibilityChange);

// Initial check to start confetti if the page is already visible
handleVisibilityChange();


