function pilih(){
    var elemen = ['api','air','tanah','udara','dark','light']
    console.log(elemen[0])

    var elemen2=elemen.splice(1,0,'api kegelapan')
    var elemen2=elemen.splice(5,0,'Dark Eather')
    // splice bertujuan untuk menyisipkan, detail angka 1 berarti index ke 1, angka 0 berarti data setelahny tdk ada yg terhapus, jika di isi 1 maka data setelah penyisipan akan terhapus, bgt juga dengan 2 dan berikut2 ny
    var elemen2=elemen.splice(0,1) //splice dikiri bertujuan untuk pnghpusan data index ke 0, dan yang terhapus adalah data tsb, jika 1 dignti dua, maka data ke satu  yaitu index 0 dan data ke dua index satu yang akan terhapus, bgt juga seterusny.

    var elemen2=elemen.unshift('Thunder','Lightning') //unshift bertujuan untuk menambahkan data di awal array
    return elemen
}

console.log(pilih())