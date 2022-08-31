console.log('JS OK')

//ESERCIZIO 1 (PALINDROMO)

//CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA

let word = prompt('Inserisci una parola');
let wordReverse = word.split("").reverse().join("");
const container = document.querySelector('.container');
container.innerHTML = word && wordReverse;

//CREO FUNZIONE PER CAPIRE SE PAROLA PALINDROMA OPPURE NO

if (word === wordReverse) {
    console.log("la parola è palindroma");
} else{
    console.log("la parola non è palindroma")
}



//ESERCIZIO 2 (PARI O DISPARI)

//CHIEDO UTENTE PARI O DISPARI
const user = prompt('Inserisci pari o dispari');
if (user === 'pari' && 'dispari'){
    console.log(user);
}else {
    alert('error');
}


//CHIEDO A UTENTE DI INSERIRE NUMERO DA 1 A 5
const number = parseInt(prompt('Inserisci numero da 1 a 5'));
if (number > 0 && number <6){
    console.log(number);
}else {
    alert('error')
}


// GENERO NUMERO RANDOM PC
let pc = parseInt(Math.random() * 5 + 1) ;
console.log(pc);

//SOMMIAMO I DUE NUMERI
function plusNumb(num1, num2) {
    if (num1 <= 5){
    const sum = num1 + num2;
    return sum;

    } return 'error'
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

if(user === oddOreven && total <= 10)
{
    result = 'winner User'
}
if (user !=oddOreven && total <= 10){
    result = 'winner PC'
}
else {
    console.log('ERROR')
}

console.log(result)
