let nome = prompt("Qual seu nome");

switch(nome){
    case "Joao":
        console.log("O seu nome é Joao");
        break;
    case "Marcos":
        console.log("O seu nome é Marcos");
        break;
    default:
        console.log(`O seu nome nao é Joao nem Marcos, o seu nome é ${nome}`);
        break;
}


let user = "Marcio"
switch(user){
    case "Ronaldo":
        console.log("Usuario 1");
        break;
    case "Linux":
        console.log("Usuario 2");
        break;
    case "Marcio":
        console.log("Usuario 3");
        break;
    default:
        console.log("Usuario nao encontrado.")
}