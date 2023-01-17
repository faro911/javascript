function dataitem () {
    var item1 = {
        type : 'Senjata',
        Nama : 'Golok merah hitam',
        unik : 'Extra ele dark',
        price : 5000,
        adsmd : [43,2,10,1,2],
    }

    var item2 = {
        type : 'Armor',
        Nama : 'Dragoon Raja Iblis',
        unik : 'Anti absolut death',
        price : 10,
        adsmd : [1,57,12,30,90],
    }

    console.log(item1)
    console.log(item1.type)
    console.log(item1.Nama)
    console.log(item1.unik)
    console.log(item1.price)
    console.log("")
    console.log(item2)
    console.log(item2.type)
    console.log(item2.Nama)
    console.log(item2.unik)
    console.log(item2.price)

    // array-dalam obejck
    console.log("")
    console.log(item1.adsmd)
    console.log(item1.adsmd[0])
    console.log(item2.adsmd)
    console.log(item2.adsmd[1])

}

dataitem()