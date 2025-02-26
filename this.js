//this hace referencia a un objeto y clase
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }
}

const persona = new Persona('Juan', 'De la torre');
console.log(`Persona: ${persona.nombre} ${persona.apellido}`);

persona.nuevoMetodo = function(){
    console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
}

console.log(persona.nuevoMetodo());