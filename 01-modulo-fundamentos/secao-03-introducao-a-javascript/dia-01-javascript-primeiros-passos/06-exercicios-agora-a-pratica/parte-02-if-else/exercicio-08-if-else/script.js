/* Exercícios - Agora, a prática: Parte II */

/* (IMPORTANTÍSSIMO) */

/* 8. Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos:
8.1. Atente que, sobre o custo do produto, incide um imposto de 20%;
8.2. Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero;
8.3. O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo;
8.3.1. valorCustoTotal = valorCusto + impostoSobreOCusto;
8.3.2. lucro = valorVenda - valorCustoTotal (lucro de um produto). */

const productCost = 5;
const productSalesPrice = 10;

if (productCost >= 0 || productSalesPrice >= 0) {
  const totalProductCost = productCost * 1.2;
  const totalProfit = (productSalesPrice - totalProductCost) * 1000;
  console.log(totalProfit);
} else {
  console.log("Erro, os valores não podem ser negativos.");
}