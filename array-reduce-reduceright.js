//reduce

let angka = [1,2,3,4,5];
let leducel = (accumulator, currentValue) => accumulator + currentValue;

console.log(angka.reduce(leducel)); //menjumlahkan nilai di dalam array
console.log(angka.reduce(leducel, 5)); //menjalan kan nilai array dan di tmabah 5


//reduce right
let nilai = [[1,2],[2,3],[4,5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
); //menjalankan pemabliakn nilai array dari belakang.

console.log(nilai);