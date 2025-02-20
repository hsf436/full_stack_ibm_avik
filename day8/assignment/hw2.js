document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    function updateDisplay(value) {
        display.textContent = value;
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (button.classList.contains("operator")) {
                firstOperand = currentInput;
                operator = value;
                currentInput = "";
            } else if (button.classList.contains("equals")) {
                if (firstOperand && operator && currentInput) {
                    currentInput = eval(`${firstOperand} ${operator} ${currentInput}`);
                    updateDisplay(currentInput);
                }
            } else if (button.classList.contains("clear")) {
                currentInput = "";
                firstOperand = "";
                operator = "";
                updateDisplay("0");
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });
});
