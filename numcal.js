// Get the result input field
const resultField = document.getElementById("result");

// Append numbers or operators to the result field
function appendToResult(value) {
    resultField.value += value;
}

// Clear the result field
function clearResult() {
    resultField.value = "";
}

// Calculate the result
function calculateResult() {
    try {
        resultField.value = eval(resultField.value); // Perform the calculation
    } catch (error) {
        resultField.value = "Error"; // Handle errors gracefully
    }
}