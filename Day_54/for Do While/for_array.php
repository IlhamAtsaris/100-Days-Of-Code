<?php
$arr_warna = ['merah', 'biru', 'kuning', 'merah', 'hijau', 'biru'];
$jumlah_merah = 0;

for ($i = 0; $i < 6; $i++) {
    if ($arr_warna[$i] == 'merah') {
        $jumlah_merah++;
    }
}
echo "jumlah warna merah " . $jumlah_merah;
?>
<!-- 
Jika dilihat pada kode diatas maka perulangan akan dilakukan sebanyak 11 kali (sesuai jumlah elemen pada array) karena variabel $i dimulai dari 0 $i=0 dan di cek dengan kondisi kurang dari 11 $i<11,dimana setiap perulangan dilakukan 
tambah nilai variabel $i $i++, Apabila setiap pengecekan kondisi $i<11 terpenuhi maka akan masuk ke dalam for dimana didalam for dilakukan pengecekan apakah nilai arr_warna[$i] apakah array warna ke $i sama dengan merah, jika kondisi 
tersebut terpenuhi maka variabel $jumlah akan menghitung totalnya.

Hasilnya akan mencetak baris seperti di bawah ini :

Jumlah warna merah 4 -->