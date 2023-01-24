function panggil1 (value){
    let takedata = value.match(/\W/g)
    console.log(takedata)
}

panggil1("Bulan ke 1 sd ke 4") 
// menghasilkan semua karakter kecuali huruf dan angka

function panggil2 (value){
    let takedata2 = value.match(/\D/g)
    console.log(takedata2)
}

panggil2("Bulan ke 1 sd ke 4") 
// menghasilkan semua karakter kecuali angka

function panggil3 (value){
    let takedata3 = value.match(/\S/g)
    console.log(takedata3)
}

panggil3("Bulan ke 1 sd ke 4") 
// mengambil karakter kecuali spasi