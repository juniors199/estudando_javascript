let i = 0;

while(i <= 50){
    let validacao = i % 2;
    if(validacao == 0){
        console.log(`${i} é par`)
    } else{
        console.log(`${i} é impar`)
    }
    i++;
}


for(let j = 0; j <= 50; j++){
    if(j % 2 == 0){
        console.log(`O numero ${j} é par`)
    }else{
        console.log(`O numero ${j} é impar`)
    }
}