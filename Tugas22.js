function tugas22(){
    let kalimat = "Saya ingin belajar bersama";
    let toarry = kalimat.split(" ");

    toarry.forEach(function(x,y,z){
        console.log("Item :", x ,"index ke", y)
    })

}
tugas22()