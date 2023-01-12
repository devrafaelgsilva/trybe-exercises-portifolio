/* Exercícios - agora, a prática */

/* Aprofunde seus conhecimentos */

/* 2. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 
Por exemplo, a palavra “banana” seria invertida para “ananab”. 
Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente: */

let word = "tryber";

const wordReverser = (string) => {
  let reversedWord = "";
  for (let index = string.length - 1; index >= 0; index -= 1) {
    reversedWord += string[index];
  }
  return reversedWord;
};

console.log(wordReverser(word));

/* Solução alternativa:

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord); 

Outra solução alternativa:

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord); */