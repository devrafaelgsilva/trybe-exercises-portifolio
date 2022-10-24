const myName = "Rafael";
const birthCity = "Palmas-TO";
let birthYear = 1997;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthCity = 2030;

console.log(birthYear);

// TypeError: Assignment to constant variable.
// Recebemos esse erro porque tentamos mudar o valor de uma constante e isso não é permitido, visto que elas sempre devem manter sua atribuição original - caso contrário, não deveriam ser constantes.




