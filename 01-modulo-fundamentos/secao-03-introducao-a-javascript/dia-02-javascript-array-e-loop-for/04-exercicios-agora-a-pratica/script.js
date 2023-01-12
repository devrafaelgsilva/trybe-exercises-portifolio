/* Exercícios - agora, a prática: */

/* Lidando com Arrays (IMPORTANTÍSSIMO): */

/* Iremos utilizar esse array para realizar os próximos exercícios: */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log(): */

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

/* 2. Some todos os valores contidos no array e imprima o resultado: */

const arraySummation = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum = sum + array[index];
  }
  return (sum);
};

console.log(arraySummation(numbers));

/* 3. Calcule e imprima a média aritmética dos valores contidos no array. 
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos: */

/* 3.1. Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. 
Caso não seja, imprima a mensagem: “valor menor ou igual a 20”: */

const arraySummationAverage = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  let averageResult = sum / array.length;
  if ((averageResult) > 20) {
    return "valor maior que 20";
  } else {
    return "valor menor ou igual a 20";
  }
};

console.log(arraySummationAverage(numbers));

/* 4. Utilizando for, descubra qual o maior valor contido no array e imprima-o: */

const arraysHighestNumberIdentifier = (array) => {
  let highestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  return highestNumber;
};

console.log(arraysHighestNumberIdentifier(numbers));

/* 5. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */

const arraysOddNumbersCounter = (array) => {
  let oddNumbersCounter = 0;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] % 2 !== 0) {
      oddNumbersCounter += 1;
    }
  }
  if (oddNumbersCounter === 0) {
    return "nenhum valor ímpar encontrado";
  } else {
    return oddNumbersCounter;
  }
};

console.log(arraysOddNumbersCounter(numbers));

/* 6. Utilizando for, descubra qual o menor valor contido no array e imprima-o: */

const arraysLowestNumberIdentifier = (array) => {
  let lowestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < lowestNumber) {
      lowestNumber = array[index];
    }
  }
  return lowestNumber;
};

console.log(arraysLowestNumberIdentifier(numbers));

/* 7. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado: */

const array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push([index]);
}

console.log(array);

/* 8. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2: */

for (let index = 0; index < array.length; index += 1) {
  console.log(array[index] / 2);
}