// Get references to the necessary elements
const resultInput = document.getElementById('result');
const historyDiv = document.getElementById('history');

// Function to append input to the result
function appendInput(value) {
    resultInput.value += value;
}

// Function to clear the result
function clearResult() {
    resultInput.value = '';
}

// Function to change the sign of the result
function changeSign() {
    const currentValue = parseFloat(resultInput.value);
    resultInput.value = -currentValue;
}

// Function to calculate the percentage of the result
function calculatePercentage() {
    const currentValue = parseFloat(resultInput.value);
    resultInput.value = currentValue / 100;
}

// Function to evaluate a mathematical expression
function evaluateExpression(expression) {
    try {
        const result = evalExpression(expression);
        historyDiv.innerHTML = expression + ' = ' + result;
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}

// Function to calculate the result
function calculateResult() {
    const expression = resultInput.value;
    evaluateExpression(expression);
}

// Function to evaluate a mathematical expression using custom parsing and evaluation
function evalExpression(expression) {
    const tokens = tokenizeExpression(expression);
    const postfix = convertToPostfix(tokens);
    return evaluatePostfix(postfix);
}

// Tokenize the expression into individual elements
function tokenizeExpression(expression) {
    const tokens = [];
    let currentToken = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (isOperator(char) || char === '(' || char === ')') {
            if (currentToken !== '') {
                tokens.push(currentToken);
                currentToken = '';
            }
            tokens.push(char);
        } else {
            currentToken += char;
        }
    }

    if (currentToken !== '') {
        tokens.push(currentToken);
    }

    return tokens;
}

// Check if a token is an operator
function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/' || token === 'x';
}

// Convert the infix expression to postfix notation
function convertToPostfix(tokens) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    const stack = [];
    const postfix = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (!isOperator(token) && token !== '(' && token !== ')') {
            postfix.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop(); // Discard the opening parenthesis
        } else {
            while (
                stack.length > 0 &&
                precedence[token] <= precedence[stack[stack.length - 1]]
            ) {
                postfix.push(stack.pop());
            }
            stack.push(token);
        }
    }

    while (stack.length > 0) {
        postfix.push(stack.pop());
    }

    return postfix;
}

// Evaluate a postfix expression
function evaluatePostfix(postfix) {
    const stack = [];

    for (let i = 0; i < postfix.length; i++) {
        const token = postfix[i];

        if (!isOperator(token)) {
            stack.push(parseFloat(token));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                case 'x': // Handle 'x' symbol as multiplication operator
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }

            stack.push(result);
        }
    }

    return stack.pop();
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;
    const allowedKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Digits
        '.', '+', '-', '*', '/', // Operators
        '%', 'Enter', // Special keys
    ];

    if (allowedKeys.includes(key)) {
        event.preventDefault();

        if (key === 'Enter') {
            calculateResult();
        } else {
            appendInput(key);
        }
    }
}

// Add event listeners for button clicks
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;
        if (value === 'C') {
            clearResult();
        } else if (value === '+/-') {
            changeSign();
        } else if (value === '%') {
            calculatePercentage();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendInput(value);
        }
    });
});

// Add event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);