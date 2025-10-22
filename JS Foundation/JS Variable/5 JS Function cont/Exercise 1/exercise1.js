// Nama: Adriel Walintukan
// Exercise 1
// Buatlah program untuk menghitung BMI dengan menggunakan
// IIFE & Callback Function (with parameter & return value).
// Bisa dilihat di mini exercise sebelumnya (pertemuan 4).

// 1. IIFE
let bmiIIFE = (function (berat, tinggi) {
    let bmi = berat / (tinggi ** 2);
    return bmi;
})(70, 1.75);

console.log("Hasil BMI (IIFE): ", bmiIIFE);

// 2. Callback Function
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi ** 2);
    console.log("Hasil BMI (Callback Function): ", bmi);
    return callback(bmi);
}

let kategori = hitungBMI(70, 1.75, function (bmi) {
    return bmi > 25 ? "Kelebihan berat badan" : "Berat badan anda normal";
});

console.log(kategori);
