console.log('JS OK')
/*
//Palindroma
//Chiedere all’utente di inserire una parola

const word = prompt('Inserisci una parola');


//Creare una funzione per capire se la parola inserita è palindroma

function checkPalindrom() {

    if (isNaN(word)) {
        console.log(word);
    }
    else {
        console.log('Inserisci una parola')
    }

    for (let i = word.length; i > 0; i--) {
        if (word[i] = word.charAt(word.length) - 1) {
            console.log('the word is palindrome.');
        } else {
            console.log('the word is not palindrome!');
        }
    }
}
checkPalindrom();
console.log(checkPalindrom);
*/


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/



//CHIEDO UTENTE PARI O DISPARI
const user = prompt('Inserisci pari o dispari');
console.log(user);

//CHIEDO A UTENTE DI INSERIRE NUMERO DA 1 A 5
const number = parseInt(prompt('Inserisci numero da 1 a 5'));
console.log(number);

// GENERO NUMERO RANDOM PC
let pc = parseInt(Math.random() * 5 + 1) ;
console.log(pc);

//SOMMIAMO I DUE NUMERI
function plusNumb(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const total = plusNumb(number, pc);
console.log(total);

//STABILISCO SOMMA SE PARI O DISPARI
function isOddOrEven(plusNumb) {
    
    return (plusNumb % 2 === 0) ? 'pari' : 'dispari'; 
}

let oddOreven 
if (!isNaN(total)) {
    oddOreven = isOddOrEven(total);
    console.log(isOddOrEven(total));
}

//DICHIARO VINCITORE
let result;

if(user === oddOreven)
{
    result = 'winner User'
}

else {
    result = 'winner PC'
}

console.log(result)
