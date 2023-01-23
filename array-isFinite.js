function fnit(){
    let a = isFinite([1,2,3,4]);
    let b = isFinite(["semarang","demak","depok"]);
    let c = isFinite([1,2,3,"madang","nasipadang"]);
    let d = isFinite(9999.20);

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d); // d berniali true jida isfinite karena nilainya tidak terbatas

}

fnit()