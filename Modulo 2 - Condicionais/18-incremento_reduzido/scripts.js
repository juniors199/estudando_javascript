for(let i = 10; i > 0; i -= 1){
    if(i % 2 == 0){
        console.log(`Caiu no continue ${i}`)
        continue;
    }

    console.log(i);
}

let numero = 5;

while(numero < 50){
    console.log(numero);
    numero += 10;
}

for(let i = 0; i< 10; i++){
    console.log("O i é" + i);
}

for(let i = 10; i> 0; i--){
    console.log("O i é" + i);
}