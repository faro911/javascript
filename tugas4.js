function data() {

    var siswa1 = 160;
    var siswa2 = 173;
    var siswa3 = 160;
 
    if(siswa1>siswa2){
        if(siswa1>siswa3){
            if(siswa2>siswa3){
                console.log("Siswa1 tertinggi, urutan tertinggi:siswa1,siswa2,siswa3")
            }
            else{
                console.log("Siswa1 tertinggi, urutan tertinggi:siswa1,siswa3,siswa2")
            }
        }
        else{
            console.log("Siswa3 tertiggi, urutan tertinggi:siswa3,siswa1,siswa2")
        }
    }
    else if(siswa1>siswa3) {
        console.log("siswa2 tertinggi, urutan tertinggi:siswa2,siswa1,siswa3")
    }
    else if(siswa2>siswa3) {
        console.log("siswa2 tertinggi, urutan tertinggi:siswa2,siswa3,siswa1")
    }
    else{
        console.log("siswa3 tertinggi, urutan tertinggi:siswa3,siswa2,siswa1")
    }
}

data()