<!-- Kata kunci break digunakan untuk menghentikan proses perulangan.

Contoh dalam kasus pencarian nilai terhadap elemen array, apabila pencarian nilai tersebut sudah ditemukan 
(bernilai TRUE) maka proses perulangan tidak dilanjutkan. -->

<?php
$arr_warna  = ['merah', 'biru', 'kuning', 'hitam', 'hijau', 'biru', 'pink', 'biru', 'jingga'];
echo "Saya mencari warna hitam<br>";
foreach ($arr_warna as $key => $value) {
    echo "warna pada elemen array ke-$key adalah $value <br>";
    if ($value == "hitam") {
        echo "Nah warna hitam Telah di temukan! dia berada pada indeks ke-$key <br>";
        break;
    }
}
