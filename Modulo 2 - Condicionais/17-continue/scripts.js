for(let i = 10; i > 0; i -= 1){
    if(i % 2 == 0){
        console.log(`Caiu no continue ${i}`)
        continue;
    }

    console.log(i);
}