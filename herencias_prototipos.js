//prototipos

//herencias
//podemos heredar los prototipos de un objeto a otro
class Animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;

    }
    sonar(){
        console.log('Hago guau guau');
    }

    ladrar(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1 = new Perro('Toby', 'Macho', 'Grande'),
    perro2 = new Perro('Max', 'Macho', 'Pequeño');
console.log(perro1);
console.log(perro2);

perro1.sonar();
console.log(perro1);

perro1.nuevoMetodo = function(){
    console.log('Soy un nuevo metodo');
}

//se le agrega un nuevo metodo al prototipo de la instancia perro1 OJO
perro1.prototype.nuevoMetodo = function(){
    console.log('Soy un nuevo metodo');
}

//la manera correcta es agregar un metodo nuevo a las instancias
//es agregar el metodo al prototipo a una clase o una funcion constructora
Perro.prototype.nuevoMetodo = function(){
    console.log('Soy un nuevo metodo');
}