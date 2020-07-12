//const close2 = document.querySelector('.close');
//const card2 = document.querySelector('.card');

//close2.addEventListener('click', function() {
//        card2.style.display = 'none'
//})

//DOM traversal
const close2 = document.querySelectorAll('.close');

// for (let i = 0; i < close2.length; i++){
//     close2[i].addEventListener('click', function(e){
//         //close2[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

close2.forEach (function (el) {
    el.addEventListener('click', function (e){
        e.target.parentElement.style.display ='none';
    })
});
