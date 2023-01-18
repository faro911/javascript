function daftarbuah(){
    var bucket = ['pisang','jeruk'];
    console.log(bucket)
    var bucket2= bucket.unshift('apel','mangga');
    return bucket
}

console.log(daftarbuah())