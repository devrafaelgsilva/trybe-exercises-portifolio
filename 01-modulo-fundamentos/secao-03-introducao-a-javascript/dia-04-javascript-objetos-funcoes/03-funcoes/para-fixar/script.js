/* Para fixar: */

/* Desenvolva cada exercício a seguir utilizando funções: */

/* 1. Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function sum (a, b) { return a + b;} 

function subtraction (a, b) { return a - b;} 

function multiplication (a, b) {return a * b;} 

function division (a, b) { return a / b;}

function modulo (a, b) {return a % b;}

console.log(sum(1, 2));
console.log(subtraction(1, 2));
console.log(multiplication(1, 2));
console.log(division(1, 2));
console.log(modulo(1, 2));

/* 2. Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados: */

let firstNumber = 10;
let secondNumber = 11;

function numbersComparer (x, y) {
  if (x > y) {
    return `${x} é maior do que ${y}`;
  } else if (x < y) {
    return `${y} é maior do que ${x}`;
  } else {
    return "Os números são iguais";
  }
}

console.log(numbersComparer(firstNumber, secondNumber));

/* 3. Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados: */

let firstNum = 1;
let secondNum = 2;
let thirdNum = 3;

function numbersComparerVersion2 (x, y, z) {
  let largestNumber = 0;
  if (x > y && x > z) {
    largestNumber = x;
    return `Entre os três números, o maior é o ${largestNumber}`;
  } else if (y > x && y > z) {
    largestNumber = y;
    return `Entre os três números, o maior é o ${largestNumber}`; 
  } else if (z > x && z > y) {
    largestNumber = z;
    return `Entre os três números, o maior é o ${largestNumber}`;
  } else {
    return "Os três números são iguais";
  }  
}

console.log(numbersComparerVersion2(firstNum, secondNum, thirdNum));

/* 4. Faça um programa que, dado um valor recebido como parâmetro, 
retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”: */

function numberValueTypeIdentifier (value) {
  if (value > 0) {
    return "positive";
  } if (value < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(numberValueTypeIdentifier(1));

/* 5. Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro:

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus;
Um ângulo será considerado inválido se não tiver um valor positivo. */

function triangleVerfier (a, b, c) {
  const arrayOfAngle = [a, b, c];
  for (let index = 0; index < arrayOfAngle.length; index += 1) {
    if (arrayOfAngle[index] < 0) {
      console.log(`O ângulo ${arrayOfAngle[index]} é inválido`);
    }
  }
  if (a < 0 || b < 0 || c < 0) {
    return "O(s) ângulo(s) é(são) inválido(s), insira ângulo(s) válido(s)";
  } else if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}

console.log(triangleVerfier(1 , 2, -3));

/* Solução alternativa:

function triangleAnglesValidate(angleA, angleB, angleC) {
  let sumOfAngles = angleA + angleB + angleC;
  let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

  if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Erro: ângulo inválido';
  }
} */


