// JavaScript Conditional & Loop

// 1. JavaScript Conditional

// if-else
let suhu = 30;
if (suhu >= 38) {
    console.log("Suhu diluar panas");
} else {
    console.log("Suhu diluar normal");
}
console.log("Selesai");

console.log("\n");

// if-else if-else
// Jika umur 0 - 5 tampilkan balita
// Jika umur 6 - 11 tampilkan anak-anak 
// Jika umur 12 - 17 tampilkan remaja
// Jika umur 18 - 23 tampilkan anak muda
// Jika umur 24 - 40 tampilkan dewasa
// Jika umur 41 keatas tampilkan orang tua
let umur = 10;
console.log("Umur anda adalah " + umur);
if (umur >= 0 && umur <= 5) {
    console.log("Anda termasuk kategori Balita");
} else if (umur >= 6 && umur <= 11) {
    console.log("Anda termasuk kategori Anak-anak");
} else if (umur >= 12 && umur <= 17) {
    console.log("Anda termasuk kategori Remaja");
} else if (umur >= 18 && umur <= 23) {
    console.log("Anda termasuk kategori Anak muda");
} else if (umur >= 24 && umur <= 40) {
    console.log("Anda termasuk kategori Dewasa");
} else if (umur >= 41) {
    console.log("Anda termasuk kategori Orang tua");
} else {
    console.log("Umur anda tidak dalam range umur");
}

console.log("\n");

// Switch-case
let hari = 3
switch (hari) {
    case 1: // sama saja dengan if (hari === 1)
        console.log("Hari Minggu");
        break;
    case 2:
        console.log("Hari Senin");
        break;
    case 3:
        console.log("Hari Selasa");
        break;
    case 4:
        console.log("Hari Rabu");
        break;
    case 5:
        console.log("Hari Kamis");
        break;
    case 6:
        console.log("Hari Jumat");
        break;
    case 7:
        console.log("Hari Sabtu");
        break;
    default:
        console.log("Hari tidak valid");
        break;
}

console.log("\n");


// 2. JavaScript Loop

//   1. for loop
for (let i = 0; i < 10; i++){
    console.log(i);
}
//   2. while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
//   3. do-while loop
let x = 1;
do {
    console.log(x);
    x++;
} while (x <= 10);

console.log("\n");


// Array built-in method
let angka = [1,2,3,4,5];
console.log(angka); // tampilkan sekaligus
for (let i = 0; i < angka.length; i++) {
    console.log(angka[i]); // menampilkan isi array satu per satu
}
//  1. forEach()
angka.forEach(function(value) {
    console.log(value);
});
//  2. map()
// bisa begini 
angka.map(function(value) {
    console.log(value);
});
// bisa juga begini (jadi array), bisa juga diolah, dan bisa return
let output = angka.map(function(value) {
    return value + 2;
})
console.log(output);
//  3. filter()
let filter = angka.filter(function(value) {
    return value > 2;
})
console.log(filter);
//  4. find()
let find = angka.find(function(value) {
    return value > 2;
})
console.log(find);