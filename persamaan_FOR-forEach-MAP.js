function porec(){
    let data = ["a","b","c","e","p","o"];

    data.forEach(function (item,index,array){ //item index array daapt diganti yang lain, intinya 3 buah printah itu menghslkn data tsbt
        console.log(item);
        console.log(index);
        console.log(array);
    })
}
porec()
//perulangn menggunakan forEach

console.log("=============== PEMBATAS ==============")

function panggilPerintahMap1() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.map((item, index, array) => {
      console.log(item);
      console.log(index);
      console.log(array);
    });
   }
   
   panggilPerintahMap1();
//perulangan menggunakan map cara 1

console.log("=============== PEMBATAS ==============")
function panggilPerintahMap2() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.map(function(item, index, array){
      console.log(item);
      console.log(index);
      console.log(array);
    });
   }
   
   panggilPerintahMap2();

   //perulangan menggunakan map cara 2
