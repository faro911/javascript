function trakhir(){
    //materi lastindexof
    let ope ="belajar bahasa di niomic dan mempelajari bahasa java";
    console.log(ope.lastIndexOf("bahasa"));//mencari dengan index
    console.log(ope.lastIndexOf("bahasa", 40));

    //mater search
    console.log(ope.search("bahasa")); // mencari berdasar kan reguler expresion
    console.log(ope.search(/bahasa/));
}

trakhir();