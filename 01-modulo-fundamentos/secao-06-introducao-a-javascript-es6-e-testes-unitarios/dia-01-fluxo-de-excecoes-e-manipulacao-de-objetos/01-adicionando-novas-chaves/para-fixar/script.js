/* Para fixar: */

/* 1. Agora que você viu diferentes formas de associar chaves e valores a um objeto, que tal praticar? 
Adicione suas informações ao objeto pessoaEstudante = {}, como name, email, telefone, github e linkedin, usando os métodos aprendidos neste conteúdo: */

const studentPerson = { 
};

const adicionaPropriedade = (object, newProperty, value) => { 
  object[newProperty] = value;
};

let newKey = "name";
const name = "Rafael";

adicionaPropriedade(studentPerson, newKey, name);

newKey = "email";
const email = "rafaell.gomes101@gmail.com";

adicionaPropriedade(studentPerson, newKey, email);

newKey = "github";
const github = "https://github.com/devrafaelgsilva";

adicionaPropriedade(studentPerson, newKey, github);

newKey = "linkedin";
const linkedin = "https://www.linkedin.com/in/devrafaelgsilva/";

adicionaPropriedade(studentPerson, newKey, linkedin);

console.log(studentPerson);
