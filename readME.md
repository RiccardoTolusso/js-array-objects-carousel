Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.

ho un container che contiene un div items
all'interno del div items dovrò inserire gli elementi 

<div class="item active">
    <img src="./img/01.jpg" alt="">
</div> 

+ un titolo e un paragrafo

il tag active attiva e disattiva i blocchi che altrimenti non sono visibili

ho 2 opzioni secondo me
1. cambio il src dell immagine
2. utilizzo la funzionalità toggle per mettere e togliere la classe active

penso che la seconda sia la soluzione migliore perchè mi permetterà di animare il cambio se necessario

**Milestone 1:**
1. Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
   - itero sugli oggetti del mio array con map per generare un nuovo array di oggetti
   - per ogni oggetto che trovo creo un nuovo oggetto che contiene 1 nuovo parametro
   - item che contiene l'elemento con la classe item che vado a generare che conterrà l'elemento del dom
2. Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

