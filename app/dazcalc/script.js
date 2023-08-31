let displayValue = '0';
let darkMode = false;

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = parseFloat(result.toFixed(10)).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

function enableDarkMode() {
  document.body.style.setProperty('--bg-color', '#222');
  document.body.style.setProperty('--calc-bg-color', '#333');
  document.body.style.setProperty('--display-bg-color', '#444');
  document.body.style.setProperty('--btn-bg-color', '#555');
  document.body.style.setProperty('--btn-hover-bg-color', '#666');
  document.body.style.setProperty('--btn-text-color', '#fff');
  document.body.style.setProperty('--symbol-color', '#0080ff');
}

function enableLightMode() {
  document.body.style.setProperty('--bg-color', '#fff');
  document.body.style.setProperty('--calc-bg-color', '#fff');
  document.body.style.setProperty('--display-bg-color', '#e0e0e0');
  document.body.style.setProperty('--btn-bg-color', '#e0e0e0');
  document.body.style.setProperty('--btn-hover-bg-color', '#ccc');
  document.body.style.setProperty('--btn-text-color', '#000');
  document.body.style.setProperty('--symbol-color', '#0080ff');
}