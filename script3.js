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
    setTimeout(loop, 300);
}


function displayBars() {
    console.log("displayBars");
    let newBar = document.createElement("div");
    const container = document.querySelector(".bar-container");
    newBar.classList.add("bar");
    const barHeight = customerArr[0] + "%";
    newBar.style.height = barHeight;
    document.querySelector(".bar-container").appendChild(newBar);
    // newBar.setAttribute("id", i);
    // document.querySelector(".bar-container").removeChild();
    if (customerArr.length >= 40) {
        // newBar.classList.add("moveLeft");
        let oldBar = container.childNodes[0];
        const allBars = document.querySelector(".bar");
        document.querySelector(".bar-container>*").classList.add("moveLeft");
        container.removeChild(oldBar);
    }

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