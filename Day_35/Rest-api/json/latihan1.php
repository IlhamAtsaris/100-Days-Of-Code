<?php

$mahasiswa = [
    [
    "nama" => "ilham atsaris",
    "nip" => "1901590712",
    "email" => "ilham.sujudi@binus.ac.id"
    ],
    [
        "nama" => "sandika galih",
        "nip" => "43243212",
        "email" => "sandhikaunpas@ac.id"
     ]
];

$data = json_encode($mahasiswa);
echo $data
?>