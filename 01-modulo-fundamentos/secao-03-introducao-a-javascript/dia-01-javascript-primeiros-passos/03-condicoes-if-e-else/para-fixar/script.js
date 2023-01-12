/* Para fixar: */

/* 1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100: */

const score = 70;

/* 2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
2.1. Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”;
2.2. Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera.”;
2.3. Se a nota for menor que 60, imprima “Você foi reprovada(o).”. */

/* 3. Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação: */

if (score >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (score < 80 && score >= 60) {
  console.log("Você está na nossa lista de espera.");
} else if (score < 60) {
  console.log("Você foi reprovada(o).");
}

/* 4. Altere o valor da nota para verificar se as condições que você implementou funcionam: */

/* const score = 50;
"Você foi reprovada(o)."

const score = 70;
"Você está na nossa lista de espera."

const score = 90;
"Parabéns, você foi aprovada(o)!" */
