function checarTamanhoTexto(texto){
    if(texto.length > 10){
        console.log("Texto muito grande.");
    }else{
        console.log("Texto valido");
    }
    console.log(texto.length)
}

checarTamanhoTexto("MarcioRogerioSpadari");

checarTamanhoTexto("Marcio");