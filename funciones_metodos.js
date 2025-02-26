//pasar funciones como argumentos -> callback
//retornar funciones

/*
//asignar funciones a variables
const a = function(){}

//tener propiedades y metodos
function a(){}
const obj ={}
a.call(obj) //constexto de ejecucion

//anidar funciones -> Nested Functions
function a(){
    function b(){
        function c(){
            console.log('c');
        }
        console.log('b');
        c();
    }
    b();
}
a();
*/

//Es posible almacenar funciones en objetos
const rocket = {
    name: 'Falcon 1',
    launchMessage: function launchMesaaage(){
        console.log('3, 2, 1, lift off!');
    }
}
rocket.launchMessage();