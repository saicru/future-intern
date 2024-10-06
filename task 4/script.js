
let currentOperation = '';
let currentNumber = '';
let operation = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (currentOperation !== '') {
        calculateResult();
    }
    operation = op;
    currentOperation = currentNumber;
    currentNumber = '';
    updateDisplay();
}

function calculateResult() {
    if (currentOperation === '' || currentNumber === '') return;
    let result;
    const prev = parseFloat(currentOperation);
    const current = parseFloat(currentNumber);
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    currentOperation = '';
    operation = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    currentOperation = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentNumber || currentOperation || '0';
}
