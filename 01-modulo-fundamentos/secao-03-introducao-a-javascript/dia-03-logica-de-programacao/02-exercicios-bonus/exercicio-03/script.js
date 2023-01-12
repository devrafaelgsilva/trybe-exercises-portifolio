/* Exercícios - bônus */

/* Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo: */

/* 3. Agora inverta o lado do triângulo. Por exemplo: */

/* 
n = 5

    *
   **
  ***
 ****
*****
*/

let n = 6;

let asterisk = "*";
let space = " ";
for (let index = 1; index < n; index += 1) {
  console.log(`${space.repeat(n - index)}${asterisk.repeat(index)}`);
}
 
/* Solução Alternativa:

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}; */