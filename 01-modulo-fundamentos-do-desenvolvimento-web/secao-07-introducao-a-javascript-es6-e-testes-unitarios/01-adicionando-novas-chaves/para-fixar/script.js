/* Para fixar: */

/* 1. Agora que você viu diferentes formas de associar chaves e valores a um objeto, que tal praticar? 
Adicione suas informações ao objeto pessoaEstudante = {}, como nome, email, telefone, github e linkedin, usando os métodos aprendidos neste conteúdo: */

const pessoaEstudante = { /* 1. Adicionando um objeto sem chaves/propriedades e valores nele. */

};

const adicionaPropriedade = (objeto, novaPropriedade, valor) => { /* 2. Criando uma arrow function responsável por adicionar novas propriedades a um objeto.  */
    objeto[novaPropriedade] = valor
};
/* 
3. Declarando a variável "newKey" que armazenará os valores das propriedades/chaves.
3.1. Declarando as constantes que armazenará os valores do objeto "pessoaEstudante".
3.2. Chamando a arrow function "adicionaPropriedade" que ficará responsável por adicionar novas propriedades a um objeto. */

let newKey = 'nome';
const nome = 'Rafael';

adicionaPropriedade (pessoaEstudante, newKey, nome);

newKey = 'email';
const email = 'rafaell.gomes101@gmail.com';

adicionaPropriedade (pessoaEstudante, newKey, email);

newKey = 'github';
const github = 'https://github.com/devrafaelgsilva';

adicionaPropriedade (pessoaEstudante, newKey, github);

newKey = 'linkedin';
const linkedin = 'https://www.linkedin.com/in/devrafaelgsilva/';

adicionaPropriedade (pessoaEstudante, newKey, linkedin);

console.log(pessoaEstudante);
