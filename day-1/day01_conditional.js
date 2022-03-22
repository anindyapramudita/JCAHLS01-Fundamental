///////////////////// CONDITIONAL STATEMENT /////////////////////
/**
 * Aturan : Dia membutuhkan nilai boolean
 * 
 * Jenis :
 * 1. IF STATEMENT : untuk 1 kondisi
 * 2. IF...ELSE STATEMENT : untuk 2 kondisi
 * 3. IF...ELSE IF...ELSE STATEMENT : untuk >=3 kondisi
 * 4. SWITCH...CASE STATEMENT : untuk memastikan sebuah nilai
 */

//1. IF STATEMENT
let nama = "Leonardo";
let usia = 18;
let email = "leo@gmail.com"
/**
 * Aturan Penulisan :
 * if (condition){
 *      // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition terpenuhi
 */

// Example Case : verifikasi
if (usia >= 17) {
    console.log("Verifikasi usia berhasil untuk : ", nama); // cara 1
    console.log(`Verifikasi usia ${nama} berhasil, periksa email ${email} anda`); // cara 2
}


// 2. IF...ELSE STATEMENT
if (usia >= 20) {
    console.log(`Verifikasi usia ${nama} berhasil, periksa email ${email} anda`);
} else {
    console.log(`Verifikasi usia ${nama} gagal`);
}


// 3. IF...ELSE IF...ELSE STATEMENT
let nilai = 50;

if (nilai >=90) {
    console.log("Grade A", nilai);
} else if (nilai >= 80 && nilai <= 89) {
    console.log("Grade B", nilai);
} else if (70 <= nilai >= 79) {
    console.log ("Grade C", nilai);
} else {
    console.log("Grade D", nilai);
}


// 4. SWITCH...CASE
let profesi = "Coder";
switch(profesi){
    case "Coder":
        //task
        console.log("Saya suka bikin aplikasi");
        break;
    case "Dokter":
        console.log("Saya suka mengobati orang");
        break;
    case "Polisi":
        console.log("Saya suka nilang");
        break;
    default:
        console.log("Gak tau ngapain");
        break;
}


// Ternary operator : condition ? task : task
let validasi_usia = usia > 17 ? "usia cukup" : "usia tidak cukup";
console.log(validasi_usia);