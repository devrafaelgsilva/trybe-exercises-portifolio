/* Para fixar */

/* 1. Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada': */

let applicantStatus = "aprovado";

/* 2. Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
2.1. Caso 'aprovado', imprima “Parabéns, você foi aprovado(a)!”;
2.2. Caso 'listo', imprima “Você está na nossa lista de espera.”;
2.3. Caso 'reprovado', imprima “Você foi reprovada(o)”;
2.4. Caso default, imprima a mensagem de “Informação incorreta.”. */

switch (applicantStatus) {
case "aprovado":
  console.log("Parabéns, você foi aprovada(o)!");
  break;
case "lista":
  console.log("Você está na nossa lista de espera.");
  break;
case "reprovada":
  console.log("Você foi reprovada(o).");
  break;
default:
  console.log("Informação incorreta.");  
  break;
}   
