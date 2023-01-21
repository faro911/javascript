function orra(){
    //yang bawah revers array
    let kota = ["Jakarta", "Surabaya", "Semarang", "Yogyakarta"];
    console.log(kota);
    return kota.reverse() //fungsi membalikn data pada array    
}
console.log(orra())


    //concet pada array untuk mnggbungkan 

    function koten(){
        let kota2 = ["Jakarta", "Surabaya", "Semarang", "Yogyakarta"];
        let kabupaten = ["Lampung Timur", "jombang"];
        let hasil = kota2.concat(kabupaten);

        return hasil;
    }

    console.log(koten())