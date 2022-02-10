"use strict";
window.addEventListener("load", start);
let customerArr = [];
// customerArr.length = 40;

function start() {
    getNumberOfCustomers();
}

function getNumberOfCustomers() {
    if (customerArr.length < 40) {
        customerArr.unshift(Math.floor(Math.random() * 32));
    } else {
        customerArr.unshift(Math.floor(Math.random() * 32));
        customerArr.length = 40;
    }
    setTimeout(getNumberOfCustomers, 1000);
    console.log(customerArr);
    createBars();
}

// function createBars(customerArr) {
//     console.log(customerArr);
//     let newBar = document.createElement("div.bar");
//     newBar.className = "bar";
//     barHeight =
//         customerArr.forEach(newBar.style.height = value + "rem";)
//     document.querySelector(".bar-container").appendChild(newBar);
//     moveBars();
// }


function createBars(value) {
    customerArr.forEach(function(value) {
        console.log(value);
        let newBar = document.createElement("div.bar");
        newBar.className = "bar";
        newBar.style.height = value + "rem";
        document.querySelector(".bar-container").appendChild(newBar);
    })
    moveBars();
}

function moveBars() {
    if (customerArr.length >= 40) {
        document.querySelector(".bar").classList.add("moveLeft");
    }

}





// function handleArray() {
//     console.log(numberOfCustomers);
//     if (customerArr.length <= 40) {
//         customerArr.push(numberOfCustomers);
//     } else {
//         customerArr.push(numberOfCustomers);
//         customerArr.length = 40;
//     }
// }