/* Exercícios - Agora, a prática: Parte III */

/* 1. Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz:
1.1. Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais;
1.2. Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case);
1.3. Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let chessPieces = "bishop";
chessPieces.toLowerCase();

switch (chessPieces.toLowerCase()) {
case "bishop":
  console.log("The Bishop moves diagonally");
  break;
case "king":
  console.log("The King moves from its square to a neighboring square");
  break;
case "pawn":
  console.log("The Pawn moves one square straight ahead");
  break;  
case "rook":
  console.log("The Rook can move in its line or row");
  break;
case "queen":
  console.log("The Queen may move like a Rook or a Bishop");
  break;
case "knight":
  console.log("The Knight jumps two squares vertically and one square horizontally, or two squares horizontally and one square vertically");
  break;
default: 
  console.log("Error");
}

