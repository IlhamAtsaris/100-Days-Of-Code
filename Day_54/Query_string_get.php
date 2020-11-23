<?php
$nama = $_GET['nama'];
$alamat = $_GET['alamat'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Selamat Datang <?php echo $nama; ?></h1>
    <h2>Alamat Kamu Dimana? <?php echo $alamat; ?></h2>
</body>

</html>