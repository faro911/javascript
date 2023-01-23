function evale(){
    let angka = [1,2,3,4,5,6,7,8,9];
    let total = 0;
    
    for (i=0;i<angka.length;i++){
        total += angka[i];
    }

    console.log(eval(total)); //fungsi eval untuk menjumlah kan nilai didalam array

}


evale()