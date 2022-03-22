////////////////////////// OBJECT //////////////////////////
// Object => data penampung seperti array, tetapi tidak harus berurutan. Dan alamatnya itu menggunakan property

/**
 * Array => penampung data yang berdasarkan alamat index
 * Object => penampung data yang berdasarkan alamat nama property
 * 
 * let variableArray = [data1, data2, ...];
 * 
 * let variableObject = {
 *      namaProperty:data,
 *      namaProduct:"Sepatu Air Jordan",
 *      price:250000,
 *      isReady:true,
 *      size:[42, 43, 45],
 *      total:(parameter)=>{block code}
 * }
 * 
 */

// Menulis data object
// Cara 1️⃣ : Syntax object literal
let instructor = {
    name: "Abdi Alghi",
    class: "JCWDAHLS-01",
    age: 27,
    materi: [
        "Fundamental", "Front-end", "Back-end"
    ]
};

console.log(instructor.name); // cara 1
console.log(instructor["materi"]); // cara 2

// Cara 2️⃣ : Syntax object "new" keyword
let student = new Object();

student.name = "Andrew";
student.age = 23;
student.classes = "Full stack";


// Object Destructuring Object
let { name, age, classes } = student;

console.log(age);


//  Object Destructuring Array
let data = ["Edo", "Jr", 27];
let [namaDepan, namaBelakang, usia] = data;

console.log(namaDepan);
console.log(namaBelakang);
console.log(usia);

// ARRAY OF OBJECT
let product = [
    {
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name: "Sepatu",
        stock: 10,
        price: 80000
    }
];

console.log(product[0].name);

// Looping pada object
for (let property in instructor) {
    console.log(instructor[property]);
}

// Looping pada array of object
for (let i=0; i<product.length; i++) {
    console.log(product[i].name);
}