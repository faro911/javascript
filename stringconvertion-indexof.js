function stringkonven(){
    // materi string conversi
    let x = new String("Beljar kuy");
    console.log(typeof(x));
    console.log(x);
    
    let xy = x.toString(); //konversi objek ke string dengan cara pertama
    console.log(typeof(xy));
    console.log(xy);

    let xy2 = x.valueOf(); //konversi objek ke string dengan cara kedua
    console.log(typeof(xy2));
    console.log(xy2);

    //materi string indexof

    let isi = "Saya belajar dirumah";
    console.log(isi.indexOf("belajar")); //mencari index dimulainya kata belajar hsil ini 5
    console.log(isi.indexOf("Saya")); //mencari index dimulainya kata Saya hsil ini 0
    
}

stringkonven()