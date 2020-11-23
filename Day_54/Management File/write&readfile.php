<!-- Untuk membuat file, kita dapat menggunakan fungsi yang sudah disediakan PHP, yaitu file_put_contents("namafile.ext","pesan"); -->
<!-- parameter pertama adalah nama file beserta ekstensinya, Misal filesaya.txt
parameter kedua adalah pesan yang akan ditulis dalam file tersebut -->
<?php
$pesan = "Ini Hasil Membuat File melalui PHP";

file_put_contents("file.txt", $pesan);
?>

<!-- Untuk membaca isi file, kita dapat menggunakan fungsi file_get_contents("namafile.ext");

Parameter yang dikirim melalui fungsi file_get_contents adalah nama file yang hendak dibaca. -->

<?php

$isi_file = file_get_contents("file.txt");

echo $isi_file;

?>