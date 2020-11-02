<?php

// echo $nama_array[index]; //untuk mencetak salah satu elemen array 
// print_r($nama_array); //untuk mencetak semua elemen array beserta index
// var_dump($angka); //untuk mencetak semua elemen array beserta index dan tipe data

$angka = array(1, 2, 3, 4, 5);
$buah = ["pisang", "apel", "jeruk", "mangga"];
$angka[] = 6; // menambahkan data ke dalam array $angka dimana akan diletakan di index paling terak
$angka[2] = 10;
$buah[0] = "alpukat";

echo $angka[1];
echo "<br>";
echo $buah[3];
echo "<br>";
echo $angka[2];
echo "<br>";
echo $buah[0];
echo "<br>";
echo var_dump($angka);
