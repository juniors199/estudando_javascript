// Retorna um array a partir de outro array, o array é determinado por parametros de indice q são do inicio e do fim.

// pode retirar uma fraçao de itens do meio do array

let numeros = [0,1,2,3,4,5,6,7,8,9,10];

console.log(numeros.slice(2,4)); // ele pega o indice inicial até o indice (final -1)
console.log(numeros.slice(4,5));
console.log(numeros.slice(4,6));


console.log(numeros.slice(3));
console.log(numeros.slice(-2));// É possivel utilizar numeros negativos para buscar ao contrario do array, a partir do fim.
console.log(numeros.slice(3,-4)); // ou utilizar como parametro para subtratir até onde quer o resultado.