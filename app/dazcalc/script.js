let result = '';
let history = '';

function updateResult(displayResult) {
  const resultElement = document.getElementById('result');
  resultElement.value = displayResult;
}

function updateHistory(displayHistory) {
  const historyElement = document.getElementById('history');
  historyElement.innerText = displayHistory;
}

function appendInput(input) {
  if (result === '0' && input !== '.') {
    result = '';
  }
  result += input;
  updateResult(result);
}

function clearResult() {
  result = '';
  updateResult('0');
}

function calculateResult() {
  if (result === '') {
    return;
  }

  const previousResult = result;
  try {
    result = eval(result);
    updateResult(result);
    history = previousResult + ' = ' + result;
    updateHistory(history);
  } catch (error) {
    result = 'Error';
    updateResult(result);
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Escape') {
    clearResult();
  } else if (key === 'Backspace') {
    clearResult();
    history = '';
    updateHistory(history);
  } else if (key === '+') {
    appendInput('+');
  } else if (key === '-') {
    appendInput('-');
  } else if (key === '*') {
    appendInput('*');
  } else if (key === '/') {
    appendInput('/');
  } else if (key === '.') {
    appendInput('.');
  } else if (key >= '0' && key <= '9') {
    appendInput(key);
  }
});