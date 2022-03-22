let database = [
    {
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name: "Sepatu",
        stock: 10,
        price: 80000
    },
    {
        name: "Helm",
        stock: 12,
        price: 50000
    },
    {
        name: "Celana",
        stock: 10,
        price: 25000
    }
]

// 1️⃣ Menghitung total harga menggunakan forEach
// let totalHarga = 0;

// database.forEach((value, index) => {
//     totalHarga += value.price;
// })

// console.log(totalHarga);

// // // Jawaban Guru
// // let totalHarga = 0;
// // let temp = [];

// // database.forEach((value, index) => {
// //     temp.push(value.price)
// //     totalHarga += value.price;
// // })

// // console.log(`${temp.join(" + ")} = ${totalHarga}`);

// // TES AJA ISENG
// // let total = database.map((value, index) =>{
// //     let hasil = 0;
// //     hasil += value.price
// //     return hasil;
// // });

// // console.log(total.reduce((a, b) => a+b));



// // 2️⃣ Menghitung total harga menggunakan duplikasi fungsi forEach
// const duplicateForEach = (cbfn, array) => {
//     for (let i = 0; i < array.length; i++) {
//         cbfn(array[i], i);
//     }

// };

// let total = 0;
// let barang = "";

// duplicateForEach((value, index) => {
//     total += value.price;
//     barang += `${index + 1}. ${value.name}, harga: ${value.price}, stock: ${value.stock}\n`;
// }, database)

// console.log(`Penjumlahan: ${total}`);
// console.log(barang);


// // 3️⃣ Membuat list barang menggunakan duplikasi fungsi map
// const duplicateMap = (cbfn, array) => {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(cbfn(array[i], i));
//     }
//     return newArray;
// };

// console.log(duplicateMap((value, index) => {
//     return `${index + 1}. ${value.name}`
// }, database));


// // 4️⃣ Membuat dupkikasi fungsi filter
// const duplicateFilter = (cbfn, array) => {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (cbfn(array[i], i) === true) {
//             newArray.push(array[i]);
//         };
//     }
//     return newArray;
// };

// console.log(duplicateFilter((value, index) => {
//     return value.price > 50000
// }, database));


//////////// OBJECT FUNCTION //////////// 
let student = {
    nama: "Edo Renaldo",
    usia: 20,
    kelas: "IPA"
}

// Object.keys(student); // kalau di console log = ["nama", "usia", "kelas"]
// console.log(Object.keys(student));



// 5️⃣ Membuat dupkikasi fungsi Duplicate Keys

// const duplicateGetKeys = (obj) => {
//     let newArray = [];
//     for (let property in obj) {
//         newArray.push(property);
//     }
//     return newArray;
// }

// console.log(duplicateGetKeys(student));

// 6️⃣ Membuat dupkikasi fungsi Duplicate Keys untuk dapatkan Value

// const duplicateGetValues = (obj) => {
//     let newArray = [];
//     for (let property in obj) {
//         newArray.push(obj[property]);
//     }
//     return newArray;
// }

// console.log(duplicateGetValues(student));

const duplicateGetEntries = (obj) => {
    let newArray = [];
    for (let property in obj) {
        newArray.push([property, obj[property]]);
    }
    return newArray;
}

console.log(duplicateGetEntries(student));