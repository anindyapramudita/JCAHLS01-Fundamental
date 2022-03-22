////////////////////////// ARRAY DATA TYPE ////////////////////////// 
/**
 * 1. Definisi  : Sebuah tipe data penampung. Dikarenakan dapat menampung banyak data dan berbagai tipe data yang lain.
 *                Setiap data pada array memiliki alamat index
 * 2. Tujuan    : Mempermudah pengelolaan data.
 * 3. Array bertipe object
 * 4. Array ditandai dengan [data1, data2, ...]
 * 
 *  */

// Syntax Array
let namaApel = "Apel"; // ❌
let namaJeruk = "Jeruk"; // ❌

let namaBuah = ["Apel", "Jeruk", "Durian", "Melon"]; // Cara 1 ✔
let stock = Array(10, 15, 25, 12); // Cara 2 ✔
let harga = []; // cara 3 ✔
harga[0] = 5000;
harga[2] = 10000;
harga[1] = 2500;

harga[3] = 7000;// akses data pada array =>> namaVariable[index]
// console.log("Nama Buah : ", namaBuah[1]);
// console.log("Stock Buah : ", stock[1]);
// console.log("Harga Buah : ", harga[1]);
// console.log(`Buah ${namaBuah[0]} stocknya ada ${stock[0]} dan harganya Rp. ${harga[0]}`);


// let namaToko = "Toko Buah Manis";

// console.log(namaToko.split("")); // diubah jadi array per huruf
// console.log(namaToko.split(" ")); // diubah jadi array per kata


// Merubah value dari salah satu data pada Array
// Reassign
namaBuah[0] = "Semangka";
// console.log(namaBuah);
// console.table(namaBuah);


let declareBuah = "";

for (let i = 0; i < namaBuah.length; i++) {
    declareBuah += `${[i + 1]} Buah ${namaBuah[i]} stocknya ada ${stock[i]} dan harganya Rp. ${harga[i]} \n`;
}

// console.log(declareBuah);


////////////////////////// ARRAY FUNCTION //////////////////////////

// ⏺ namaVariableArray.length : untuk mengetahui jumlah data yang ada di dalam array
// OUTPUT dari length adalah NUMBER INT

// console.log("Banyak data array : ", namaBuah.length);
// console.log("Value terakhir : ", namaBuah[namaBuah.length - 1]);

// ⏺ namaVariableArray.push(data) : untuk menambah item baru di akhir array
namaBuah.push("Alpukat");
stock.push(20);
harga.push(6500);
// console.table(namaBuah);
// console.table(stock);
// console.table(harga);

// ⏺ namaVariableArray.pop() : untuk menghapus data terakhir dari array
namaBuah.pop();
stock.pop();
harga.pop();

// ⏺ namaVariableArray.unshift(data) : untuk menambahkan item baru di awal array
namaBuah.unshift("Nangka");
stock.unshift(20);
harga.unshift(2500);

// ⏺ namaVariableArray.shift() : untuk menghapus item di awal array
namaBuah.shift();
stock.shift();
harga.shift();

// ⏺ namaVariableArray.reverse() : untuk membalik urutan data array
let motor = ["Yamaha", "Honda", "Triumph", "Ducati"];
// console.log("❌ SEBELUM REVERSE : ", motor);
motor.reverse();
// console.log("✅ SESUDAH REVERSE : ", motor);

// ⏺ namaVariableArray.join("separator") : untuk menggabungkan semua data array menjadi data string
// console.log(motor.join()); // Ducati,Triumph,Honda,Yamaha
// console.log(motor.join(" ")); // Ducati Triumph Honda Yamaha
// console.log(motor.join(" / ")); // Ducati / Triumph / Honda / Yamaha


// ⏺ namaVariableArray.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : untuk menghapus data array pada index tertentu

// Fungsi : 1. Menghapus data array pada index tertentu 
let mobil = ["Daihatsu", "Toyota", "Lexus", "BMW"];
mobil.splice(2, 1);

// Fungsi : 2. Menyisipkan data baru 
// console.log("❌ SEBELUM DISISIPKAN : ", mobil);
mobil.splice(2, 0, "Lexus", "Mazda", "Wuling");
// console.log("✅ SESUDAH DISISIPKAN : ", mobil);

// Fungsi : 3. Mengganti data 
// console.log("❌ SEBELUM DIGANTI : ", mobil);
mobil.splice(1, 1, "Ferarri");
// console.log("✅ SESUDAH DIGANTI : ", mobil);


// ⏺ namaVariableArray.slice(indexAwal, indexAkhir) : untuk menghapus data array pada index tertentu
// console.log(mobil.slice(1,4));

// ⏺ namaVariableArray.includes("data") : untuk memeriksa ada atau tidak data pada array
// console.log(mobil.includes("Lexus")); // true
// console.log(mobil.includes("Isuzu")); // false

// ⏺ namaVariableArray.indexOf("data") : untuk mencari alamat index dari suatu data
// console.log(mobil.indexOf("BMW")); // 5
// console.log(mobil.indexOf("ISUZU")); // -1

let nama = ["Budi", "Edo", "Budi"];
// console.log(nama.indexOf("Budi")); // 0



    
    



