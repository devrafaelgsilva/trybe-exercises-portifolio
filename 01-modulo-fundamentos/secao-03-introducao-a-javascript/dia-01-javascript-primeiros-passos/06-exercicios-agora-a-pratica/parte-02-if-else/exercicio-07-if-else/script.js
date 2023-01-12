/* Exercícios - Agora, a prática: Parte II */

/* (IMPORTANTÍSSIMO) */

/* 7. Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
Caso contrário, ele deve retornar false:
Bonus: use somente um if. */

const a = 1;
const b = 2;
const c = 3;

let isOdd = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 3 !== 0) {
  isOdd = true;
}

console.log(isOdd);
