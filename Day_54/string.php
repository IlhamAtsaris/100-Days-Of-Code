<?php
$nama = "Ilham Atsaris";
$pesan = "selamat datang, $nama"; // bila ingin menampilkan variable $nama maka harus mengunakan petik dua "
$pesan2 = ' selamat datang, $nama'; // bila menggunakan petik satu maka variable $nama tidak di cetak (dianggap String biasa)

echo $pesan;
echo "<br>"; // pindah baris baru
echo $pesan2;
echo "<br>"; // pindah baris baru

$num_char = 50;
$text = 'Contoh script yang digunakan untuk memotong 50 huruf pertama dari kalimat / paragraf dengan php';
echo substr($text, 0, $num_char) . '...';
