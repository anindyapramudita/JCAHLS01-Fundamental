// CLASS OBJECT at JAVASCRIPT
// Template yang diperlukan untuk membuat data object
/**
 * class structure :
 * class className{
 *      constructor(arg1, arg2...){
 *          this.propertyName = arg1;
 *          this.propertyName = arg2;
 *      }
 *
 *      method=()=>{
 *          // code
 *      }
 * 
 * }
 */

class Manusia {
    constructor(_name, _birth, _gender){
        this.name = _name;
        this.birth = _birth;
        this.gender = _gender;
        this.age = this.getAge();
    }
    getAge = () => {
        let birthYear = parseInt(this.birth.split("-")[2])
        let date = new Date();
        return date.getFullYear() - birthYear;
    }

    introduce = () => {
        return `My name is ${this.name}, I was born on ${this.birth}, I am ${this.getAge()} years old and I am a ${this.gender}`;
    }
}

let dataPenduduk = [];

dataPenduduk.push(new Manusia("Renold", "12-11-1980", "Male"));
dataPenduduk.push(new Manusia("Reva", "12-10-2000", "Female"));

// console.log(dataPenduduk);
console.log(dataPenduduk.map((value, index) => {
    return dataPenduduk[index].introduce()}).join("\n"));

let list = dataPenduduk.map ((value, index) => {
    return value.introduce();
})

// console.log(list.join("\n"));


// Inheritance ==> pewarisan data dari class utama agar dapat digunakan oleh class turunannya

class Pekerjaan extends Manusia {
    constructor(_name, _birth, _gender, _profession, _salary){
        super(_name, _birth, _gender); // menggunakan property dari class utamanya
        this.profession = _profession;
        this.salary = _salary;
        this.age = this.getAge();
    }
}

let dbJob = [];

dbJob.push(new Pekerjaan("Arnold", "13-10-1985", "Male", "Chef", 30000000))

// console.log(dbJob);


let jobDesc = {
    job: "Prepare Tools",
    getStatus: () => {
        return `Done`
    }
}



