// Destructuring & Module

// 1. Destructuring
const numbers = [1, 2, 3, 4, 5]; // Structuring

// Destructuring ES5
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

// Destructuring ES6
const [num1, num2, num3, num4, num5] = numbers;
console.log(num1, num2, num3, num4, num5);

// Destructuring sebagian item saja
const [, , numb3, ,] = numbers;
console.log(numb3);

// Destructuring menggunakan rest parameter
const [numb1, numb2, ...rest] = numbers;
console.log(numb1, numb2, ...rest);

// Destructuring Object
const student = {
    name: "Adriel",
    age: 20,
    status: "active",
};

// const name = student.name; // ES5
// const age = student.age; // ES5
// const status = student.status; // ES5

// const { name, age, status } = student; // ES6
// console.log(name, age, status); // ES6

// Destructuring Object sebagian item
const { age } = student;
console.log(age);


// 2. Module
import { student1 } from "./data.js";
console.log(student1);