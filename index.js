// Calculator logic
let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

// Console button functionality
let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
errorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    let btnText = btn.innerText;

    switch (btnText) {
      case "Console Log":
        console.log("This is a log message");
        break;
      case "Console Error":
        console.error("This is an error message");
        break;
      case "Console Count":
        console.count("Count label");
        break;
      case "Console Warn":
        console.warn("This is a warning message");
        break;
      case "Console Assert":
        console.assert(false, "Assertion failed: condition is false");
        break;
      case "Console Clear":
        console.clear();
        break;
      case "Console Dir":
        console.dir(document.body);
        break;
      case "Console dirxml":
        console.dirxml(document);
        break;
      case "Console Group Start":
        console.group("Grouped Messages");
        console.log("Message inside group");
        break;
      case "Console Group End":
        console.groupEnd();
        break;
      case "Console Table":
        console.table([{ name: "John", age: 25 }, { name: "Jane", age: 28 }]);
        break;
      case "Start Timer":
        console.time("Timer");
        break;
      case "End Timer":
        console.timeEnd("Timer");
        break;
      case "Console Trace":
        console.trace("Trace message");
        break;
      case "Trigger a Global Error":
        // This will be caught by window.onerror
        throw new Error("This is a global error!");
        break;
    }
  });
});

// Example of try/catch/finally
try {
  // Trigger an error by referencing an undefined variable
  console.log(undefinedVar);
} catch (err) {
  console.error("Error caught using try/catch:", err);
} finally {
  console.log("Done with try/catch example.");
}

// Example of throw and custom error
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}
try {
  throw new MyCustomError("This is a custom error message!");
} catch (err) {
  console.error("Caught custom error:", err);
}

// Global error handler
window.onerror = function (message, source, lineno, colno, error) {
  console.log("Global error caught:");
  console.log("Message:", message);
  console.log("Source:", source);
  console.log("Line:", lineno);
  console.log("Column:", colno);
  console.log("Error object:", error);
};
