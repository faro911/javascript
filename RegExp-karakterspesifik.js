function takeword(value){
    let ambilData = value.match(/Belajar Niomic/g); //mengambil data by matching meghasilkan data sesuai tipe data
    console.log(ambilData);
}

takeword("Saya Belajar Niomic");

function takewords(value){
    let ambilData2 = value.match(/[ai]/g ); //mengambil data by huruf [a,i], menghasilkan array
    console.log(ambilData2);
}

takewords("Saya Belajar Niomic");

function takewordse(value){
    let ambilData3 = value.match(/[^ai]/g ); //mengambil data by huruf terkecuali a dan i menghasilkan array
    console.log(ambilData3);
}

takewordse("Saya Belajar Niomic");

function takewordses(value){
    let ambilData4 = value.match(/[a-i]/g ); //mengambil karakter antara a-i menghasilkan array (tidak termasuk hruf kapital)
    console.log(ambilData4);
}

takewordses("Saya Belajar Niomic");