let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

console.log(angka);
let asd = angka.sort();
console.log(asd);
console.log(asd.reverse());

let pencaharian = angka.filter(angkanya => {
    return angkanya > 10
});
console.log(pencaharian);