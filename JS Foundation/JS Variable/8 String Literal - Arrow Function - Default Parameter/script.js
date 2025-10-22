// String Literal, Arrow Function & Default Parameter

// 1. String Literal
let fullName = "John Doe";
let age = 30;
let address = "Manado";

// Halo, nama saya John Doe, umur saya 30 tahun
// dan saya tinggal di Manado

// cara lama
let kalimat = "Halo, nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address;
console.log(kalimat);

// cara baru
let kalimat2 = `Halo, nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);


// 2. Arrow Function
function sayGreetings(fullName) {
    return `Hello, my name is ${fullName}`;
}
console.log(sayGreetings("John Doe"));

const sayGreetingsArrow = (fullName) => {
    return `Hello, my name is ${fullName}`;
}
console.log(sayGreetingsArrow("John Doe"));

// Kelebihan Arrow Function: Implicit return value
const sayGreetingsArrow2 = (fullName) => `Hellow, my name is ${fullName}`;
console.log(sayGreetingsArrow2("John Doe"));

// Arrow function pada callback
let numbers = [1, 2, 3, 4, 5];
let output = numbers.map((item) => item + 1);
console.log(output);

// Arrow function pada IIFE (Immediately Invoked Function Expression)
let output2 = (() => `Hello`)();
console.log(output2);


// 3. Default Parameter
const sayGreetingsDefault = (fullName, age, address) => {
    if (fullName === undefined) {
        fullName = "Anonymous";
    }
    if (age === undefined) {
        age = "20";
    }
    if (address === undefined) {
        address = "Airmadidi";
    }
    return `Hello, my name is ${fullName}, I'm ${age} years old and I live in ${address}`;
}
console.log(sayGreetingsDefault("John Doe"));


const sayGreetingsDefault2 = (fullName = "Anonymous", age = 20, address = "Airmadidi") => {
    return `Hello, my name is ${fullName}, I'm ${age} years old and I live in ${address}`;
}