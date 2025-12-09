
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
