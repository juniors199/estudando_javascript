function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log("Seu nome é " + nome);
    }else {
        console.log("Seu nome é " + nome + "e voce tem " + idade + " anos");
    }
}

nomeComIdade("Joao");
nomeComIdade("Joao", 42);



function soma(a,b) {
    if(a === undefined || b === undefined){
        console.log("esta funcao precisa ter 2 argumentos.");
    } else{
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));