/* Parte III - Organizando lições */

/* Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código: */

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};
  
const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};
  
const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

/* 1. Crie uma função para adicionar o turno da noite na lesson2.
Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela: */

const newKeyAdder = (object, key, value) => {
  object[key] = value;
};

newKeyAdder(lesson2, "turno", "noite");

console.log(lesson2);

/* 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro: */

const keysLister = (object) => Object.keys(object);

keysLister(lesson2);

console.log(keysLister(lesson2));

/* 3. Crie uma função para mostrar o tamanho de um objeto: */

const objectSize = (object) => Object.keys(object).length;

objectSize(lesson2);

console.log(objectSize(lesson2));

/* 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro: */

const valuesLister = (object) => Object.values(object);

valuesLister(lesson2);

console.log(valuesLister(lesson2));

/* 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 
Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */

/* console.log(allLessons); */

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

/* 6. Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas: */

const studentsTotalNumberReturner = (object) => {
  let total = 0;
  for (let key in object) {
    total += object[key].numeroEstudantes;
  }
  return total;
};

console.log(studentsTotalNumberReturner(allLessons));

/* 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 
console.log(getValueByNumber(lesson1, 0));
Output: 'Matemática' */

const valueByNumberReturner = (object, index) => Object.values(object)[index];

console.log(valueByNumberReturner(lesson1, 0));

/* 8. Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Por Exemplo:
console.log(verifyPair(lesson3, 'turno', 'noite'));
Output: true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
Output: false */

const pairVerifier = (object, key, value) => {
  const entries = Object.entries(object);
  let booleanValue = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] == value) {
      booleanValue = true;
    }
  }
  return booleanValue;
};

console.log(pairVerifier(lesson3, "materia", "Maria Clara"));

