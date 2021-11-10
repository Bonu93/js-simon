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

    //pick user numbers and push them in array
    for (i = 0; i < numbers.length; i++) {
        let userNum = parseInt(prompt('Inserisci un numero che hai memorizzato'));
        userNumbers.push(userNum);
    }

    //compare user numbers to cpu numbers
    const commonNumbers = userNumbers.filter( number => numbers.includes(number) );

    //endgame message

    if (commonNumbers.length === userNumbers.length) {
        displayResult.innerHTML = `Complimenti, hai memorizzato tutti i numeri!`
    } else {
        displayResult.innerHTML = `Peccato, hai memorizzato solo ${commonNumbers.length} numeri`
    }
    
    //show memorized numbers
    commonNumbers.forEach((number) => {
        displayNum.innerHTML += `${number} `;
    })
    
}, 30000);









/********************* FUNCTIONS **************************/




/**
 * 
 * @param {number} length 
 * @returns an array of random 1 to 99 numbers, length defined by param
 */
function genArrayNumbers(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let number = Math.floor(Math.random() * 100) +1;
        array.push(number);
    }
    return array;
}