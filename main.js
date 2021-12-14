
//--AU CLICK ON CHANGE COULEUR D'UN TEXT CIBLE------------------------------//
const btn = document.querySelector('.bout');
const titre = document.querySelector('.titre_h1');

btn.addEventListener('click', () => {
  titre.classList.toggle('colored1');
})


//--AVEC FUNCTION------------------------------//

function test(){

    const btn2 = document.querySelector('.bout2');
    const titre2 = document.querySelector('.titre_h2');

    btn2.addEventListener('click', () => {
    titre2.classList.toggle('colored2');
    })

}

test();

// //-VERSION 1 --------------------------------------------------------------------------//
// const btn3 = document.querySelector('.btn_rejoindre');
// const elm = document.getElementsByTagName('h3');
// const inp = document.getElementById('sujet_perso');

// // var div = document.getElementById('myDiv');



// btn3.addEventListener('click', () =>{
//     const texte = elm[0].textContent;
//     // alert(texte);
//     inp.value += 'Recrutement - ' + texte;
//     // div.innerHTML += 'WayToLearnX!';

// });



// //-VERSION 2 --------------------------------------------------------------------------//
// const btn3 = document.querySelector('.btn_rejoindre');
// const elm = document.getElementsByTagName('h3');
// const inp = document.getElementById('sujet_perso');
// const lab = document.getElementsByTagName('label')

// // var div = document.getElementById('myDiv');



// btn3.addEventListener('click', () =>{
//     const texte = elm[0].textContent;
//     inp.value += 'Recrutement - ' + texte;
//     // lab[0].classList.add('colored');
//     const base = lab[0];
//    base.classList.add('colored1')

// });





// //-VERSION 3 --------------------------------------------------------------------------//
// (function(){
//     const btn3 = document.querySelector('.btn_rejoindre');
//     const intitule = document.getElementsByTagName('h3');
//     const vide = document.getElementById('sujet_perso');
//     const lab = document.getElementsByTagName('label')


//     btn3.addEventListener('click', () =>{
//         const texte = intitule[0].textContent;
//         vide.value += 'Recrutement - ' + texte;
//         const base = lab[0];
//         base.classList.add('colored1')
//     });
// })
// ();




//-VERSION 4 --------------------------------------------------------------------------//
function myFunction(){
    const btn3 = document.querySelector('.btn_rejoindre');
    const intitule = document.getElementsByTagName('h3');
    const vide = document.getElementById('sujet_perso');
    const lab = document.getElementsByTagName('label')


    btn3.addEventListener('click', () =>{
        const texte = intitule[0].textContent;
        vide.value += 'Recrutement - ' + texte;
        const base = lab[0];
        base.classList.add('colored1')
    }, { once: true });
}

myFunction();










