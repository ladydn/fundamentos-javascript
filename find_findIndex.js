// find(): devuelve el  valor del primer elemento del array
// que cumple la funcion de prueba proporcionada

//find()
const multipleOf5 = [15, 10, 20, 15, 40];
const firstNumberGreaterThan10 = multipleOf5.find((number) => number > 10);
console.log(firstNumberGreaterThan10);

//findIndex(): devuelve el índice del primer elemento del array
//que satisface la condicion proporcionada en forma de funcion
//Si no encuentra ningun elemento que cumpla la condicion, devuelve -1
const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = randomNumbers.findIndex((number) => number > 10);
console.log(index);