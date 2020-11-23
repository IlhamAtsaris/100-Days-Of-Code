<?php
function gantiNama(&$nama)
{
    $nama = "Indah";
}
$nama = "Risa";
gantiNama($nama);
echo $nama;
//Note : perhatikan ada penambahan & pengiriman $var ke fungsi
?>

<!-- Pada contoh di atas, $nama dideklarasikan dengan nilai Risa dan diletakkan di luar fungsi, kemudian memanggil fungsi gantiNama 
dengan mengirim variabel $nama yang berisi nilai Risa sebagai parameter.
Pada fungsi gantiNama , $nama diset sebagai parameter referensi sehingga ditulis menjadi &$nama, yang artinya variabel yang dilewatkan 
pada pemanggilan fungsi akan dikenai perubahan sesuai dengan yang dikerjakan fungsi tersebut. -->
<!-- 
Baris kode di atas akan menghasilkan output seperti di bawah ini.

Indah -->