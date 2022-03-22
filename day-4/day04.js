////////////////////////// FUNCTION ////////////////////////// 
/**
 * 1. Function : sekumpulan program yang digunakan untuk menyelesaikan tugas tertentu
 * 2. Untuk menggunakan function, maka kita akan membuat function
 * 3. Function bersifat reusable
 * 4. Built-in Function : Function bawaan Javascript
 * 5. User-defined function : function yang kita buat sendiri
 *      a. Menggunakan keyword function
 *      b. Nama function
 *      c. Parameter/argument : agar function dapat menerima data dari luar function
 *          i. Disimpan dalam ()
 *          ii. Boleh ada, boleh tidak
 *          iii. Jika argument lebih dari 1, maka harus dipisah dengan ","
 */

/** Declarative Function
 * 
 * keywordFunction namaFunction (argument) {
 *      // function code
 * }
 * 
 */

let angkaSatu = 200;
let angkaDua = 25;

// deklarasi function / pembuatan function
function penjumlahan() {
    let hasil = angkaSatu + angkaDua;
    console.log(hasil);
}

// memanggil function
penjumlahan;

// menggunakan / menjalankan function
penjumlahan();

function pengurangan(argument1, argument2) {
    let hasil = argument1 - argument2;
    console.log(hasil);
}

pengurangan(100, 35);


/** Function Expression
 * 
 * keywordVariable namaVariable = keywordFunction(argument) {
 *      // function code
 * }
 * 
 */

const perkalian = function (argument1, argument2) {
    let hasil = argument1 * argument2
    console.log(hasil);
}

perkalian(3, 3);


/** Arrow Function
 * 
 * keywordVariable namaVariable=(argument)=> {
 *      // function code
 * }
 * 
 */

const pembagian = (argument1, argument2) => {
    let hasil = argument1 / argument2;
    console.log(hasil)
}

pembagian(12, 5);


// Default Value Argument

// const kelipatan = (number1, number2 = 2) => {
//     let hasil = number1 % number2;
//     if (hasil == 0) {
//         console.log(`${number1} adalah kelipatan ${number2}`);
//     } else {
//         console.log(`${number1} bukan kelipatan ${number2}`);
//     }
// }

// kelipatan(10,3);

//return

const kelipatan = (number1, number2 = 2) => {
    let hasil = number1 % number2;
    if (hasil == 0) {
        return `${number1} adalah kelipatan ${number2}`;
    } else {
        return `${number1} bukan kelipatan ${number2}`;
    }
}

console.log(kelipatan(10, 3));


// const ganjilGenap = (number) => {
//     let hasil = number % 2;
//     if (hasil == 0) {
//         return `${number} adalah genap`;
//     } else {
//         return `${number} adalah ganjil`;
//     }
// }

// console.log(ganjilGenap(6));
// console.log(ganjilGenap(5));
// console.log(ganjilGenap(7));
// console.log(ganjilGenap(8));
// console.log(ganjilGenap(6));


let barang = ["Jaket", "Sepatu", "Kaos"];

let list = "";

// for (let i = 0; i < barang.length; i++) {
//     list += `${i + 1} ${barang [i]};\n`
// }

// console.log(list);


// namaVariableArray.forEach() : looping sebuah data array dan tidak menghasilkan array baru atau tidak menghasilkan return

// CARA 1 : bikin function dulu
const cetak = (value, index) => {
    list += `${index + 1} ${value};\n`
}

barang.forEach(cetak); // cara 1

// CARA 2 : function di dalam forEach

// barang.forEach((value, index) => {
    //     list += `${index + 1} ${value};\n`
    // }) // cara 2
    
// console.log(list);
    
    
    
// namaVariableArray.map() : melooping sebuah data array dan bisa menghasilkan array baru atau menghasilkan return
    
let listBarang = barang.map((value, index) => {
    return `${index + 1} ${value}`
})

console.log("FOREACH ===>>>", list);
console.log("MAP ===>>>", listBarang);


let numb = [2, 3, 4, 1, 6, 5];

// let kali = (value, index) => {
//     return value * 2;
// };

// let numbArr = numb.map(kali); // cara 1

// let numbArr = numb.map((value, index) => {
//     return `Ini angka ${value}`;
// }); // cara 2
    
// console.log(numb); 
// console.log(numbArr); 


// CALLBACK FUNCTION

// const jumlah = (angka1, angka2) => {
//     return angka1 + angka2;
// }

// const jumlahDikali = (cb, pengali) => {
//     return cb(2, 3) * pengali;
// }

// console.log(jumlahDikali(jumlah, 5));




// namaVariableArray.filter() : mengolah data array sehingga menghasilkan array baru berdasarkan condition
let filterGenap = numb.filter((value, index) => {
    return value % 2 === 0;
})

console.log(filterGenap);