let carros = ['BMW', 'Audi', 'VW', 'Fiat']

let removerPrimeiroCarro = carros.shift();
console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Volvo');
console.log(carros[0]);