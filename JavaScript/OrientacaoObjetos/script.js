// Métodos
const animal = {
    nome: "bob",
    latir: function() {
        console.log("Au Au");
    },
};

console.log(animal.nome);
animal.latir();

// Aprofundando em Métodos
const pessoa = {
    nome: "Rodrigo",

    getNome: function() {
        return this.nome;
    },

    setNome: function(nome) {
        this.nome = nome;
    },
};

console.log(pessoa.getNome());
pessoa.setNome("Santana");
console.log(pessoa.getNome());

