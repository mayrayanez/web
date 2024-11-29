'use strict'

const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

// click en li 

li.forEach((cadaLi, i) => {
    li[i].addEventListener('click', () => {

        li.forEach((cadaLi, i) => {
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})


// Función para voltear la tarjeta específica
function flipCard(cardNumber) {
    var card = document.getElementById("card" + cardNumber);
    card.classList.toggle("flipped");
}


let currentSlide = 0;

function moveSlide(direction) {
    const cards = document.querySelectorAll('.flip-card');
    const totalSlides = cards.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const cardContainer = document.querySelector('.card-container');
    cardContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Función para discos

const $discos = document.querySelectorAll('.disco');
const $siguiente = document.querySelector('#siguiente');
const $anterior = document.querySelector('#anterior');
let estaActivo = 0;

$siguiente.addEventListener('click', (e) => {
    const etiquetaActual = ++estaActivo;

    console.log(etiquetaActual);
    if (etiquetaActual >= $discos.length - 1) {
        --estaActivo
    } else {
        for (const $disco of $discos) {
            $disco.classList.remove('active');
        }
        $discos[etiquetaActual].classList.add('active');
    }

})

$anterior.addEventListener('click', (e) => {
    const etiquetaActual = --estaActivo;

    console.log(etiquetaActual);
    if (etiquetaActual < 0) {
        ++estaActivo
    } else {
        for (const $disco of $discos) {
            $disco.classList.remove('active');
        }
        $discos[etiquetaActual].classList.add('active');
    }

})