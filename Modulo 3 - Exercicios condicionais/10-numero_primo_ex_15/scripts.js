let numero = prompt("Numero:")
if(numero == 2 || numero == 3){
    console.log(`${numero} é primo.`)
}else if(numero % 2 != 0 && numero % 3 != 0  && numero % numero  == 0){
    console.log(`${numero} é primo.`)
}else{
    console.log(`${numero} não é primo.`)
}


// Solução pelo curso:

let num = 41;
let divisoes = 0;

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`O numero ${num} é primo`);
}else{
    console.log(`O numero ${num} não é primo`);
}