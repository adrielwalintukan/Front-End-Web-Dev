// Rest Parameter & Spread Operator (...)

// 1. Rest Parameter
//   a. Rest parameter bertipe data array.
//   b, Rest parameter harus berada di posisi terakhir dalam parameter list.
const funct1 = (param1, param2, ...rest) => {    // rest = sisa
    let result = 0;
    rest.forEach((item) => (result += item));
    console.log(result);
}
funct1(1, 2, 3, 6);

// 2. Spread Operator
//   Berkaitan dengan array dan object
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(...numbers); // 1 2 3 4 5

// Kegunaan Spread Operator pada Array
//   1. Duplikasi array
let numbers2 = [...numbers];
numbers2.push(6);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(...numbers2); // [ 1, 2, 3, 4, 5, 6 ]
//   2. Menggabungkan 2 array atau lebih
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let gabungan1 = num1.concat(num2, num3); // cara lama
let gabungan2 = [...num1, ...num2, ...num3]; // cara baru
console.log(gabungan1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(...gabungan2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Kegunaan Spread Operator pada Object
//   1. Duplikasi object
const student = {
    fullName: "John Doe",
    status: "Active"
};
const student2 = {...student, addres: "Manado"};
console.log(student2); // { fullName: 'John Doe', status: 'Active', addres: 'Manado' }
//   2. Menggabungkan 2 object atau lebih
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const gabunganObj1 = Object.assign({}, obj1, obj2, obj3); // cara lama
const gabunganObj2 = {...obj1, ...obj2, ...obj3}; // cara baru
console.log(gabunganObj1); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
console.log(gabunganObj2); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }