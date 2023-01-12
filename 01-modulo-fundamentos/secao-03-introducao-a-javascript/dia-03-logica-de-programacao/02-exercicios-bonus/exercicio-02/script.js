/* Exercícios - bônus */

/* Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo: */

/* 2. Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: */

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
for (let index = 1; index < n; index += 1) {
  console.log(asterisk.repeat(index));
}

/* Solução alternativa:

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
}; */