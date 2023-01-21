function frx(){
    let abjad = ["a","b","c"];
    abjad.forEach(function(x,y,z){
        console.log(x); //perulangan x menunjukan nilai item dr array
        console.log(y); //function y menunjukan hasil index ke brp
        console.log(z); //function z menampilkan variabel dari nilai abjad scr slruh
    })
}

frx()

//nb fungsi forEach bisa di ganti dengan map, contoh baris 3 abjad.map(function...)