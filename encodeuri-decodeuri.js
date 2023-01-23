let kalim = "my area.php?/noe.hub.index 99";
let urei = encodeURI(kalim);

console.log(urei); //fungsi encodeURI untuk menampilkai nilai unik kode selain ,/?:@&=+$# dan diganti dengan kode untik tersebut, contoh sepasi diganti dengan %20.


console.log ("===== materi atas encode, materi bawah decode");

let uri = "my%20test.asp?name=st%C3%A5le&car=saab";
let decd = decodeURI(uri);

console.log(decd); //fungsi decodeUri kebalikan dari encode nya.. jadi nilai unik akan dikonvesi ke value yang sebenarnya.

