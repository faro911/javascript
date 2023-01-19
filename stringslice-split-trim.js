function potongan(){
    var judul = " samehadaku ";

    console.log("===Materi bawah string slace===")

    console.log(judul.slice(1)) // memotong kalimat dr index 1 menjadi amehadaku
    console.log(judul.slice(1, 5)) // memotong dari index 1 dan setelah 5 menjadi ameh
    console.log(judul.slice(-3)) // memotong ke blakang -3 menjadi aku

    console.log("===Materi bawah tentang split===")

    console.log(judul.split()) //membuat variable menjadi array
    console.log(judul.split("")) // membuat tiap huruf variabel menjadi index ke array

    console.log("===Materi bawah tentang trim===")

    console.log(judul)
    console.log(judul.trim()) // fungsi trim untuk memotong wide spasi diawal dan akhir var

}
potongan()