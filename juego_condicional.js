const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 10 + 1);

rl.question("Adivina el número secreto entre 1 y 10: ", (respuesta) => {
    const numeroJugador = parseInt(respuesta);

    console.log(`Este es el número con el que juegas: ${numeroJugador}`);

    if (isNaN(numeroJugador)) {
        console.log("Por favor, ingresa un número válido.");
    } else if (numeroJugador === numeroSecreto) {
        console.log("¡Felicidades, adivinaste el número secreto!");
    } else if (numeroJugador < numeroSecreto) {
        console.log("El número es demasiado bajo, intenta de nuevo.");
    } else {
        console.log("El número es demasiado alto, intenta de nuevo.");
    }

    rl.close();
});
