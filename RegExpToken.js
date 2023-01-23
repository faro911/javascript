let kalimat1 = "Sempurna ...";
let cek1 = /\./g;
console.log(kalimat1.match(cek1)); // mencari nilai titik titik dengean token

let kalimat2 = "aBcD1234 efg456 !@#$^_";
// akan muncul angka
console.log(kalimat2.match(/\d/g));

//selain angka
console.log(kalimat2.match(/\D/g));

//angka huruf underscore
console.log(kalimat2.match(/\w/g));

//selain angka, huruf underscore
console.log(kalimat2.match(/\W/g));

//whitespace
console.log(kalimat2.match(/\s/g));