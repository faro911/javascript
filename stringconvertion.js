function stringkonven(){
    let x = new String("Beljar kuy");
    console.log(typeof(x));
    console.log(x);
    
    let xy = x.toString(); //konversi objek ke string dengan cara pertama
    console.log(typeof(xy));
    console.log(xy);

    let xy2 = x.valueOf(); //konversi objek ke string dengan cara kedua
    console.log(typeof(xy2));
    console.log(xy2);


}

stringkonven()