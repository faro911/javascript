function match(){
    let kata = "Saya pintar memasak nasi goreng";
    console.log(kata.match("pintar"));
    console.log(kata.match("goreng"));
    console.log(kata.match(/goreng/)); // pencarian berupa regularexpresion, tetapi hasilnya brupa array

    
}

match()