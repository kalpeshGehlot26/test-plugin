// simpleMath.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract one number from another
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide one number by another
function divide(a, b) {
    // Check to avoid division by zero
    if (b === 0) {
        console.error('Cannot divide by zero');
        return null;
    }
    return a / b;
}

// Export the functions for use in other modules (optional, remove if not using modules)
module.exports = { add, subtract, multiply, divide };
