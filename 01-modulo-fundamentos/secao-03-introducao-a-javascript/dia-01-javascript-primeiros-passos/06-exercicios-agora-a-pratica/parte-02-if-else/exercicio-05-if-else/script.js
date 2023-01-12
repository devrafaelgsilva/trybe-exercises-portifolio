/* Exercícios - Agora, a prática: Parte II */

/* 5. Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
5.1. Porcentagem >= 90 -> A;
5.2. Porcentagem >= 80 -> B;
5.3. Porcentagem >= 70 -> C;
5.4. Porcentagem >= 60 -> D;
5.5. Porcentagem >= 50 -> E;
5.6. Porcentagem < 50 -> F;
5.7. O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let percentage = 49.99;

if (percentage < 0 && percentage > 100) {
  console.log ("Erro.");
} else if (percentage >= 90) {
  percentage = "A";
  console.log(percentage);
} else if (percentage >= 80) {
  percentage = "B";
  console.log(percentage);
} else if (percentage >= 70) {
  percentage = "C";
  console.log(percentage);
} else if (percentage >= 60) {
  percentage = "D";
  console.log(percentage);
} else if (percentage >= 50) {
  percentage = "E";
  console.log(percentage);
} else {
  percentage = "F";
  console.log(percentage);
}
