//objetos: es una estructura de datos que puede contener propiedades y métodos(son funciones que nos ayudan a interactuar con el objeto)
//es la base para ayudar a generar un paradigma de programacion orientada a objetos
//que es abstraer cosas del mundo real y llevarlas a la programacion

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        ciudad: 'Bogota',
        zip: 1111,
        lat: 14.3232,
        lng: 34.9233
    },
    //los metodos son funciones que estan dentro de un objeto
    //que nos permiten generar iteraccion con el objeto
    saludar(){
        console.log(`Hola, me llamo ${persona.nombre} ${persona.apellido}`);
    }
}

const persona2 = {
    nombre: 'Melissa',
    apellido: 'Flores',
    edad: 24,
    direccion: {
        ciudad: 'Bogota',
        zip: 1111,
        lat: 14.3232,
        lng: 34.9233
    },
    saludar(){
        console.log(`Hola, me llamo ${persona2.nombre} ${persona2.apellido}`);
    }
};

console.log(persona2);
persona2.saludar();

persona2.telefono = '123-456-789';
console.log(persona2.telefono);

persona2.despedir = () => {
    console.log(`Adios, me llamo ${persona2.nombre} ${persona2.apellido}`);
}

persona2.despedir();

delete persona2.telefono;
delete persona2.despedir;
console.log(persona2);