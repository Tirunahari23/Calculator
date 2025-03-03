class Calculator {
  constructor(priviousNumber, currentNumber) {
    this.priviousNumber = priviousNumber;
    this.currentNumber = currentNumber;
    this.clear();
  }
  clear() {
    this.current = "";
    this.privious = "";
    this.operation = undefined;
  }
  delete() {
    this.current = this.current.slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.current.includes(".")) return;
    this.current = this.current.toString() + number.toString();
  }
  chooseOperator(num) {
    let s = this.current;
    console.log(s);
    console.log(s.charAt(s.length - 1));
    let str = s.charAt(s.length - 1);
    if (str != null && str >= 0 && str < 10) {
      this.current = this.current + num.toString();
    }
  }
  solution() {
    this.privious = eval(this.current);
  }

  updateDisplay() {
    this.currentNumber.innerHTML = this.current;
    this.priviousNumber.innerHTML = this.privious;
  }
}

const buttons = document.querySelectorAll("#button");
const operators = document.querySelectorAll("#operator");
const allclear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const equal = document.querySelector(".equals");
const priviousNumber = document.querySelector(".privious");
const currentNumber = document.querySelector(".current");
const calculator = new Calculator(priviousNumber, currentNumber);

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    calculator.appendNumber(element.innerHTML);
    calculator.updateDisplay();
  });
});
allclear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
operators.forEach((op) => {
  op.addEventListener("click", () => {
    calculator.chooseOperator(op.innerHTML);
    calculator.updateDisplay();
  });
});

equal.addEventListener("click", () => {
  calculator.solution(equal.innerHTML);
  calculator.updateDisplay();
  calculator.chooseOperator();
});
del.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
