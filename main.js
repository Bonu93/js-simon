/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//numbers array
const numbers = genArrayNumbers(5);
const userNumbers = [];

//dom refs
const displayNum = document.querySelector('.numbers');
const displayResult = document.querySelector('.answer');
const displayTitle = document.querySelector('.title');

//print numbers in dom
numbers.forEach((number) => {
    displayNum.innerHTML += `${number} `;
});


setTimeout( () => {

    //numbers disappear after timeout
    displayNum.innerHTML = ''; 
}, 30000);

setTimeout( () => {
    //pick user numbers and push them in array
    for (i = 0; i < numbers.length; i++) {
        let userNum;
        do {
            userNum = parseInt(prompt(`Inserisci il ${i + 1}° numero`));
        } while (userNumbers.includes(userNum) || isNaN(userNum))

        userNumbers.push(userNum);
    }

    //compare user numbers to cpu numbers
    const commonNumbers = userNumbers.filter( number => numbers.includes(number) );

    //endgame message
    if (commonNumbers.length === userNumbers.length) {
        displayResult.innerHTML = `Complimenti, hai memorizzato tutti i numeri!`;
    } else if (commonNumbers.length === 0) {
        displayResult.innerHTML = `Non hai memorizzato nessun numero`;
    } else {
        displayResult.innerHTML = `Peccato, hai memorizzato solo ${commonNumbers.length} numeri`;
    }
    
    //show memorized numbers
    commonNumbers.forEach((number) => {
        displayNum.innerHTML += `${number} `;
    })

}, 30050);









/********************* FUNCTIONS **************************/




/**
 * 
 * @param {number} length 
 * @returns an array of random 1 to 99 numbers, length defined by param
 */
function genArrayNumbers(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let number;
        do {
            number = Math.floor(Math.random() * 99) +1;
        } while (array.includes(number)) 
        array.push(number);
    }
    return array;
}