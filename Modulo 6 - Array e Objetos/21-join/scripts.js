
let palavras = ['Abacate', 'Maça', 'Abacaxi'];
let fraseMontada = palavras.join(' - ');

console.log(fraseMontada);


let frase = "Testando uma frase montada, enviando para array e depois voltando para string."

let arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

let novaFrase = arrayDaFrase.join("_")
console.log(novaFrase);