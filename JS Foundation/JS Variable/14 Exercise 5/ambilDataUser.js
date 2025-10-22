export async function ambilDataUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.forEach(user => {
      const { name } = user;
      console.log(`Nama Lengkap: ${name}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Pertanyaan:
// Mengapa kita butuh .json() setelah fetch()?
// Jawab: Fetch mengembalikan Response object, 
// .json() mengubah body response (yang berupa string JSON) 
// menjadi JavaScript object agar bisa diakses sebagai data.data.


// Jika API gagal merespons, bagaimana cara menambahkan error handling?
// Jawab: Tambahkan .catch() setelah then, misal 
// .catch(error => console.error('Error:', error)), 
// atau check if (!response.ok) throw new Error('Network response was not ok'); sebelum .json().


// Apa perbedaan pendekatan Promise chaining dengan async/await?
// Jawab: Promise chaining menggunakan .then() dan .catch() 
// untuk menangani hasil dan error secara sequential. 
// Async/await membuat kode lebih mudah dibaca seperti synchronous code, 
// menggunakan try/catch untuk error handling, dan await untuk menunggu Promise resolve.
