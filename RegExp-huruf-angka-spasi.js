function panggil1 (value){
    let takedata = value.match(/\w/g)
    console.log(takedata)
}

panggil1("Bulan ke 1 sd ke 4") 
// menghasilkan semua huruf kecuali spasi

function panggil2 (value){
    let takedata2 = value.match(/\d/g)
    console.log(takedata2)
}

panggil2("Bulan ke 1 sd ke 4") 
// menghasilkan angka saja

function panggil3 (value){
    let takedata3 = value.match(/\s/g)
    console.log(takedata3)
}

panggil3("Bulan ke 1 sd ke 4") 
// menghasilkan whitespace atau sepasi