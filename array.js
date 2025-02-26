//contexto global - local
const fruits =Array('apple', 'banana', 'orange');
console.log(fruits);

const justOneNUmber = Array(5);
console.log(justOneNUmber);

const number = Array.of(1,2,3,4,5);
console.log(number);

const oneNumber =[4]
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ['soccer', 'basketball', 'tennis', 'volleyball'];
console.log(sports);

const recipeIngredients = ['sugar', 'flour', 'eggs', 'butter', true, 12,2,{ingredinte: 'salt', quantity: 1}, false];
console.log(recipeIngredients);
console.log(recipeIngredients[0]);

const numberOfFruits = fruits.length;
console.log(numberOfFruits)

//mutar
/*
La mutabilidad se refiere a la capacidad de un array de cambiar su contenido sin crear un nuevo array
*/
fruits.push('grape');
console.log(fruits);

//inmutability
/*
La inmutabilidad implica que, al modificar un array, se crea un nuevo array en lugar de cambiar el original.
*/
const newFruits = fruits.concat('grape', 'Kiwi');
console.log(fruits);
console.log(newFruits);


const isArray = Array.isArray(fruits);
console.log(isArray);

const numberArray = [1,2,3,4,5];
let sum = 0
for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}
console.log(sum);
