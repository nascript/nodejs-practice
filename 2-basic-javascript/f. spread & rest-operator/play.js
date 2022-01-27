// ====== SPREAD =====
const names = ['Nas', 'An', 'koko', 'kiki', 1, true];

const newArray = [...names]; //tiga titik adalah spread operator yang bermaksud ambil/copy semua nilai array names dan masukan ke variabel newArray

console.log(newArray)


// ====== REST =====
const toArray = (...args) => { //dengan pread operator seperti ini argument akan menjadi rest yang artinya berapapun argument yang akan diambil tanpa batas
    return args
}
console.log(toArray(2, 3, 4, 4))

// meski sama menggunakan titik tiga ada percedaan
// perbedaan keduanya adalah pada cara penggunaan saja
// rest digunakan untuk merge semua argument yang di operkan sedangkan spread digunakan untuk mengambil keseluruhan object atau variabel