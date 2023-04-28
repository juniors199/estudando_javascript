let idade = 20;
let cnh = false;

if(idade >= 18 && cnh == true){
    console.log("Pode dirigir");
}else if(idade >= 18 && cnh == false){
    console.log("Ainda nao possui CNH");
}else if(idade < 18){
    console.log("Idade nao permitida para ter CNH");
}