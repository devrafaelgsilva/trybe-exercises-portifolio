/* Exercícios - Agora, a prática: Parte II */

/* 3. Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”: */

const value = 101;

if (Math.sign(value) === 1) {
  console.log("positive");
} else if (Math.sign(value) === -1) {
  console.log("negative"); 
} else if (Math.sign(value) === 0) {
  console.log("zero");
} else {
  console.log ("insert a number");
}
