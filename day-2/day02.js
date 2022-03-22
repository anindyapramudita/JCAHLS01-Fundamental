///////////////////// LOOPING STATEMENT /////////////////////

/**
 * A. WHILE LOOP : digunakan ketika akhir pengulangan tidak pasti
 * 
 * while (condition) {
 *      // program yang ingin dijalankan
 * }
 */

// Example :
let nilai = 10;

while (nilai > 0) {
    console.log("angka :", nilai);
    nilai--;
}


/**
 * B. DO...WHILE LOOP
 * 
 * do {
 *      // task
 * } while (condition);
 */

// Example :
let count = 1;

do {
    console.log(`Bus no. ${count}`);
    count++;
} while (count <=10);


/**
 * C. FOR LOOP : digunakan ketika kita tahu batas looping
 * 
 * for (statement_1; statement_2; statement_3){
 *      // task    
 * }
 * 
 * statement_1: variable yang mendefinisikan nilai awal dari batas looping
 * statement_2: condition untuk memeriksa variable statement_1 apakah bernilai TRUE
 * statement_3: perintah increment / decrement terhadap statement_1
 * 
 * keuntungan : dapat membatasi jumlah loop sejak awal
 */

// for (let i = 0; i < 10; i++){
//     if(i % 2 == 0) {
//         console.log(`kereta No. ${i + 1} adalah ganjil`);    
//     } else {
//         console.log(`kereta No. ${i + 1} adalah genap`);
//     }
// }

for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`BizzBuzz => ${i}`);
    } else if (i % 3 == 0) {
        console.log(`Bizz => ${i}`);
    } else if (i % 5 == 0) {
        console.log(`Buzz => ${i}`);
    }
}

console.log(is)