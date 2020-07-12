// DOM Selection
// document.getElementById()
const judul = document.getElementById('judul');

judul.style.color='red';
judul.style.backgroundColor='#ccc';
judul.innerHTML='Sandhika Galih';

// document.getElementsByTagName()
// -> HTMLColection

const pi = document.getElementsByTagName('p');
pi[2].style.backgroundColor = 'lightblue';

for (let i = 0; i< pi.length;i++){
    pi[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize='50px';

// documents.getElemetsByClassName()
// --> HTMLColection
const p1 =document.getElementsByClassName('p1')
pi[0].innerHTML= 'ini diubah dari javaScript'