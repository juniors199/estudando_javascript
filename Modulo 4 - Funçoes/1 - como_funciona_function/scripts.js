function escreverNoConsole(){
    console.log("Escrevendo no console!");
}

escreverNoConsole();

const textoNoConsole = function(){
    console.log("Texto no console!");
}

textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto);
}

textoPorParametro("Testando por parametro!");


function imprimirNoConsole(){
    console.log("Olá Mundo!");
}

imprimirNoConsole();


function imprimirUmNumero(num){
    console.log("O numero é " + num);
}

imprimirUmNumero(456234);
imprimirUmNumero(3453);
imprimirUmNumero(25464);
imprimirUmNumero(244);
imprimirUmNumero(23);

const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();