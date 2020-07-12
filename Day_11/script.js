const klik = document.getElementById('tombolubahwarna')

klik.onclick= function(){
    //const ganti = document.body;
    //ganti.style.backgroundColor='lightgreen';
    document.body.style.backgroundColor = ('white')
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Random Color');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

klik.after(tAcakWarna)

tAcakWarna.addEventListener('click',function (){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

})

const sHijau = document.querySelector('input[name=sHijau]');

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

})

const sBiru = document.querySelector('input[name=sBiru]');

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

})
