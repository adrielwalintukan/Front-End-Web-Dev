// //  // Variabel & Operator

// // 1. JavaScript Variabel
// Variabel dapat dideklarasikan dengan var, let, atau const
let full_name = "John Doe" //snake case
let FullName = "John Doe" //pascal case
let fullName = "John Doe" //camel case

console.log(fullName)

const gender = "Male" //string
let age = 30 //number integer
let weight = 96.6 //number float
let isMarried = true //boolean
let grade = null //null
let address //undefined
let favoriteColor = undefined //undefined

console.log(gender, age, weight, isMarried, grade, address, favoriteColor)

// // 2. JavaScript Operator
// a. Aritmatic Operator (+, -, *, /, %, **)
let bil1 = 20
let bil2 = 5
console.log(bil1 + bil2) // Penjumlahan
console.log(bil1 - bil2) // Pengurangan
console.log(bil1 * bil2) // Perkalian
console.log(bil1 / bil2) // Pembagian
console.log(bil1 % bil2) // Modulus
console.log(bil1 ** bil2) // Pangkat


// Mini Exercise - 1:
// Buatlah program yang menghitung luas segitiga
// dimana luas adalah 5 dan tinggi adalah 5
// dan tampilkan hasilnya.

let luas = 5
let tinggi = 5
let luasSegitiga = (luas * tinggi) / 2
console.log(luasSegitiga)

// b. Assignment Operator (=, +=, -=, *=, /=)
let bilangan = 5
bilangan = bilangan + 10 // 15
bilangan += 5 // 20
console.log(bilangan)

// c. String Operator (+) string concatination
let firstName = "John"
let lastName = "Doe"

let full_Name = fullName + " " + lastName
console.log(full_Name)

// d. Relational Operator (==, ===, <=, >=, <, >, !=)
let bilangan1 = 10
let bilangan2 = "10"
let bilangan3 = 5

console.log(bil1 == bil2) //true
console.log(bil1 === bil2) //false
console.log(bil1 > bil3) //true
console.log(bil1 < bil3) //false

// e. Logical Operator (&&, ||, not)
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

console.log(!true) //false

// f. Ternary Operator (? :)
let ages = 17
let isEligible = ages >= 18 ? "Bisa buat KTP" : "Belum bisa buat KTP"
console.log(isEligible)

// Mini Exercise - 2:
// Buat program yang menghitung BMI (Body Masss Index)
// Rumus BMI = berat badan (kg) / tinggi (m)^2
// Tampilkan hasilnya jika BMI > 25 -> Kelebihan berat badan,
// jika BMI <= 25 -> tampilkan Berat anda normal.

let beratBadan = 70
let tinggiBadan = 1.7
let BMI = beratBadan / tinggiBadan ** 2
console.log("BMI anda = " + BMI)
console.log(BMI > 25 ? "Kelebihan berat badan" : "Berat anda normal")