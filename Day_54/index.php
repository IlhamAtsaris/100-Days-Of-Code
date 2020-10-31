<?php

//belajar Variable di PHP
//$namalengkap = "Ilham Atsaris";

//echo $namalengkap;


// mix dengan html
$nama = "Ilham Atsaris";
$alamat = "<h2>Bekasi<h2>";
$gol_darah = "O";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Selamat datang, <?php echo $nama ?> </h1>
    Alamat: <?php echo $alamat ?>
    <h2>Golongan darah: <?php echo $gol_darah ?></h2>
</body>

</html>