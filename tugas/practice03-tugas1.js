// let jumlah = 5;
// let gambar = "";

// for (let i = 0; i < jumlah; i++) {
//     for (let j = 0; j < jumlah; j++) {
//             gambar += `# `
//     }
//     gambar += `\n`
// }

// // for (let i = 0; i < jumlah; i++) {
// //     for (let j = 0; j < jumlah; j++) {
// //         if (j == i) {
// //             gambar += `${j + 1} `
// //         } else {
// //             gambar += `${0} `
// //         }
// //     }
// //     gambar += `\n`
// // }


// for (let i = 0; i < jumlah; i++) {
//     for (let j = 0; j < jumlah; j++) {
//         if (j <= i) {
//             gambar += "# "
//         }
//     }

//     gambar += `\n`
// }

const getShape = (bentuk, size) => {
    let gambar = "";

    if (bentuk == "segitiga") {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (j <= i) {
                    if (i % 2 == 0) {
                        gambar += "# "
                    } else {
                        if (j % 2 == 0) {
                            gambar += "# "
                        } else {
                            gambar += "* "

                        }
                    }
                }
            }
            gambar += `\n`
        }
    } else if (bentuk == "persegi") {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i % 2 == 0) {
                    gambar += "# "
                } else {
                    if (j % 2 == 0) {
                        gambar += "# "
                    } else {
                        gambar += "* "

                    }
                }
            }
            gambar += `\n`
        }
    }

    return console.log(gambar);
}

console.log(getShape("persegi", 5));