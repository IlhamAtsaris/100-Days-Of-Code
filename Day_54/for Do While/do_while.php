<!-- do 
{
    kode yang harus dieksekusi;
} 
while (Kondisi bernilai TRUE); -->
<?php
$x = 1;
do {
    echo "nomor Antrian yang tersedia : $x <br>";
    $x++;
} while ($x <= 15);
?>

<!-- Pertama kali, kita menginisiasi $x=1

perinta do dijalankan tanpa mengevaluasi / cek kondisi terlebih dahulu, yaitu langsung mencetak Nomor Antrian yang tersedia: 1

$x++ yaitu menambahkan $x sehingga nilainya menjadi 2

Setelah itu aka dilakukan pengecekan kondisi, apakah $x(2) kurang dari sama dengan 15?

Jika nilainya True, maka perintah do kembali dijalankan, namun apabila false maka proses akan berhenti. -->