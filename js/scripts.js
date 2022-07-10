'use strict';
let die;
let dieImage = ['images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', 'images/d6.jpg', 'images/d7.jpg', 'images/d8.jpg', 'images/d9.jpg', 'images/d10.jpg', 'images/d11.jpg', 'images/d12.jpg', 'images/d13.jpg', 'images/d14.jpg', 'images/d15.jpg', 'images/d16.jpg', 'images/d17.jpg', 'images/d18.jpg', 'images/d19.jpg', 'images/d20.jpg'];
document.getElementById("die-display").visibility = "hidden";

function rollRandomizer() {
    die = Math.floor(Math.random() * 20);
    die = die + 1;
    console.log(die);
    document.getElementById("die-display").visibility = "visible";
    document.getElementById("die-display").src = dieImage[die - 1];
    document.getElementById("die-display").alt = `d${die}`;
    if (die === 20) {
        document.getElementById("roll-result").textContent = `You rolled a ${die}! Wow!`;
    } else {
        document.getElementById("roll-result").textContent = `You rolled a ${die}.`;
    }
};