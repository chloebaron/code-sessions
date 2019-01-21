let n1 = 0;
let n2 = 0;
let operator = " ";
let answer = 0;


function calculator(n1, operator, n2){
  if (operator == "+") {
    answer = n1 + n2;
  } else if (operator == "-") {
    answer = n1 - n2;
  } else if (operator == "*") {
    answer = n1 * n2;
  } else if (operator == "/") {
    answer = n1 / n2;
  }
  return answer;
}

function calculator(num1, num2, opr){
  return eval(num1 + opr + num2);
}

console.log(calculator(3, "-", 4));
console.log(calculator(3, "+", 4));
console.log(calculator(3, "*", 4));
console.log(calculator(3, "/", 4));

