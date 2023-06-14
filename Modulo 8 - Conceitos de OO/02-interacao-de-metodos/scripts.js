let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("Marcio");
console.log(pessoa.getNome());


const cachorro = {
    raca: '',
    genero: '',
    uivar: function(){
        console.log("Auuuuuu");
    },
    rosnar: function(){
        console.log("Grrrr")
    },

    setRaca: function(novaRaca){
        this.raca = novaRaca;
    },

    setGenero: function(novoGenero){
        this.genero = novoGenero;
    },

    getRaca: function(){
        return this.raca;
    },

    getGenero: function(){
        return this.genero;
    }
};


console.log(cachorro.setRaca("Chiuaua"));

console.log(cachorro.getRaca());

console.log(cachorro.setGenero("Macho"));
console.log(cachorro.getGenero());
