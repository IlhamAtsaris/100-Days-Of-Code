// event onclink

const p3 = document.querySelector('.p3');

function ubahWarna (){
    p3.style.backgroundColor = 'lightblue';
}
function ubahWarnap2 (){
    p2.style.backgroundColor = 'lightblue';
} 

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnap2

const p1= document.querySelector('section#b p');

p1.addEventListener('click', function(){
    alert('oke bos');
});


const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function (){
    const ul = document.querySelector('section#b ul');
    
    const libaru = document.createElement('li');
    const tekslibaru = document.createTextNode('item baeru gaes')

    libaru.appendChild(tekslibaru);
    ul.appendChild(libaru);

})

