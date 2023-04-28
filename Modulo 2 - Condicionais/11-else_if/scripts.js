let a = 4;
let b = 3;

if(a + b == 3){
    console.log("O resultado é 3");
} else if( a == 4){
    console.log("O valor de a é 4");
} else if(b == 3){
    console.log("O valor de b é 3");
} else{
    console.log("Nenhuma das anteriores.");
}


// let nome = "Marcio";
// let idade = 45;

// if(nome != undefined && nome == "Joaquin"){
//     console.log("O nome esta definido");
// } else if(nome == "Marcio" && nome.length > 5 && idade == 50){
//     console.log("O nome é Marcio");
// } else{
//     console.log("Não é Marcio");
// }

let nome = "Marcio";
let idade = 32;

if(nome != undefined && nome == "Joaquin"){
    console.log("O nome esta definido");
} else if(nome == "Marcio" && idade == 22){
    console.log("É o Marcio");
} else{
    console.log(`Não é o Marcio, porque ele tem 22 anos.Esse tem ${idade}`);
}


if(1>2){
    console.log("teste")
}else if(1 == 1) {
    console.log("teste sem o else, quando é uma condição certa.")
}