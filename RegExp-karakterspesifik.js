function takeword(value){
    let ambilData = value.match(/Belajar Niomic/g); //mengambil data by matching
    console.log(ambilData);
}

takeword("Saya Belajar Niomic");

function takewords(value){
    let ambilData2 = value.match(/[ai]/g ); //mengambil data by huruf
    console.log(ambilData2);
}

takewords("Saya Belajar Niomic");