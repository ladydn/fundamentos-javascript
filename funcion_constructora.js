//una funcion constriuctora es una funcion que nos va a permitir generar objetos
//de una forma mas sencilla

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//instancias de personas
const persona1 = new Persona('Juan', 'Perez', 30);
console.log(persona1);

const persona2 = new Persona('Juan', 'Perez', 30);
console.log(persona2);

//agregar una nueva propiedad usando prototype
// propiedad se agrega al prototipo de la funcion constructora
Persona.prototype.telefono = '123-456-789';
persona1.nacionalidad = 'Colombiana';

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar();
persona2.saludar();