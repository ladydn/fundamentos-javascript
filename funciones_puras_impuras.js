//Funciones puras
/*
caracteristicas
dada una misma entrada siempre va a tener la misma salida
no producen efectos secundarios(side effects)


. modificar variables aglobales
.modificar parametros
.solicitudes http
.imprimir mensajes en pantalla o consola
.Manipulacion de DOM
.Obtener la hora actual
*/


//estructura de una funcion pura
function suma(a,b){
    return a+b;
}

function square(x){
    return x*x;
}

function addTen(y){
    y+=10;
    return y;
}

const number=5
const finalResult=addTen(square(number));
console.log(finalResult);

//estructura de funcion impura

function sum(a,b){
    console.log('A: ',a);
    return a+b;
}


