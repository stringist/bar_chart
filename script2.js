"use strict";
window.addEventListener("load", init);
let customerArr = [];
let numberOfCustomers;

function init() {
    loop();
}

function loop() {
    getNumberOfCustomers();
    setTimeout(loop, 500);
}

function getNumberOfCustomers() {
    console.log("get number of customers", customerArr)
    numberOfCustomers = Math.floor(Math.random() * 32);
    modifyArray(numberOfCustomers);
}

function displayBars() {
    console.log("displayBars");
    let newBar = document.createElement("div");
    newBar.className = "bar";
    document.querySelector(".bar-container").appendChild(newBar);
    let barHeight = numberOfCustomers + "rem";
    newBar.style.height = barHeight;
    if (customerArr.length >= 40) { moveBars(); };
}

function modifyArray() {
    console.log("modify array", customerArr, numberOfCustomers);
    if (customerArr.length < 40) {
        customerArr.unshift(numberOfCustomers);
    } else {
        customerArr.unshift(numberOfCustomers);
        customerArr.length = 40;
    }
    displayBars();
}

function moveBars() {
    console.log("moveBars"); {
        customerArr[]
        document.querySelector(".bar").classList.add("moveLeft");
        document.querySelector(".bar").classList.remove("moveLeft");
        console.log(document.querySelector(".bar-container").classList)
    }

}

// function modifyArray() {
//     console.log("modify array", customerArr, numberOfCustomers);
//     if (customerArr.length < 40) {
//         customerArr.unshift(numberOfCustomers);
//     } else {
//         customerArr.unshift(Math.floor(numberOfCustomers));
//         customerArr.length = 40;
//     }
//     displayBars();
// }