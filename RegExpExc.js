function reexc(){
    let kata = "Saya belajar niaomic 2 bulan";
    let str = new RegExp("niaomic");

    console.log(str.exec(kata))
    //menampilkan nilai string, nilai index dan inputan datanya, jika hasilnya ada akan menampilkan semua itu, jika tidak ditemukan menghasilkan nilai null
}

reexc()