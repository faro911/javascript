function carkel(){
    let kelima = [];
    for (let i = 1; i<50 ; i++){
        if(i%5 === 0){
            kelima.push(i)
        }
    }
    return kelima
}

console.log(carkel())