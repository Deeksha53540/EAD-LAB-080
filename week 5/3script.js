function analyzeNumbers(){

let input = document.getElementById("numbers").value;

let numbers = input.split(",").map(Number);

let sum = numbers.reduce((a,b)=>a+b,0);

let average = sum / numbers.length;

let max = Math.max(...numbers);

let min = Math.min(...numbers);

document.getElementById("sum").innerText = "Sum: " + sum;

document.getElementById("average").innerText = "Average: " + average;

document.getElementById("max").innerText = "Maximum: " + max;

document.getElementById("min").innerText = "Minimum: " + min;

}