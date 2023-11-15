document.addEventListener("DOMContentLoaded", function () {
  const lightTheme = "styles/light.css";
  const darkTheme = "styles/dark.css";
  const sunIcon = "assets/SunIcon.svg";
  const moonIcon = "assets/MoonIcon.svg";
  const themeIcon = document.getElementById("theme-icon");
  const res = document.getElementById("result");
  const toast = document.getElementById("toast");


  function calculate(value) {
    try {
      let result;
      if (value.includes("^2")) {
        const num = value.substring(0, value.length - 2);
        result = parseFloat(num) ** 2;
      } else if (value.includes("^3")) {
        const num = value.substring(0, value.length - 2);
        result = parseFloat(num) ** 3;
      } else {
        result = math.evaluate(value);
        if (isNaN(result) || !isFinite(result)) {
          throw new Error("Invalid input");
        }
      }
  
      if (Number.isInteger(result)) {
        res.value = result;
      } else {
        res.value = parseFloat(result.toFixed(10));
      }
    } catch (error) {
      res.value = "Invalid input";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    }
  }
  
  

  function changeTheme() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
      toast.innerHTML = "Professional Calculator";
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

  function liveScreen(enteredValue) {
    if (!res.value || res.value === "Result") {
      res.value = "";
    }
    res.value += enteredValue;
  }

  document.getElementById("changeTheme").addEventListener("click", changeTheme);

  const numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      liveScreen(button.value);
    });
  });

  const operatorButtons = document.querySelectorAll(".operator");
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      liveScreen(button.value);
    });
  });

  const functionButtons = document.querySelectorAll(".function");
  functionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      liveScreen(button.value);
    });
  });

  document.getElementById("equals").addEventListener("click", () => {
    calculate(res.value);
  });

  document.getElementById("clear-button").addEventListener("click", () => {
    res.value = "Result";
  });

  document.addEventListener("keydown", keyboardInputHandler);

  function keyboardInputHandler(e) {
    e.preventDefault();
    const resultInput = res.value;

    if (e.key >= "0" && e.key <= "9") {
      res.value += e.key;
    }

    if (e.key === "+") {
      res.value += "+";
    } else if (e.key === "-") {
      res.value += "-";
    } else if (e.key === "*") {
      res.value += "*";
    } else if (e.key === "/") {
      res.value += "/";
    }

    if (e.key === ".") {
      res.value += ".";
    }

    if (e.key === "Enter") {
      calculate(resultInput);
    }

    if (e.key === "Backspace") {
      res.value = resultInput.substring(0, res.value.length - 1);
    }
  }
});
