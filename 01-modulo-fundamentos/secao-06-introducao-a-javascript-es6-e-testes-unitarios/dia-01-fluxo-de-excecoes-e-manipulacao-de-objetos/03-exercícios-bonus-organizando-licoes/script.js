/* Bônus - Organizando lições (IMPORTANTÍSSIMO): */

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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(Object.values(allLessons));

/* 1. Utilizando o objeto (allLessons), crie uma função para contar quantos estudantes assistiram às aulas de Matemática: */

const MathStudentsTotalNumberReturner = (object) => {
  let total = 0;
  const keys = Object.keys(object);
  for (let index in keys) {
    if (object[keys[index]].materia === "Matemática") {
      total += object[keys[index]].numeroEstudantes;
    }
  }
  return total;
};

console.log(MathStudentsTotalNumberReturner(allLessons));

/* 2. Utilizando o objeto (allLessons), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, 
as aulas que ele ou ela ministrou e o número total de estudantes: */

const infoGetter = (object, name) => {
  const allLessons = [];
  let studentTotalNumber = 0;
  const values = Object.values(object);
  for (let index in values) {
    if (values[index].professor === name){
      allLessons.push(values[index].materia);
      studentTotalNumber += values[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, alunos: studentTotalNumber};
};

const reportReturner = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, infoGetter(allLessons, name));
  return report;
};

console.log(reportReturner(allLessons, "Maria Clara"));