
//Functions for basic math operators
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

//Three variables for each part of an operation
let num1 = '';
let operator = '';
let num2 = '';

//Function called operate that takes 2 numbers and an operator and calls one of the functions on the numbers
function operate(a, b, operator) {
    if(operator === '+'){
        return add(a, b);
    }
    else if(operator === '-') {
        return subtract(a, b);
    }
    else if(operator === '*') {
        return multiply(a, b);
    }
    else if(operator === '/') {
        return divide(a, b);
    }
}

//function that will populate the display when you click the digit buttons
function displayNum() {
    const display = document.querySelector('#display');
    const digit = document.querySelectorAll('.num');

    digit.forEach((button) => {
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
        });
    });

}

displayNum();

const display = document.querySelector('#display');
const operators = document.querySelectorAll('.op');

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(num1 === '') {
            num1 = Number(display.textContent);
            operator = button.textContent;
            display.textContent = '';
        }
    });
});

const equals = document.querySelector('#btn-equals');

equals.addEventListener('click', () => {
    num2 = Number(display.textContent);
    const results = operate(num1, num2, operator);
    display.textContent = results;

    num1 = results;
    num2 = '';
    operator = '';
});

const clear = document.querySelector('#btn-clear');

clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';

    display.textContent = '';
});