function armazenarSoma(x){
    return y => x + y;
}

function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = armazenarSoma(3);
console.log(soma1(5));

let soma2 = lembrarSoma(5);
console.log(soma2(10));

function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(0);

meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();