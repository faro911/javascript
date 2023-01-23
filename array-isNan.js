function nan(){
    let a = isNaN([1,2,3,4,5]);
    let b = isNaN(123);

    console.log(a);
    console.log(b);
}

nan()
// nb nilai isnan memberikan nilai true jika nilai tersebut berupa array jika tidak akan menjadi false.