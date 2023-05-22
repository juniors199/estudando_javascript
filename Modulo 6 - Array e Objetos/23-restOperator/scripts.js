let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}


console.log('Função 1: ')
imprimirNumeros(num1,num2,num3);
console.log('Função 2: ')
imprimirNumeros(num4,num5,num6,num7);
console.log('Função com argumentos: ')
imprimirNumeros(2,534,345,3,78,5456,3,21);

// É possivel condensar varios argumentos em um array, a partir de varias entradas, formar um unico array.