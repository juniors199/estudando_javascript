let n = 10;

const numero = function(){
    let n = 25;
    console.log(n);
}

console.log(n)
numero();

let x = 10;

if(true){
    let x = 20;
    console.log(x); //escopo do if
}

console.log(x); //escopo global 
