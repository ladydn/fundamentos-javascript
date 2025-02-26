//Crea una copia superficial(shallow copy) de una porcion del
//array a partir de un inicio y un fin
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());