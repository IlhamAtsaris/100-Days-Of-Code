<?php

$herbivora = ["kambing", "sapi", "kerbau"];
$karnivora = ["harimau", "singa", "macan"];
$omnivora = ["ayam", "monyet", "babi"];

$binatang = ["herbivora" => $herbivora, "karnivora" => $karnivora, "omnivora" => $omnivora];

echo $binatang["herbivora"][1];
