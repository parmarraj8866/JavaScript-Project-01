//  1. Swapping

// let a = parseInt(prompt("Enter a Value : "));
// let b = parseInt(prompt("Enter b Value : "));

// console.log("Before Swapping : ");
// console.log("a =", a);
// console.log("b =", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("After Swapping : ");
// console.log("a =", a);
// console.log("b =", b);



// 2. Grade

// let marks = parseInt(prompt("Enter Your Marks :"));
// let grade;

// if (marks >= 90 && marks < 100) {
//     grade = "A";
// } else if (marks >= 80 && marks < 90) {
//     grade = "B";
// }
// else if (marks >= 70 && marks < 80) {
//     grade = "C"
// }
// else if (marks >= 60 && marks < 70) {
//     grade = "D"
// }
// else if (marks >= 50 && marks < 60) {
//     grade = "F";
// } else {
//     grade = "Sorry, You are Fail Not Show Grade"
// }

// console.log("Grade =", grade);




// 3. Bill

// function billCalculate(items, taxRate) {

//     let ans = 0;


//     for (let i = 0; i < items.length; i++) {
//         ans += items[i].price * items[i].quantity;
//     }

//     let tax = (ans * taxRate) / 100;

//     let Finalbill = ans + tax;

//     return Finalbill;
// }

// const items = [
//     { name: "Item1", price: 1000, quantity: 1 },
//     { name: "Item2", price: 2000, quantity: 2 }
// ];

// const taxRate = 10;

// console.log("Bill Calculate = " + billCalculate(items, taxRate));





// 4.  interest Calculation

//  let value = parseInt(prompt("Enter Value for Interest : "));
// let rate = parseInt(prompt("Enter Rate for Interest : "));
// let time = parseInt(prompt("Enter Time for Interest : "));

// function CalculateInterest(value, rate, time) {

//     let interest = 0;

//     interest = (value * rate * time) / 100;

//     return interest;
// }

// console.log("Calculate Interest =", CalculateInterest(value, rate, time));




// 5. Employe Salary

// function employeeSalary(workHours, workPay) {
//     let salary = workHours * workPay;

//     let tax = (salary * 10) / 100;

//     let finalSalary = salary - tax;

//     return finalSalary;
// }


// console.log("Employee Salary =", employeeSalary(200, 20)); // 200 Hours and $20  per Hour  