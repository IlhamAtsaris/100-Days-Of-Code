// ambil semua elemen vidio
const videos = Array.from(document.querySelectorAll('[data-duration]'))


//pilih hanya yang 'javaScript lanjutan'
let jslanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
  

// ambil durasi masing-vidio
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':') .map(part => parseFloat(part))
        return (parts[0] * 60) + parts [1];
    })

//jumlahkan semua detik
    .reduce((total,detik) => total + detik);

// ubah formatnya menmjadi jam menit detik
    const jam = Math.floor(jslanjutan / 3600);
    jslanjutan = jslanjutan - jam *3600
    const menit = Math.floor(jslanjutan / 60);
    const detik = jslanjutan - menit * 60;

// simpan di DOM

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent =  `${jam}jam ${menit}menit ${detik}detik `

const jmlvidios = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pjmlvideo = document.querySelector('.jumlah-video');
    pjmlvideo.innerHTML = `${jmlvidios} video `

console.log(jam)
console.log(menit)
console.log (detik)
console.log(jmlvidios)