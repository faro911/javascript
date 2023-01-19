function potongan(){
    var judul = "samehadaku";

    console.log(judul.slice(1)) // memotong kalimat dr index 1 menjadi amehadaku
    console.log(judul.slice(1, 5)) // memotong dari index 1 dan setelah 5 menjadi ameh
    console.log(judul.slice(-3)) // memotong ke blakang -3 menjadi aku

}
potongan()