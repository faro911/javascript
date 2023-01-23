function flags(){
    let kata = "abcdefghijklmnopqrstuvwxyz";

    console.log(kata.search(/K/));
    console.log(kata.search(/K/i));
    console.log(kata.search(/k/i));
    //fungsi flag i disni untuk membritahukan bahwa nilai huruf kapital dan kecil bernilai sama, sehingga searh pada K pertama tidk ditemukan sehingga bernilai -1, sedangkan perncarian ke 2 dan 3 akan menemukan karena sudah diberi flag i sehingga menghasilkan deteksi index ke 10 di kedua dan ketiga

}

flags()