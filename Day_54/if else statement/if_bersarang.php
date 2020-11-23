<?php
$psikotes   = 85;
$wawancara  = 'lulus';
$kesehatan  = 'tidak';
if ($psikotes >= 80) {
    echo "Selamat Anda Lulus Psikotes <br>";
    if ($wawancara == 'lulus') {
        echo   "selamat anda lulus wawancara <br> ";
    } else {
        echo " Maaf anda tidak lulus wawancara <br>";
    }
    if ($kesehatan == 'lulus') {
        echo " Selamat anda lulus tes kesehatan <br>";
    } else {
        echo " maaf anda tidak lulus tes kesehatan <br>";
    }
} else {
    echo "anda tidak lulus psikotes";
}
