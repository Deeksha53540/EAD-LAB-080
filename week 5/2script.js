let firstNumber = "";
let secondNumber = "";
let operation = null;

function appendValue(value){
document.getElementById("display").value += value;
}

function clearDisplay(){
document.getElementById("display").value = "";
firstNumber = "";
secondNumber = "";
operation = null;
}

function setOperation(callback){

firstNumber = document.getElementById("display").value;
operation = callback;
document.getElementById("display").value = "";

}

function calculate(){

secondNumber = document.getElementById("display").value;

let result = operation(
parseFloat(firstNumber),
parseFloat(secondNumber)
);

document.getElementById("display").value = result;

}

function add(a,b){
return a + b;
}

function subtract(a,b){
return a - b;
}

function multiply(a,b){
return a * b;
}

function divide(a,b){
return a / b;
}