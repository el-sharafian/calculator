var inputString = ["", "", "", "", "", "", "", ""];
var input = "";
var inputCounter = 0;
var operandCounter = 0;
var operand = [""];
var numberCounter = 0;
var number = [0, 0, 0, 0, 0];
var isDecimalized = 0;

function appendNumber(num) {
  if(isDecimalized == 1)
  {
    num = num * 0.1;
    number[numberCounter] = number[numberCounter] + num;
    isDecimalized = 0;
  }
  else{
  number[numberCounter] = number[numberCounter] * 10 + num;
  inputString[inputCounter] = number[numberCounter];
  display();
  }
}
function decimalize() {
  isDecimalized = 1;
}
function clearInput() {
  operand = [""];
  number = [0, 0, 0, 0, 0];
  inputString = ["", "", "", "", "", "", "", ""];
  inputCounter = 0;
  numberCounter = 0;
  operandCounter = 0;
  display();
}
function compute() {
  var clc = 0;
  for (var j = 0; j < numberCounter; j++) {
    clc = clc + calculate(number[j], number[j + 1], operand[j]);
  }
  document.getElementById("calculator-input").innerHTML = clc;
  input = clc.toString();
  operand = [""];
  number = [0, 0, 0, 0, 0];
  number[0] = clc;
  inputString = ["", "", "", "", "", "", "", ""];
  inputString[0] = clc.toString();
  inputCounter = 0;
  numberCounter = 0;
  operandCounter = 0;
}
function calculate(num1, num2, oprnd) {
  var result;
  if (oprnd == "+") {
    result = num1 + num2;
  }
  else if (oprnd == "-") {
    result = num1 - num2;
  }
  else if ( oprnd == "*") {
    result = num1 * num2;
  }
  else {
    result = num1 / num2;
  }
  return result;
}
function chooseOperation(oprnd) {
  operand[operandCounter] = oprnd;
  inputCounter++;
  inputString[inputCounter] = oprnd;
  inputCounter++;
  operandCounter++;
  numberCounter++;
  display();
}
function display() {
  input = "";
  for (var i = 0; i <= inputCounter; i++) {
    input = input + inputString[i];
  }
  document.getElementById("calculator-input").innerHTML = input;
}


