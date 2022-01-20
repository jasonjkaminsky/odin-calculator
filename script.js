const displayPanel = document.querySelector(".displayPanel");

const buttons = document.querySelectorAll("button");
const operator = document.querySelectorAll(".operator");

const dotBtn = document.querySelector("#dot");
const equalsBtn = document.querySelector("#equals");

const acBtn = document.querySelector(".AC");

let display = "";

let ans;


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id);
    });
});

// ODIN: Create a new function "operate" that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

// let num1 =
// let operator =
// let num2 =

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// ODIN: Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

///// event listeners /////
// acBtn.addEventListener("click");
// zeroBtn.addEventListener("click");
// oneBtn.addEventListener("click");
// twoBtn.addEventListener("click", );
// threeBtn.addEventListener("click");
// fourBtn.addEventListener("click");
// fiveBtn.addEventListener("click");
// sixBtn.addEventListener("click");
// sevenBtn.addEventListener("click");
// eightBtn.addEventListener("click");
// nineBtn.addEventListener("click");
// dotBtn.addEventListener("click");
// addBtn.addEventListener("click");
// subtractBtn.addEventListener("click");
// multiplyBtn.addEventListener("click");
// divideBtn.addEventListener("click");
// equalsBtn.addEventListener("click");
