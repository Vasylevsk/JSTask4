const operator = getOperator();
const operand = getOperand();
const result = calculate(operator, operand);
showResult(operator, result);

function getOperator() {
  let operation = prompt("Enter Operator:");
  while (checkOperator(operation)) {
    operation = prompt("You must enter /,-,+,/.Enter:");
  }
  return operation;
}

function checkOperator(value) {
  return value !== "+" && value !== "-" && value !== "*" && value !== "/";
}

function getOperand() {
  let str = prompt("Enter numbers:");
  while (checkOperand(str)) {
    str = prompt("You must enter numbers. Enter numbers:");
  }
  return str.split(",");
}

function checkOperand(value) {
  return value === "" || value === null;
}

function calculate(action, numb) {
  switch (action) {
    case "+":
      return sum(numb);
    case "-":
      return subtraction(numb);
    case "/":
      return division(numb);
    case "*":
      return multiplication(numb);
  }
}

function sum(numb) {
  let sum = 0;
  for (let i = 0; i < numb.length; i++) {
    sum += Number(numb[i]);
  }
  return sum;
}

function subtraction(numb) {
  let sub = numb[0];
  for (let i = 1; i < numb.length; i++) {
    sub -= Number(numb[i]);
  }
  return sub;
}

function division(numb) {
  let div = numb[0];
  for (let i = 1; i < numb.length; i++) {
    div /= Number(numb[i]);
  }
  return div;
}

function multiplication(numb) {
  let multi = 1;
  for (let i = 0; i < numb.length; i++) {
    multi *= Number(numb[i]);
  }
  return multi;
}

function showResult(operator, result) {
  return alert(`Action result "${operator}" is ${result}`);
}
