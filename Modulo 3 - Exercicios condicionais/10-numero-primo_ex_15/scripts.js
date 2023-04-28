let numero = prompt("Numero:")
if(numero == 2 || numero == 3){
    console.log(`${numero} é primo.`)
}else if(numero % 2 != 0 && numero % 3 != 0  && numero % numero  == 0){
    console.log(`${numero} é primo.`)
}else{
    console.log(`${numero} não é primo.`)
}