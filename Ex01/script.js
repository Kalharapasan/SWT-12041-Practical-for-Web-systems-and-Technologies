const display = document.getElementById('display');

function addNumber(num) {
  display.value += num;
}

function addOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

// ... add functions for calculations, etc. ...