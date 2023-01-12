/* Exercícios - bônus */

/* Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo: */

/* 4. Depois, faça uma pirâmide com n asteriscos de base: */

/* 
n = 5

  *
 ***
*****
*/

let n = 5;

let asterisk = "*";
let output = "";
let midOfTheTriangle = (n + 1) / 2;
let leftControl = midOfTheTriangle;
let rightControl = midOfTheTriangle;
for (let lineIndex = 0; lineIndex <= midOfTheTriangle; lineIndex += 1) {
  output = "";
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > leftControl && columnIndex < rightControl) {
      output += asterisk;
    } else {
      output += " ";
    }
  }
  console.log(output);
  leftControl -= 1;
  rightControl += 1;
}
