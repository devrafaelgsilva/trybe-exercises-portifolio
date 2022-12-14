/* Exercícios - Bônus - Ordenação Bubble Sort: */

/* 1. Ordene o array numbers em ordem crescente e imprima seus valores: */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const arraysElementsAscendingSorter = (array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
};

console.log(arraysElementsAscendingSorter(numbers));

/* 2. Ordene o array numbers em ordem decrescente e imprima seus valores: */


const arraysElementsDescendingSorter = (array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
};

console.log(arraysElementsDescendingSorter(numbers));

/* 3. Agora, crie um novo array a partir do array numbers, sem perdê-lo. 
Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). 
Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. 
Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. 
O resultado deve ser o array abaixo: */

const newAscendingOrderArray = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const newArray = [];

const arrayFromArrayCreater = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (index + 1 < array.length) {
      newArray.push(array[index] * array[index + 1]);
    } else {
      newArray.push(array[index] * 2);
    }
  }
  return newArray;
};

console.log(arrayFromArrayCreater(newAscendingOrderArray));