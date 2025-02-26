/*
CLOSURE: funcion que tiene acceso a variables de un ambito externo,
incluse despues de que esa funcion hay aterminado de ejecutarse.

Ambito lexico: cada vez que se declara un funcion, crea su propio
ambito lexico, y puede acceder a las variables
dentro de este ambito y a las variables em ambitos superiores.
*/

function outerFunction() {
  let outerVariable = 'I am the outer variable';

  //la siguiente funcion tiene acceso a las variables de la funcion
  //outerFunction, eso indica de que es un closure
  function innterFunction() {
    console.log(outerVariable);
  }

  return innterFunction
}

const closureExample = outerFunction();
closureExample();


function createCounter() {
  let counter = 0;

  return function() {
    counter++;
    console.log(counter);
  }
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();

function outer(){
    let message="Hello"

    function inner(name){
        console.log(message+name)
    }
    return inner
}

const closureA=outer()
const closureB=outer()

closureA("Alice")
closureA("Bob")