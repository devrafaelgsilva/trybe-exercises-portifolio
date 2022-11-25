
/* Parte I - Criando fluxo de exceção */

/* Copie e cole o código abaixo no seu editor de texto: */

/* 1. Crie erros personalizados:

1. Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?;
2. Utilize o throw new Error e o bloco try/catch;
3. Evite funções que tenham muitas responsabilidades distintas;
4. Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro;
5. Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan();
6. Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!;
7. Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch. */


/* 1. Criando arrow function que verifica se os valores foram introduzidos e se estes são do tipo numérico, usando a condição if e expressão throw new Error:  */

const verifyIsNumber = (value1, value2) => { /* 1.1. Criando a arrow function para verificar se os valores se são preenchidos e se são números. */
    if (!value1 || !value2) { /* 1.2. Usando a declaração "if" para verificar se é verdadeiro se pelo menos um dos valores são não valores inseridos pelo usuário. */
        throw new Error('Preencha os campos para realizar a soma'); /* 1.3. Usando a declaração "throw (new Error)" para arremecer nova mensagem de erro caso a condição acima seja verdadeira. */
    }
    if (isNaN(value1) || isNaN(value2)) { /* 1.4 Usando a declaração "if" para verificar se é verdadeiro se pelo menos um dos valores não é numérico inseridos.  */
        throw new Error('Informe dois números para realizar a soma'); /* 1.5. Usando a declaração "throw (new Error)" para arremecer nova mensagem de erro caso a condição acima seja verdadeira. */
    }
}

const sum = () => {
    try {
        const value1 = document.getElementById('value1').value; /* 2.1. Declarando a constante que lhe será atribuida o valor pelo método getElementById().value, no qual muda o valor de um campo de texto. */
        const value2 = document.getElementById('value2').value; /* 2.2. Declarando a constante que lhe será atribuida o valor pelo método getElementById().value, no qual muda o valor de um campo de texto. */
        const result = Number(value1) + Number(value2); /* 2.4. Atribuindo o resultado do cálculo à constante "result". */
        document.getElementById('result').innerHTML = `Resultado: ${result}` /* 2.5. Atribuindo a mensagem `Resultado: ${}` e o valor da constante "result" dentro das chaves ({result}) ao conteúdo dentro do elemento de id "result". */
    } catch (error) { /* 2.6. Usando a declaração "catch (error) caso testado a função "VerifyIsNumber" e detectado erro, para chamar o conteúdo da expressão throw new Error. */
        document.getElementById('result').innerHTML = `Erro: ${error.message}`; /* 2.7. Atribuindo a mensagem `Erro: ${}` e o conteúdo da declaração "throw (new Error)", por meio da expressão entre chaves ({error.message}), ao conteúdo dentro do elemento de id "result".  */
    } finally { /* 2.8. Usando a declaração "finally" que define um bloco de código a ser executado independentemente do resultado. */
        document.getElementById('value1').value = ""; /* 2.9. Limpando o campo de texto, atribuindo o valor "" ao conteúdo input de id "value1" por meio do método getElementById().value. */
        document.getElementById('value2').value = ""; /* 2.9.1. Limpando o campo de texto, atribuindo o valor "" ao conteúdo input de id "value1" por meio do método getElementById().value.  */
    }
}

window.onload = () => { /* 3.0. Arrow function que executa a arrow function "sum" quando clicada no botão.  */
    const button = document.getElementById('button'); /* 3.1. Declarando a constante que lhe será atribuida o valor pelo método getElementById().  */
    button.addEventListener('click', sum); /* 3.2. Adicionando o evento executar arrow function por meio do método element.addEventListener('click, nome da função'). */
}
