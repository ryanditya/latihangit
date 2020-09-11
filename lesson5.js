// Spread

const arrayAngka = [1, 2, 3, 4]

const sumNumber = (...angka) => { //memasukkan banyak argumen
    console.log(angka);
}

sumNumber(...arrayAngka);; //mengeluarkan yang di dalam array
sumNumber(arrayAngka); //dia akan dianggap isi 1 variabel