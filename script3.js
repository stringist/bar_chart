"use strict";

const customerArr = [];


window.addEventListener("load", init);

function getNumberOfCustomers() {
    console.log("get number of customers", customerArr);
    return Math.floor(Math.random() * 32);
}

function init() {
    loop();
}

function loop() {
    console.log("loop");
    modifyArray();
    setTimeout(loop, 500);
}


function displayBars() {
    console.log("displayBars");
    let newBar = document.createElement("div");
    newBar.classList.add("bar");
    let barHeight = customerArr[0] + "rem";
    newBar.style.height = barHeight;
    document.querySelector(".bar-container").appendChild(newBar);
    newBar.classList.add("moveLeft");
}

function modifyArray() {
    const queueSize = getNumberOfCustomers();
    console.log("modify array", customerArr, queueSize);
    if (customerArr.length < 40) {
        customerArr.unshift(queueSize);
    } else {
        customerArr.unshift(queueSize);
        customerArr.length = 40;
    }
    displayBars();
}