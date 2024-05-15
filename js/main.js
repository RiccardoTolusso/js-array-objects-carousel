'use strict'

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const itemsContainer = document.querySelector(".items")
const displayedImages = images.map((img, i)=>{
    // creo il div con classe item che conterrà immagine titolo e testo
    const parent = document.createElement("div");
    // controllo se sto creando la prima immagine 
    if (i === 0){
        // se sto creando la prima immagine la imposto ad active
        parent.className = "item active";
    } else {
        parent.className = "item";
    }
    // parent.dataset.index = i;

    // creo l'elemnto dell'immagine
    const imageElement = document.createElement("img");
    imageElement.src = img.image;
    parent.appendChild(imageElement);
    // creo l'elemento del titolo
    const titleElement = document.createElement("h3");
    titleElement.innerText = img.title;
    parent.appendChild(titleElement);
    // creo l'elemento del testo descrittivo
    const textElement = document.createElement("p");
    textElement.innerText = img.text;
    parent.appendChild(textElement);
    itemsContainer.appendChild(parent)
    return {
        image: img.image,
        title: img.title,
        text: img.text,
        item: parent
    }
})

// console.log(displayedImages);
// console.log(images);

// definisco una variabile currentPosition che conterrà la posizione dell'elemento che sto visualizzando


let currentPosition = 0;
// aggiungo l'event listner per il click
itemsContainer.addEventListener("click", clickHandeler)

// definisco la funzione che gestirà la logica del click
function clickHandeler(e){
    switch (e.target.className){
        case "next":
            // passo alla slide successiva
            moveByOneSlide(1)
            break
        case "prev":
            // passo alla slide precedente
            moveByOneSlide(-1)
            break
    }
}

// definisco la funzione che gestisce lo spostamento delle slide a quelle con indice immediatamente precedente o successivo
function moveByOneSlide(direction){
    // direction corrisponde a + o - 1 in base a che voglia andare alla slide successiva o precedente
    let nextPosition = currentPosition + direction
    if (nextPosition < 0){
        // se sono in posizione 0 e cerco di scorrere all'indietro
        nextPosition = 0;
    } else if (nextPosition >= displayedImages.length){
        nextPosition = displayedImages.length - 1;
    }
    switchSlide(currentPosition, nextPosition);
    currentPosition = nextPosition;
}



// definisco la funzione che cambia le slide
function switchSlide(prevIndex, nextIndex){
    displayedImages[prevIndex].item.classList.toggle("active");
    displayedImages[nextIndex].item.classList.toggle("active");
}