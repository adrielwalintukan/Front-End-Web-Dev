import helloWorld from './helloWorld.js';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

// Pertanyaan:
// Mengapa kita perlu menambahkan await di dalam messages?
// Jawab: Agar function menunggu Promise dari helloWorld() resolve sebelum melanjutkan, 
// sehingga msg mendapat nilai string "Hello World!" yang di-resolve.

// Apa yang terjadi jika await dihapus?
// Jawab: Tanpa await, msg akan langsung mendapat Promise object yang masih pending, 
// sehingga console.log akan menampilkan Promise {<pending>} atau 
// Promise {<fulfilled>: "Hello World!"} tergantung timing, bukan stringnya.

// Mengapa kita perlu menggunakan export dan import di sini?
// Jawab: Export memungkinkan function helloWorld digunakan di file lain, 
// import mengambilnya untuk digunakan di messages.js, memungkinkan modularitas dan pemisahan kode.
