class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
}

const persona1 = new Persona('Juan', 'Perez', 30);
console.log(persona1);