// forEach - metodo para passar os valores do array e executar uma ação para cada valor ou passagem.

const nums = [1,2,3,4,5,6];

nums.forEach(num => {
    console.log(num);
})


//o parametro num, o propio javascript entende como uma variavel dentro do array, n precisando declarar ela.

let nomes = ["Matheus", "Marcio", "José", "Pedro", "Joao"];
// A variavel teste o javaScript atribui ao array automaticamente. Boas praticas utilizar um nome relacional.
nomes.forEach(teste =>{
    console.log(`O nome é ` + teste);
})

