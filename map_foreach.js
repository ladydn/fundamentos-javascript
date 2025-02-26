/*
map: Permite aplicar una funcion a cada elemento de una array y construir un nuevo array con los resultados
*/
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((number) => number * number);

console.log(numbers);
console.log(numbersSquare);

/*
forEach: Permite ejecutar una funcion por cada elemento de un array
itera sobre cada elemento de un array y ejecuta una funcion proporcionada
para cada elemento, sin crear un nuevo array
*/

const colors = ['red', 'green', 'blue'];

const iteratedColors = colors.forEach(color =>console.log(color));
console.log(colors); // ['red', 'green', 'blue']
console.log(iteratedColors); // undefined


//Fahreheit to celsius
const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius = fahrenheit.map(f => Math.round((f - 32) * 5/9));
console.log('Temperaturas en fahrenheit', fahrenheit);
console.log('Temperaturas en celsius', celsius);

//sum elements of an array
const newNumbers = [1, 2, 3, 4, 5,6];
let sum = 0;
newNumbers.forEach(number => sum += number);
console.log(sum);

const valueArray = [1, 2, 3, 4, 5];
const cubeResult = valueArray.map(value => Math.pow(value, 3));
console.log(cubeResult);