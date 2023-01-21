let senjata = [
    {name:"Sword",type:"1hand"},
    {name:"Long Sword", type:"2hand"},
    {name:"Spear", type:"2hand"},
    {name:"Staff", type:"2hand"},
    {name:"knife", type:"1hand"},
    {name:"none", type:"barehand"},
]

    console.log(senjata.every(senjatas => senjatas.type === "2hand"));

    //fungsi every disni untuk mencari data keselurhan apakah memiliki tipe data yang sama sesuai yang di cari, jika benar akan bernilai true, namun jika salah satu salah akan bernilai false.