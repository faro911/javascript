function tugas26(){
    let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1,[2,3],[3,4]];

    angka.forEach(function(x,y,z){
        if(isFinite([x]) === true){
            console.log("Angka",x,"Not Infinite")
        }
        else {
            console.log("Angka",x,"Infinite")
        }
    });
}

tugas26();

