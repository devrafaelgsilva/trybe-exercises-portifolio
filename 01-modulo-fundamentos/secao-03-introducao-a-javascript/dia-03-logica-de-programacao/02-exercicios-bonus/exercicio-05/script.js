/* Exercícios - bônus */

/* Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo: */

/* 5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: */

/* Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop: 

n = 7

   *
  * *
 *   *
*******
*/

let n = 7;

let asterisk = "*";
let output = "";
let middleOfTheTriangle = (n + 1) / 2;
let leftControl = middleOfTheTriangle;
let rightControl = middleOfTheTriangle;
for (let lineIndex = 1; lineIndex <= middleOfTheTriangle; lineIndex += 1) {
  output = "";
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex == leftControl || columnIndex == rightControl || lineIndex == middleOfTheTriangle) {
      output += asterisk;
    } else {
      output += " ";
    }
  }
  leftControl -= 1;
  rightControl += 1;
  console.log(output);
}