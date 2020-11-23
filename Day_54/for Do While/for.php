<!-- for(inisiasi; kondisi; tambah nilai) 
{
    kode yang harus dieksekusi;
} -->

<!-- inisiasi : menginisiasikan nilai awal , misal meginisiasikan $x=0 (yang artinya variabel $x dimulai dari 0)

kondisi : mengevaluasi nilai, apabila menghasilkan TRUE maka proses perulangan terus dilanjutkan, namun apabila menghasilkan nilai FALSE maka proses perulangan berhenti.

Misal $x<=1000 , maka akan dicek apakah variabel $x bernilai kurang dari atau sama dengan 1000? Jika TRUE maka perulangan dilanjutkan

tambah nilai : menaikkan / menambahkan nilai variabel $x setiap terjadi perulangan. -->

<?php
for ($x = 0; $x <= 1000; $x++) {
    echo "Nomor Antrian yang tersedia: $x <br>";
}
?>
<!-- 
Jika dilihat pada kode diatas :

Pada segmen pertama, saat pertama kali dijalankan, $x bernilai 0
Pada segmen kedua akan dilakukan evaluasi apakah nilai $x <=1000, jawabnya adalah TRUE karena 0 kurang dari 1000, maka perulangan akan dijalankan yaitu mencetak Nomor Antrian yang tersedia: 0.
Setelah mencetak, maka akan mengulang eksekusi for tersebut, pada kedua kali dijalankan, $x bernilai 1 karena pada segmen ketiga sudah ditambahkan 1 ($x++ atau $x=$x+1)
pada segmen kedua perulangan kedua akan dilakukan evaluasi apakah nilai $x <=1000, jawabnya adalah TRUE karena 1 kurang dari 1000, maka perulangan akan dijalankan yaitu mencetak Nomor Antrian yang tersedia: 1.
Begitu seterusnya proses dijalankan hingga kondisi bernilai false, yaitu ketika $x bernilai lebih dari 1000 -->