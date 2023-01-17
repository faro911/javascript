function konten1() {
    var card = {
        judul : 'Projek 1',
        Keyword : 'Pohong enak',
        deskripsi : 'Makanan ringan pengganti nasi',
        harga : 15000,
    }

    for (var x in card) {
        console.log(card[x])
    }
}
konten1()