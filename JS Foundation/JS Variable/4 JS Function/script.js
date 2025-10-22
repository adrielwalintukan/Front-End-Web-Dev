// JavaScript Function

// Cara 1: Function Declaration
function greetings1() {
    console.log("Hello, World! 1");
}
greetings1(); // Call function

// Cara 2: Function Expression
let greetings2 = function() {
    console.log("Hello, World! 2");
}
greetings2(); // Call function

// Function with return value (output) and argument (input)

// Cara 1:
//                  parameter
function greetings3(fullName) {
    return "Hello, " + fullName
}
//                          argument
let output = greetings3("Adriel Walintukan");
console.log(output); // Call function and print output

// Cara 2:
const greetings4 = function(fullName) {
    return "Hello, " + fullName;
}
let output2 = greetings4("Adriel Walintukan");
console.log(output2); // Call function and print output

// Global, Local, Block Scope Variable
let x = 10 // Global variable
console.log("Global x:", x); // 10
function func1(){
    let y = 20 // Loca variable
    console.log(x) // 10
    console.log(y) // 20
    if(true){
        let z = 30 // Block variable
        console.log(x) // 10
        console.log(y) // 20
        console.log(z) // 30
    }
    // console.log(z) // Error: z is not defined
}
func1()
// console.log(y) // Error: y is not defined
// console.log(z) // Error: z is not defined


// Mini Exercise
// Buatlah fungsi yang menghitung BMI dimana input adalah berat & tinggi
// dan outputnya BMI

function hitungBMI(berat, tinggi) {
    return berat / (tinggi ** 2)
}

let bmi = hitungBMI(70, 1.75); // Berat 70 kg, Tinggi 1.75 m
let kategori = bmi > 25 ? "Kelebihan berat badan" : "Berat badan anda normal"
console.log(kategori)
