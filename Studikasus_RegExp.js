
function panggilRegexp(value) {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
   
    //Tulis Code Jawaban Kamu Di Bawah ini
    let ambilfariabel = str.match(/[cC]/g);
    let ambilfariabel2 = str.match(/[kK]/g);
    let ambilfariabel3 = str.match(/[lL]/g);

    console.log(ambilfariabel);
    console.log(ambilfariabel2);
    console.log(ambilfariabel3);
   }
   
   panggilRegexp()

   //studikasus untuk mencari nilai didlaam sebuah variabel str menggunakan fungsi regexp match, sehingga menampilkan variabl yang nantinya kita cari