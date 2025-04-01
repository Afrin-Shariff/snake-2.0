function calculate() {
    try {
        resultField.value = eval(resultField.value); // Perform the calculation
    } catch (error) {
        resultField.value = "Error"; // Catch and handle invalid inputs
    }
}