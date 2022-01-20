const topDisplay = document.querySelector(".topDisplay");
const bottomDisplay = document.querySelector(".bottomDisplay");

const buttons = document.querySelectorAll("button");
const operator = document.querySelectorAll(".operator");

let up = "";
let down = "";

let ans;

buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

function onClick() {
    switch (this.id) {
        case "AC":
            runAC();
            break;
        case "+":
        case "-":
        case "x":
        case "÷":
            addOperator(this.id);
            break;
        case "=":
            runEquals();
            break;
        case ".":
            if (down.includes(".")) {
                break;
            }
        case "0":
            if (down[0] === "0" && down.length <= 1) {
                break;
            }
        default:
            down += this.id;
            bottomDisplay.textContent = down;
    }
}

function runAC() {
    down = "";
    bottomDisplay.textContent = down;
    up = "";
    topDisplay.textContent = up;
}

function addOperator(op) {
    up = down;
    if (up) {
        topDisplay.textContent = `${up} ${op}`;
    }
    down = "";
    bottomDisplay.textContent = down;
}

function runEquals() {
    if (topDisplay.textContent.includes("=")) {
        console.log("already an equals sign!");
    } else if (down) {
        topDisplay.textContent += ` ${down} =`;
        operate(topDisplay.textContent);
        bottomDisplay.textContent = ans;
        down = ans;
    } else if (!down && !up) {
        bottomDisplay.textContent = "";
    } else {
        bottomDisplay.textContent = "Syntax ERROR";
    }
}

function operate(equalsString) {
    const arr = equalsString.split(" ");
    let num1 = Number(arr[0]);
    let oper = arr[1];
    let num2 = Number(arr[2]);
    switch (oper) {
        case "+":
            ans = num1 + num2;
            break;
        case "-":
            ans = num1 - num2;
            break;
        case "x":
            ans = num1 * num2;
            break;
        case "÷":
            ans = Math.round((num1 / num2) * 100000) / 100000;
            break;
    }
}

// ODIN: Create a new function "operate" that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

// let num1 =
// let operator =
// let num2 =

// ODIN: Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

//     return operator(num1, num2);
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }
