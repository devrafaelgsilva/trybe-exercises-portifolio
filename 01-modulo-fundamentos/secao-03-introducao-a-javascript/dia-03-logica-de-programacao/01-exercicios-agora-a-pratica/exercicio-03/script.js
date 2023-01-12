/* Exercícios - agora, a prática: */

/* Aprofunde seus conhecimentos */

/* Considere o array de strings abaixo: */

let array = ["java", "javascript", "python", "html", "css"];

/* 3. Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. 
Considere o número de caracteres de cada palavra: */

const stringSizeComparer = (array) => {
  let longestWord =  "";
  let shortestWord = "";
  for (let index = 0; index < array.length; index += 1) {
    for (let Secondindex = 0; Secondindex < index; Secondindex += 1) {
      if (array[index].length > array[Secondindex].length) {
        longestWord = array[index];
      }
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    for (let Secondindex = 0; Secondindex < index; Secondindex += 1) {
      if (array[index].length < array[Secondindex].length) {
        shortestWord = array[index];
      }
    }
  }
  return {longestWord, shortestWord};
};

console.log(stringSizeComparer(array));