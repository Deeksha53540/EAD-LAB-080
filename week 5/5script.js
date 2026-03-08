function Employee(name, basicSalary, bonus = 1000){

this.name = name;

this.basicSalary = basicSalary;

this.hra = basicSalary * 0.20;

this.bonus = bonus;

this.totalSalary = this.basicSalary + this.hra + this.bonus;

}

function generatePayroll(){

let name = document.getElementById("name").value;

let salary = parseFloat(document.getElementById("salary").value);

let emp = new Employee(name, salary);

document.getElementById("empName").innerText =
"Employee Name: " + emp.name;

document.getElementById("basic").innerText =
"Basic Salary: ₹" + emp.basicSalary;

document.getElementById("hra").innerText =
"HRA (20%): ₹" + emp.hra;

document.getElementById("bonus").innerText =
"Bonus: ₹" + emp.bonus;

document.getElementById("total").innerText =
"Total Salary: ₹" + emp.totalSalary;

}