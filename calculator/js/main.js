var input = 0;
var inputString = "";
function myFunction(x) {
    inputString = inputString + " " + x;
    document.getElementById("calculator-input").innerHTML = inputString;
    input = input*10 + x;
  }