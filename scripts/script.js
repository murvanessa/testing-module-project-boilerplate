'use strict';


// get random numbers
const randomNumber = () => {

    let randomNumber = Math.floor(Math.random() * 256);

    return randomNumber;
}

// place random numbers to in RGB
const generateColor = (first, second, third) => {

    let color = `rgb(${first},${second},${third})`;

    return color;
}


// set interval 
let setTime = setInterval(timer, 500);

function timer() {

    let rgbValue = '';
    rgbValue = generateColor(randomNumber(), randomNumber(), randomNumber());
    let tagLength = document.getElementsByTagName("BUTTON").length;

    for (let index = 0; index < tagLength; index++) {

        document.getElementsByTagName('BUTTON')[index].style.borderColor = rgbValue;

    }
}


