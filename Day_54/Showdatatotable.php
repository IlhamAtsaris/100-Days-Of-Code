<?php
$karyawan =
    [
        ['nama' => 'Naufal', 'alamat' => 'Bandung', 'jenis_kelamin' => 'Pria'],
        ['nama' => 'Winda', 'alamat' => 'Surabaya', 'jenis_kelamin' => 'Wanita'],
        ['nama' => 'Abyasa', 'alamat' => 'Bandung', 'jenis_kelamin' => 'Pria']
    ];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1">
        <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>jenis Kelamin</th>
        </tr>
        <?php
        foreach ($karyawan as $key => $value) {
        ?>
            <tr>
                <td><?php echo $value['nama']; ?></td>
                <td><?php echo $value['alamat']; ?></td>
                <td><?php echo $value['jenis_kelamin']; ?></td>
            </tr>
        <?php
        }
        ?>

    </table>
</body>

</html>