//funcion tradicional
function almuerzo(proteina, verdura){
    return `${proteina} con ${verdura}`;
}
almuerzo('pollo','ensalada');

const greeting = function(name){
    return `Hola ${name}`;
}


//arrow function - explicit return
const  almuerzo = (proteina, verdura)=>{
    return `${proteina} con ${verdura}`;
}
almuerzo('pollo','ensalada');


const newGreeting = (name)=>{
    return `Hola ${name}`;
}

//arrow function - implicit return
const newGreetingImplicit = name => `Hola ${name}`;
const newGreetingImplicitTwoParameter = (name, lastName) => `Hola, soy ${name} ${lastName}`;
//la relacion con el contexto de ejecucion o con el this


