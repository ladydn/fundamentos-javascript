/*
son fracciones de codigo, que permite reutilizar codigo

en una funcion se tiene la parabra clave, el nombre, parametros y curo para el retorno
*/
function suma(a,b){
    return a+b;
}

//llamado de la funcion
//y se tienen argumentos
///suma(1,2); //3


function calculatedDiscountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage)/100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculatedDiscountedPrice(originalPrice, discountPercentage);

console.log('Original Price: $'+originalPrice);
console.log('Discount Percentage: '+discountPercentage+'%');
console.log('Final Price: $'+finalPrice);