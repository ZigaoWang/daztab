const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

// Import the math.js library if you're using it as a module
// import math from 'mathjs';

function calculate(value) {
  try {
    // Use math.evaluate to safely evaluate the expression
    const calculatedValue = math.evaluate(value);
    if (isNaN(calculatedValue) || !isFinite(calculatedValue)) {
      res.value = "Invalid input";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      // Check if the result is a whole number (integer)
      if (Number.isInteger(calculatedValue)) {
        res.value = calculatedValue;
      } else {
        res.value = parseFloat(calculatedValue.toFixed(10)); // Round to 10 decimal places
      }
    }
  } catch (error) {
    res.value = "Invalid input";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  }
}

// Get a reference to the button element using its ID
var changeThemeButton = document.getElementById("changeTheme");

// Add a click event listener to the button
changeThemeButton.addEventListener("click", function() {
   // Call the changeTheme() function when the button is clicked
  changeTheme();
});

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

// Add event listeners for number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    liveScreen(button.value);
  });
});

// Add event listeners for operator buttons
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    liveScreen(button.value);
  });
});

// Add event listener for the equals button
document.getElementById("equals").addEventListener("click", () => {
  calculate(res.value); // Use res.value as the argument for calculate
});

// Add event listener for the clear button
document.getElementById("clear-button").addEventListener("click", () => {
  result.value = "";
});

// Adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// Function to handle keyboard inputs
function keyboardInputHandler(e) {
  // To fix the default behavior of the browser,
  // Enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();

  // Grabbing the liveScreen
  const resultInput = res.value;

  // Numbers
  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  // Operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  // Decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  // Press Enter to see the result
  if (e.key === "Enter") {
    calculate(resultInput);
  }

  // Backspace for removing the last input
  if (e.key === "Backspace") {
    // Remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}