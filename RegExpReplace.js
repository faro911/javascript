function rerep(){
    let data = "Belajar 2 Bulan bersama Niomic";

    console.log(data.replace(/2/,"Dua"));
    //mengganti nilai 2 pada variabel data menjadi 'Dua' dengan fungsi repalce
}
rerep()

//TUGAS MATERI INI


function panggilRegexp() {
    let data = "Belajar-Satu-Tahun-Bersama-Niomic";
    console.log(data.replace(/Belajar-Satu-Tahun-Bersama-Niomic/, "Belajar Satu Tahun Bersama Niomic"))
   }
   
   panggilRegexp()