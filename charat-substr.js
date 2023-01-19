function call(){
    var huruf = "Samehadaku"

    console.log(huruf.charAt(6)) //codeat memanggil data huruf menggunakan index, sehingga hasil yang dikeluar kan adalah huruf "d"

    console.log("===")
    console.log(huruf.substr(3)) //pnggil data setelah index ke 3
    console.log(huruf.substr(3,4))  //pnggil data setelah index ke 3, dan potong data setelah index 4 dari index ke 3
    console.log(huruf.substr(-3)) //pnggil data sebelum index ke 3, brrti mundur dr data terakhir
}
call()