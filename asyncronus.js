// ASYNCRONUS
/**
 * Proses eksekusi program pada Javascript
 * 1. Syncronus : mengeksekusi program secara berurutan per baris
 * 
 * 2. Asyncronus : 
 */

// Syncronus

function funcA() {
    console.log("Fungsi A")
}
function funcB() {
    console.log("Fungsi B")
}
function funcC() {
    console.log("Fungsi C")
}

funcA();
funcB();
funcC();

// Asyncronus function Javascript : setTimeout, setInterval
function funcD() {
    console.log("Fungsi D")
}
function funcE() {
    setTimeout(() => {
        console.log("Fungsi E")
    }, 500)
}
function funcF() {
    console.log("Fungsi F")
}

funcD();
funcE();
funcF();