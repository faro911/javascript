function panggilshft() {
    var kota = ['Jakarta', 'Bandung', 'Yogyakarta', 'Semarang', 'Solo']
    console.log(kota)
    console.log("======")

    var kota2 = kota.shift()
    console.log(kota2)

    return kota
}

console.log(panggilshft())