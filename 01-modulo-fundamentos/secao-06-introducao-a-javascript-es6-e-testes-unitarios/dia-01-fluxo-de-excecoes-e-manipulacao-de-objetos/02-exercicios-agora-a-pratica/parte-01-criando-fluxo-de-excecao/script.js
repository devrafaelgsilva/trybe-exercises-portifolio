
/* Parte I - Criando fluxo de exceção */

/* 1. Crie erros personalizados:

1. Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?;
2. Utilize o throw new Error e o bloco try/catch;
3. Evite funções que tenham muitas responsabilidades distintas;
4. Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro;
5. Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan();
6. Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!;
7. Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch. */

const numberVerifier = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error("Preencha os campos para realizar a soma");
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error("Informe dois números para realizar a soma");
  }
};
const sum = () => {
  try {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    numberVerifier(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById("result").innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById("value1").value = ""; 
    document.getElementById("value2").value = ""; 
  }
};
window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};