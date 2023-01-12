/* Exercícios - agora, a prática: */

/* Aprofunde seus conhecimentos */

/* 4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50: */

let greatestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let primeVerifier = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      primeVerifier = false;
    }
  }
  if (primeVerifier) {
    greatestPrimeNumber = currentNumber;
  }
}

console.log(greatestPrimeNumber);

