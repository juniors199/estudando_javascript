const car = {
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
}

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson);

let pessoa = {
    "nome": "Marcio",
    "idade": 22,
    "profissao": "Programador",
    "hoobie": ["Leitura", "Estudar", "Programar"],
}

console.log(pessoa);

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);

// A partir do momento em que cria um string do json, não é possivel utilizar apenas uma propriedade.
// tem q voltar novamente para json para utilizar dessa forma.

console.log(pessoaJson.hoobie[0]);