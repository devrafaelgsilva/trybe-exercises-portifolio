/* Exercícios - Agora, a prática: Parte II */

/* (IMPORTANTE) */

/* 4. Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro:
4.1 Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus;
4.2 Um ângulo será considerado inválido se não tiver um valor positivo.
 */

const firstAngle = 60;
const secondAngle = 60;
const thirdAngle = 60;

if (isNaN(firstAngle) || isNaN(secondAngle) || isNaN(thirdAngle)) {
  console.log ("error");
} else if (Math.sign(firstAngle) === -1 || Math.sign(secondAngle) === -1 || Math.sign(thirdAngle) === -1) {
  console.log ("error");
} else if (firstAngle + secondAngle + thirdAngle === 180) {
  console.log ("true");
} else {
  console.log ("false");
}



 
