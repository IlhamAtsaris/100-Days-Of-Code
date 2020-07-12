var penumpang = ['ilham','galih','yulia'];

var tambahPenumpang = function (namapenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {    
        //tambah penumpang di awal array
        penumpang.push(namapenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        //telusuri seluruh kursi dari awal
        for (var i = 0; i< penumpang.length; i++) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                //tambah penumpang dikursi tersebut
                penumpang[i] = namapenumpang;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
            //jika sudah ada nama yang sama
            else if (penumpang[i] == namapenumpang ) {
                //tampilkan pesan kesalahan nya
                console.log(namapenumpang + ' sudah ada didalam angkot')
                //kembalikan isi array& keluar dari function
             // jika seluruh kursi terisi
            }
            else if(i == penumpang.length - 1) {
                //tambah penumpang diakhir array
                penumpang.push(namapenumpang);
               //kembalikan isi array dan keluar dari function
               return penumpang;
            }
      }  
    }                   
}

var hapuspenumpang = function (namapenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong')
        return penumpang;
    } else {
        for (var i = 0;i < penumpang.length;i++){
            if ( penumpang [i] == namapenumpang ){
                penumpang [i] = undefined;
                return penumpang
            } else if (i == penumpang.length - 1) {
                console.log(namapenumpang + ' tidak ada didalam angkot');
                return penumpang;    
            }
        }
    }
}