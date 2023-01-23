function numpar() {
let a = "10";
let b = 2;

let hasilab = Number(a) + b; //fungsi number disamping dipruntukan untuk merubah dari nilai variabel string ke number , sehingga hasil penjumlahanya bertipe number
console.log(hasilab);


}
numpar()

function pasepase(){
    let x1 = "190";
    let x2 = "3 ekor boyo";
    let x3 = "120.9 hektar";

    console.log("===== Penggunaan parse Int ======");
    console.log(parseInt(x1));
    console.log(parseInt(x2));
    console.log(parseInt(x3));

    console.log("===== Penggunaan parse Float ======");

    console.log(parseFloat(x1));
    console.log(parseFloat(x2));
    console.log(parseFloat(x3));
}
pasepase()