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
    - creo un event listner per il click su items
    - se l'elemento cliccato ha la classe:
      - prev passo all'immagine precedente
      - next passo all'immagine successiva
    - definisco una funzione per gestire la logica di selezione dell'indice da visualizzare
    - definisco un funzione per gestire lo switch delle slide

**Milestone 2:**
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
    - per come ho impostato la mia logica della milestone 1 mi basta semplicemente modificare i valori che assegno a nextPosition quando nextPosition ha valore < 0 o valore > della lunghezza del mio array displayedImages