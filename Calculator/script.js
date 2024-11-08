// script.js
let display = document.getElementById('display');
let currentInput = '0'; // Current input on the display screen

// Append a value (number or operator) to the display
function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value; // Replace '0' with the first input
    } else {
        currentInput += value; // Concatenate further inputs
    }
    display.textContent = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = '0';
    display.textContent = currentInput;
}

// Evaluate the expression when "=" is pressed
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluate the string as a mathematical expression
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error'; // In case of invalid expression
        currentInput = '0';
    }
}
