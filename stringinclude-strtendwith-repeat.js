function sting() {
    var nc = "Samehadaku tempat nonton anime";
    console.log(nc.includes('anime')) //include brfungsi apakah ada tidaknya string pada variabel, jika ada maka akan bernilai true, jg tidak false.

    console.log(nc.startsWith('Samehadaku')); //mencari kata pada awal string, jk benar true
    console.log(nc.endsWith('anime')); //mencari kata pada akhir string, jika benar true
    console.log(nc.startsWith('tempat', 11)); //mencari kata tempat di index 11, benar akan true

    console.log(nc.repeat(2)); //var nc akan berulang 2x
    console.log('ibu '.repeat(3), 'bapak'); // mengulang string ibu 3x baru mengeksksi bpak
}

sting()