// variable : penampung data pada program
/**
 * susunan variable ===> keywordVariable namaVariable = nilaiVariable;
 * 
 * keywordVariable : var, let, const
 * 
 * namaVariable : harus diawali huruf atau simbol "_" atau "$"
 * 
 * valueVariable : berdasarkan tipe data ===> string, number, boolean, array, object
*/

// keyword var : Redeclare, Reassign
var nama = "Nindya"; //deklarasi variable : tahap pertama ketika membuat variable
var nama = "Edo"; // ✅ Redeclare
nama = "Budi"; // ✅ Reassign

console.log(nama); // untuk menampilkan nilai pada terminal


// keyword let : Non-Redeclare, Reassign
let age = 27;
// let age = 18; // ❌ Non-Redeclare
age = 25; // ✅ Reassign

console.log(age);


// keyword const : Non-Redeclare, Non-Reassign
const PI = 3.14;
// const PI = 14; // ❌ Non-Redeclare
// PI = 22 / 7; // ❌ Non-Reassign

console.log(PI);


//////////////// ATURAN PENULISAN VARIABLE ////////////////
// 1. Harus diawali huruf
// let 1nama; ❌
let pekerjaan; // ✅ 
var alamat = "Surabaya"; // ✅

//2. Boleh diawali dengan symbol (_ atau $)
let _telp = "081234567890"; // ✅ 
let $fax = "08987654321"; // ✅


// 3. Variable yang terdiri dari 2 suku kata atau lebih
let fullName = "Anindya Pramudita"; // ✅ camelCase
let harga_barang = 20000; // ✅ snake_case
let namaproduk = "Air Jordan"; // ✅ but not likely
// let stock barang; // ❌
//let stock-barang; // ❌


//////////////// DATA TYPE ////////////////
// 1. String : huruf atau character
let namaToko = "Gladius 'A' \"Toko\" \n Olahraga"; // double quotes
let nama_toko = 'Gladius \'B\' "Toko" \n Olahraga'; // single quotes
let namatoko = `Gladius 'C' "Toko" 
Olahraga`; // backticks

console.log(namaToko);
console.log(nama_toko);
console.log(namatoko);

let alamatToko = "Jl. Sudirman No 23";

// let alamatLengkap = namaToko + " " + alamatToko; // cara 1
let alamatLengkap = `Pak Eko, ${namaToko}, ${alamatToko}`; // cara 2

console.log(alamatLengkap);


//////////////// FUNGSI PADA TIPE DATA STRING ////////////////
let greeting = "Hello, Purwadhika Student";

//typeof : memeriksa tipe data
console.log("output dari typeoff ===>", typeof greeting); // nilai dari variable
console.log("output dari typeoff ===>", typeof "Hello"); // nilai langsung

//string.length : menghitung panjang dari data string
console.log("output dari string.legth ===>", greeting.length);

// string.toLowerCase() : merubah semua huruf jadi huruf kecil
console.log("output dari string.toLowerCase ===>", greeting.toLowerCase());

// string.toUpperCase() : merubah semua huruf jadi huruf besar
console.log("output dari string.toUpperCase ===>", greeting.toUpperCase());

// strong.includes() : memastikan sebuah kata ada pada variable
console.log("output dari string.includes ('kata_cari) ===>", greeting.includes("Purwadhika"));


// 2. Number : Berkaitan dengan angka
let jarak = 1500 // Nilai INT/INTEGER atau nilai bulat
let berat = 90.25 // Nilai FLOAT atau desimal
let saldoATM = 25e6; // 25000000

// Arithmatic operator : +, -, *, /, %

let hasil = jarak + 500;

// Increment
jarak++; // 1501
jarak++; // 1502
jarak++; // 1503
jarak++; // 1504

jarak += 5; // ==> jarak = jarak + 5 // 1509
jarak += 5; // ==> jarak = jarak + 5 // 1514

// Decrement
jarak--; // 1513
jarak--; // 1512
jarak--; // 1511
jarak--; // 1510

jarak -= 5; // ==> jarak = jarak + 5 // 1505
jarak -= 5; // ==> jarak = jarak + 5 // 1500

console.log("Jarak ===>", jarak);

//////////////// MATH OBJECT ////////////////
const PI_CIRCLE = Math.PI;
console.log(PI_CIRCLE);

console.log(Math.abs(-25.5)); // nilai absolute positif
console.log(Math.abs(-25.5) * -1); // nilai absolute negatif
console.log(-Math.abs(-25.5)); // nilai absolute negatif

// Pangkat atau akar
console.log(Math.pow(4, 2)); // 4 pangkat 2
console.log(Math.sqrt(4)); // 4 akar pangkat 2
console.log(Math.cbrt(8)); // 8 akar pangkat 3

// Pembulatan
console.log(Math.round(2.5)); // pembulatan ke nilai terdekat
console.log(Math.ceil(2.1)); // pembulatan selalu ke atas
console.log(Math.floor(2.9)); // pembulatan selalu ke bawah

console.log(Math.min(3, 2, 5, 6, 1, 5, 9, 0)); // mencari nilai terkecil
console.log(Math.max(3, 2, 5, 6, 1, 5, 9, 0)); // mencari nilai terbesar

console.log(Math.random()); // membuat nilai random dari 0.xx s/d 1
console.log(Math.round((Math.random()*10)));

// Parsing data string to number
let angka = "123.456";
console.log(typeof angka);
console.log(parseInt(angka)); // jadi integer = 123
console.log(parseFloat(angka)); // jadi float = 123.456

// Parsing data number to string
let angkaB = 150050
console.log(angkaB.toString()); // "150050"
console.log(angkaB.toLocaleString()); // "150,050"

// memeriksa data apakah sebuah angka
console.log(isNaN(2)); // false
console.log(isNaN("ABCDE")); // true
console.log(isNaN("2")); // false


// 3. Boolean : nilai TRUE or FALSE
// Comparison Operator : >, <, >=, <=, ==, ===, !=
let angka_A = 20;
let angka_B = 15;
console.log("Comparison : ", angka_A > angka_B); // true
console.log("Comparison : ", angka_A < angka_B); // false
console.log("Comparison : ", angka_A == angka_A); // true
console.log("Comparison : ", angka_A == angka_B); // false
console.log("Comparison : ", angka_A != angka_B); // true
console.log("Comparison : ", angka_A == 20); // true
console.log("Comparison : ", angka_A == "20"); // true => nilai sama tapi tipe beda, akan menghasilkan true
console.log("Comparison : ", angka_A === 20); // true
console.log("Comparison : ", angka_A === "20"); // false => nama dan tipe harus sama

// Logical Operator : AND, OR, NOT

// AND : menghasilkan nilai TRUE apabila kedua perbandingan bernilai TRUE
console.log("Logical AND : ", true && true); // true
console.log("Logical AND : ", true && false); // false
console.log("Logical AND : ", false && false); // false
console.log("Logical AND : ", angka_A > angka_B && angka_A === 20);

// OR : selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log("Logical OR : ", true || true); // true
console.log("Logical OR : ", true || false); // true
console.log("Logical OR : ", false || false); // false
console.log("Logical OR : ", angka_A >= 15 || angka_A <= 15); // true
console.log("Logical OR : ", angka_A >= 15 || angka_A > 15); // true

// NOT : membalik logika
console.log("Logical NOT : ", !true); // false
console.log("Logical NOT : ", !false); // true

// Tipe data Truthly dan Falsy
// Truthly ✅: tipe data yang bernilai true
console.log(Boolean(2)); // true
console.log(Boolean("ABSCD")); // true
console.log(Boolean(true)); // true
console.log(Boolean(-2)); // true
console.log(Boolean("false")); // true
console.log(Boolean(" ")); // true

// Falsy ❌: nilai pada tipe data yang bernilai false
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false



//////////////// KEYBOARD SHORTCUTS ////////////////
// shift + alt + f : merapihkan program
// shift + alt + atas/bawah : duplicate ke atas/bawah
// alt + atas/bawah : memindahkan program
// widows + . : emoticon board
// ctrl + ` : membuka terminal
// ctrl + f : mencari program
// ctrl + / : buat comment
// ctrl + s : save program