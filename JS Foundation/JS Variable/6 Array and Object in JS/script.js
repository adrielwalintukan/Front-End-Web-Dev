// Array & Object in JavaScript

// Tanpa Array
// let student1 = "John";
// let student2 = "Bob";
// let student3 = "Jane";
// let student4 = "Jack";


// Array (Cara deklarasi Array)
// Cara 1. Array LIteral
let students = ["John", "Bob", "Jane", "Jack"];
console.log(students[1]); // Akses elemen dalam array menggunakan indeks

students[1] = "Edgar"; // Mengganti nilai dari array
console.log(students)

console.log(students.length); // Menampilkan panjang array

console.log(students[students.length - 1]); // Akses elemen terakhir dalam array

let john = ["John", 30, true]; // Bisa beda tipe data
console.log(john);

// Cara 2. Kata kunck "new"
let employees = new Array("John", "Bob", "Jane", "Jack");
console.log(employees);


// Array Method
let array = [1, 2, 3, "Hello", false, true];
// 1. toString()
console.log(array.toString());
// 2. join()
console.log(array.join(" "));
console.log(array.join("-"));
// 3. pop() - hapus indeks terakhir
array.pop();
console.log(array);
// 4. push() - tambah indeks terakhir
array.push("Selamat Pagi");
console.log(array);
// 5. shift() - menghapus indeks pertama dalam array
array.shift();
console.log(array);
// 6. unshift() - menambah indeks pertama dalam array
array.unshift("Fisrt");
console.log(array);
// 7. splice() - menambah nilai ke dalam array (disisipkan ke tengah)
array.splice(3, 0, 4, 5); // Menambahkan 4 dan 5 pada indeks ke-3
console.log(array);
// 8. slice() - mengambil sebagian dari array
let numbers = array.slice(1, 5); // Mengambil elemen dari indeks 1 sampai 4
console.log(numbers);
// 9. concat() - menggabungkan array
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combined = num1.concat(num2, num3);
console.log(combined);



// Object (Cara deklarasi object)
let johnObj = {
    fullName: "John Doe",
    age: 30,
    isActive: true,
    grade: [90, 80, 100],
    address: {
        street: "Jl. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
    },
    sayHello: function (){
        console.log("Hello World");
    }
};
console.log(johnObj);

// Cara akses element dalam object

// Cara 1. Dot notation
console.log(johnObj.fullName);
johnObj.sayHello();
console.log(johnObj.address.street);
console.log(johnObj.grade[1]);

// Cara 2. Bracket notation
console.log(johnObj["fullName"]);
console.log(johnObj["grade"]); // array index
console.log(johnObj["address"]["street"]); // nested object
johnObj["sayHello"](); // function

johnObj.job = "Programmer"; // jika tidak ada maka tambah property baru
console.log(johnObj);

delete johnObj.isActive; // menghapus property dalam object
console.log(johnObj);