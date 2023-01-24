function calgnap(){
    let bilgen = [];
    for (let i = 1; i<10 ; i++){
        if(i%2 === 0){
            bilgen.push(i)
        }
    }
    return bilgen
}

console.log(calgnap())
//modulus diatas untuk mencari bilangan genap

function calgnjl(){

    let bilgnjl = [];

    for (let i = 1; i<10 ; i++){
        if(i%2 !== 0){ //perbedaan untuk mencari ganjil ada pada tidak sama dengan, !==
            bilgnjl.push(i)
        }
    }
    return bilgnjl
}

console.log(calgnjl())
//modulus diatas untuk mencari bilangan ganjil