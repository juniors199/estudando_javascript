function validarTipo(entrada){
    if(typeof(entrada) == "string"){
        console.log("Esse dado é uma string");
    }else if(typeof(entrada) == "number"){
        console.log("Esse dado é um number");
    }else{
        console.log("Esse dado é um boolean");
    }
}


validarTipo(12);

validarTipo(true);

validarTipo("marcio");

