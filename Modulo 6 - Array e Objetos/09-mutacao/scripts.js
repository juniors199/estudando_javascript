let objetoA = {
    pontos: 10,
};

objetoB = objetoA;

let objetoC = {
    pontos: 10,
};

console.log(objetoA == objetoB); // true
console.log(objetoA == objetoC); // false


let pessoa = {
    nome: "Marcio",
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "maercio",
}
console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "Marcelo";

console.log(pessoa2.nome)