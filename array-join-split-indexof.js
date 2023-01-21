// array join
function gabunk(){
    let kota = ["Jakarta","Semarang","Surabaya"];
    console.log(kota);
    let result = kota.join(" "); //fungsi join untuk membuat array mnjdi string, tanda petik dispasi brmksd hsil string antara kota di spasi.

    return result;
}

console.log(gabunk())

// array split

function jojin(){
    let kalimat = "Kita sedang belajar JS";
    let result = kalimat.split(" "); //membuat variabel kalimat menjadi array berdasakan spasi di split petik spasi.
    return result;
}

console.log(jojin())

//array indexof

function aryinx(){
    let kota = ["Jakarta", "Semarang", "Surabaya", "Yogykarta"];
    
    return kota.indexOf("Surabaya");// ketika indexof dicari ada brrti nilai dr index 0 - nilai tersebut ada, jikalau yang dicari tidak ada maka hasilnya -1.
}

console.log(aryinx())
