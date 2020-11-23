<!-- if (kondisi1)
{
proses / kode yang dijalankan apabila kondisi1 bernilai benar (true)
}
elseif (kondisi2)
{
proses / kode yang dijalankan apabila kondisi2 bernilai benar (true)
}
else
{
proses / kode yang dijalankan apabila semua kondisi bernilai salah (false)
} -->


<?php
$nilai = 70;
if ($nilai >= 85) // true
{
    echo "Selamat Anda mendapat Nilai A";
} elseif ($nilai >= 70) //true
{
    echo "Selamat Anda mendapat Nilai B";
} elseif ($nilai >= 60) //true
{
    echo "Anda mendapat Nilai C";
} else  //false
{
    echo "Anda mendapat Nilai D";
}
