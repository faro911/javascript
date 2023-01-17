function dataitem () {
    var item1 = {
        type : 'Senjata',
        Nama : 'Golok merah hitam',
        unik : 'Extra ele dark',
        price : 5000,
        adsmd : [43,2,10,1,2],
    }
    item1.price = 4000000;
    // property di rubah dari harga 5000 menjadi 4000000

    console.log(item1)
    console.log(item1.price)
}

dataitem()