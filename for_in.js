//objeto enumerable
/*
Usado para iterar sobre propiedades enumerables de un objeto.
*/
const listaDeCompras = {manzana: 5, pera: 3, uva: 2, sandia: 1};

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

