function panggilshft() {
    var kota = ['Jakarta', 'Bandung', 'Yogyakarta', 'Semarang', 'Solo']
    console.log(kota)
    console.log("======")

    var kota2 = kota.shift() //shift untuk hapus data awal pada array
    console.log(kota2)
    var kota2 = kota.pop() //pop untuk hapus data akhir pada array, detail pnghpusan jkt, solo
    console.log(kota2)
    var kota2 = kota.push("Surabaya") //push untuk menambah data di bagian akhir array

    return kota
}

console.log(panggilshft())