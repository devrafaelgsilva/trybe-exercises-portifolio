/* Exercícios - bônus */

/* 7. Faça um programa que diz se um número definido numa variável é primo ou não: */

/* Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. 
Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

const primeNumberVerifier = (num) => {
  let zeroRemainderCounter = 0;
  for (let index = 1; index <= num; index += 1) {
    if (num % index === 0) {
      zeroRemainderCounter += 1;
    }
  }
  if (zeroRemainderCounter === 2) {
    return `${num} é um número primo`;
  } else {
    return `${num} não é um número primo`;
  }
};

console.log(primeNumberVerifier(7));

/* Solução Alternativa:

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo'); */