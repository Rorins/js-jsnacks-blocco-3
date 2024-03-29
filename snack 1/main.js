// Snack 1
// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita

const player = {
    playerName: "Jack",
    surname: "Miller",
    age: 22,
    code: randCode(),
    averagePoints: randPoints(),
    successRate: randSuccess()
}

console.table(player)
// 3. Stampare Nome, cognome, età e codice giocatore.
console.log(player.playerName,player.surname,player.age,player.code)

// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate


// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100

function randCode(){
    //La lista dal quale peschiamo le lettere
    const letters = "ABCDEFGHLMNOQRS";
    //Stringa nel quale vengono inserite le lettere
    let code = "";

    while (code.length < 3){      
        code += letters[Math.floor(Math.random() * letters.length)];
    }
    
    while (code.length < 6){
    const randNumber = Math.floor(Math.random() * 3);
    code += randNumber;
}
    return code
}

// - la media punti fatti per partita deve essere compresa tra 0 e 50
function randPoints(){
    //Stringa nel quale viene inserita la media
    return Math.floor(Math.random() * 50);
}

// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
function randSuccess(){
    //Stringa nel quale viene inserita la media
    return Math.floor(Math.random() * 100);
}