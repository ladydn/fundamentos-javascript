
//copy an array
const originalArray = [1, 2, 3, 4, 5];
const copyAnArray = [...originalArray];
console.log(copyAnArray);

//combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

//creating array with additional elements
const baseArray = [1, 2, 3, 4, 5];
const newArray = [...baseArray, 6, 7, 8,10];
console.log(newArray);

//past elements to functions
function sum (a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));