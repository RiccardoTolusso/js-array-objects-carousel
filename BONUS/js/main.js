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

// seleziono l'elemento che contiene gli items
const itemsContainer = document.querySelector(".items")
// seleziono l'elemento che contiene le thumbs e i pulsanti prev e next
const thumbsContainer = document.querySelector(".thumbs")

const displayedImages = images.map((img, i)=>{
    // creo il div con classe item che conterrà immagine titolo e testo
    const item = document.createElement("div");
    // controllo se sto creando la prima immagine 
    if (i === 0){
        // se sto creando la prima immagine la imposto ad active
        item.className = "item active";
    } else {
        item.className = "item";
    }
    // item.dataset.index = i;

    // creo l'elemnto dell'immagine
    const imageElement = document.createElement("img");
    imageElement.src = img.image;
    item.appendChild(imageElement);

    // creo l'elemento del titolo
    const titleElement = document.createElement("h3");
    titleElement.innerText = img.title;
    item.appendChild(titleElement);
    
    // creo l'elemento del testo descrittivo
    const textElement = document.createElement("p");
    textElement.innerText = img.text;
    item.appendChild(textElement);
    
    // inserisco l'item nel DOM
    itemsContainer.appendChild(item);
    
    
    // creo la THUMB
    const thumb = document.createElement("div");
    if (i === 0){
        // se sto creando la prima immagine la imposto ad active
        thumb.className = "thumb active";
    } else {
        thumb.className = "thumb";
    }
    
    // creo l'immagine da inserire nella THUMB
    const thumbImage = document.createElement("img");
    thumbImage.src = img.image;
    
    // inserisco l'immagine nella thumb e la thumb dentro il thumbsContainer
    thumb.appendChild(thumbImage)
    thumbsContainer.appendChild(thumb)


    return {
        image: img.image,
        title: img.title,
        text: img.text,
        item: item,
        thumb: thumb
    }
})

// console.log(displayedImages);
// console.log(images);

// definisco una variabile currentPosition che conterrà la posizione dell'elemento che sto visualizzando


let currentPosition = 0;
// aggiungo l'event listner per il click
thumbsContainer.addEventListener("click", clickHandeler)

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
        nextPosition = displayedImages.length - 1;
    } else if (nextPosition >= displayedImages.length){
        nextPosition = 0;
    }
    switchSlide(currentPosition, nextPosition);
    currentPosition = nextPosition;
}



// definisco la funzione che cambia le slide
function switchSlide(prevIndex, nextIndex){
    // disattivo la precedente immagine
    displayedImages[prevIndex].item.classList.toggle("active");
    displayedImages[prevIndex].thumb.classList.toggle("active");
    
    // attivo la successiva immagine
    displayedImages[nextIndex].item.classList.toggle("active");
    displayedImages[nextIndex].thumb.classList.toggle("active");
}