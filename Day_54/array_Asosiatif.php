<?php
// $datadiri["nama"] = "ilham Atsaris";
// $datadiri["goldarah"] = "O";
// $datadiri["alamat"] = "Bekasi";


$datadiri = [
    "nama" => "ilham atsaris",
    "goldarah" => "O",
    "alamat" => "bekasi"
];

echo ucwords("Nama: " . $datadiri["nama"] . "<br>");
echo ucwords("golongan darah: " . $datadiri["goldarah"] . "<br>");
echo ucwords("alamat: " . $datadiri["alamat"]);
