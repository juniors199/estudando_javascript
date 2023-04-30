let y = 5;

const multiplicar = function(n){

    let y = n * 2;
    console.log(y); //escopo dentro da função.

    if(y >= 10){
        let y = 55;
        console.log(y); //escopo do if dentro da função.
    }
}

multiplicar(6);

let a = 10;

function multi(x,y){
    let a = x * y;

    if(a > 10){
        let a = 0;
        a++;
        console.log(a);
    }
    console.log(a);
}
console.log(a);

multi(3,7);