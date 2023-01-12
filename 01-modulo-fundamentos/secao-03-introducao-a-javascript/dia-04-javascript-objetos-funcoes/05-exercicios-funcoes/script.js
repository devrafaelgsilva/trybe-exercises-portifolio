/* Exercícios - funções (IMPORTANTÍSSIMO): */

/* Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito. */

/* Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis. */

/* 1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for:

Exemplo de palíndromo: arara;

verificaPalindrome('arara');

Retorno esperado: true;

verificaPalindrome('desenvolvimento');

Retorno esperado: false. */

function palindromeVerifier (string) {
  let reversedString = string.split("").reverse().join("");
  if (reversedString == string) {
    return true;
  } else {
    return false;
  } 
}

console.log(palindromeVerifier("hannah"));

/* Solução Alternativa:

function palindromeVerifier (string) {
  for (let index in string) {
    if (string[index] !== string[(string.length - 1) - index]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeVerifier("Hannah")); */

/* 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor:

Array de teste: [2, 3, 6, 7, 10, 1];

Valor esperado no retorno da função: 4. */

const firstArray = [2, 3, 6, 7, 10, 1];

function largestNumberIndexReturner (array) {
  let largestNumberIndex = 0;
  for (let index in array) {
    if (array[largestNumberIndex] < array[index]) {
      largestNumberIndex = index;
    }
  }
  return largestNumberIndex;
}

console.log(largestNumberIndexReturner(firstArray));

/* 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor:

Array de teste: [2, 4, 6, 7, 10, 0, -3];

Valor esperado no retorno da função: 6. */

const secondArray = [2, 4, 6, 7, 10, 0, -3];

function smallestNumberIndexReturner (array) {
  let smallestNumberIndex = 0;
  for (let index in array) {
    if (array[smallestNumberIndex] > array[index]) {
      smallestNumberIndex = index;
    }
  }
  return smallestNumberIndex;
}

console.log(smallestNumberIndexReturner(secondArray));

/* 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres:

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

Valor esperado no retorno da função: Fernanda. */

const arrayOfNames = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function largestStringReturner (array) {
  let largestString = array[0];
  for (let index in array) {
    if (largestString.length < array[index].length) {
      largestString = array[index];
    }
  }
  return largestString;
}

console.log(largestStringReturner(arrayOfNames));

/* 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete:

Array de teste: [2, 3, 2, 5, 8, 2, 3];

Valor esperado no retorno da função: 2. */

const arrayOfIntegralNumbers = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatedIntegralNumber (array) {
  let currentNumberRepetition = 0;
  let largestNumberRepetition = 0;
  let largestNumberRepetitionIndex = 0;

  for (let firstIndex in array) {
    let currentNumber = array[firstIndex]; 
    for (let secondIndex in array) {
      if (currentNumber === array[secondArray]) {
        currentNumberRepetition += 1;
      } 
    }  
    if (currentNumberRepetition > largestNumberRepetition) {
      largestNumberRepetition = currentNumberRepetition;
      largestNumberRepetitionIndex = firstIndex;
    }
    currentNumberRepetition = 0;
  } 
  return array[largestNumberRepetitionIndex];
}

console.log(mostRepeatedIntegralNumber(arrayOfIntegralNumbers));

/* Solução alternativa:

function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); */

/* 6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N:

Valor de teste: N = 5;

Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

const n = -5;

function numberIncreasingSummation (number) {
  let total = 0;
  if (Number.isInteger(number) && number > 0) {
    for (let index = 1; index <= number; index += 1) {
      total += index;
    }
    return total;
  } 
  return `O número ${number} não é um número inteiro e/ou não negativo`;
}


console.log(numberIncreasingSummation(n));

/* 7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
Considere que a string ending sempre será menor que a string word:

Valor de teste: 'trybe' e 'be';

Valor esperado no retorno da função: true;

verificaFimPalavra('trybe', 'be');

Retorno esperado: true;
verificaFimPalavra('joaofernando', 'fernan');

Retorno esperado: false. */

function endingLettersWordVerifier (wordString, endingString) {
  let wordStringSplitted = wordString.split("");
  let endingStringSplitted = endingString.split("").reverse().join("");
  let booleanValue = true;
  for (let index in endingStringSplitted) {  
    if (endingStringSplitted[index] !== wordStringSplitted[(wordStringSplitted.length - 1) - index]) {
      booleanValue = false;
    }
  }
  return booleanValue;

}

console.log(endingLettersWordVerifier("trybe", "be"));
console.log(endingLettersWordVerifier("joaofernando", "fernan"));

/* Soluções alternativas:

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  let controle = true;

  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }

  return controle;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false */