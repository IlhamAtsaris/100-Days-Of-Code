// const judul = document.getElementById('judul');
// judul.innerHTML='Ilham atsaris';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML='Hai kurubah kamu'

// const judul = document.querySelector('#judul');
// judul.style.color='white';
// judul.style.backgroundColor= 'red';

//const p2 = document.querySelector('.p2');
//p2.setAttribute('class','label')

// DOM Manipulation
// buat elemen baru

const pBaru = document.createElement('p');

const teksbaru = document.createTextNode('paragraf baru');

//simpan tulisan kedalam paragraf
pBaru.appendChild(teksbaru);

// simpan p baru diakhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);




// insert before

const libaru = document.createElement('li');

const tekslibaru = document.createTextNode('item baru gaes');

libaru.appendChild(tekslibaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('li:nth-child(2)');

ul.insertBefore(libaru,li2);

//replace element
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p')

const h2baru = document.createElement('h2');
const textH2 = document.createTextNode('Judul baru gaes');

h2baru.appendChild(textH2);

sectionB.replaceChild(h2baru,p4)


libaru.style.backgroundColor='green';