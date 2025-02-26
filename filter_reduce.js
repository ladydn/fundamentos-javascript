//filter: crear un nuevo array con elementos que cumplan con la condición
//dada por una funcion

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);

//reduce: reducir un array a un solo valor
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((acc, number) => acc + number, 0);
console.log(sum);

const words = ["hello", "world", "hello", "world", "hello", "world"];
const wordFrequency = words.reduce((accumulator, word) => {
    if (accumulator[word]) {
        accumulator[word] += 1;
    } else {
        accumulator[word] = 1;
    }
    return accumulator;
}, {});
console.log(wordFrequency);
