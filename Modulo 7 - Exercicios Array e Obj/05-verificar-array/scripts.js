let nomes = ["Joao", "Ketelyn", "Ricardo", "Marcio", "Joaquim"];

for(i =0; i <= nomes.length; i++){
    if(nomes[i] == "Marcio"){
        console.log("Existe esse nome aqui.");
    }
}


if(nomes.includes("Marcio")) {
    console.log("Existe esse nome aqui.");
}else{
    console.log("Não tem esse nome aqui.");
}