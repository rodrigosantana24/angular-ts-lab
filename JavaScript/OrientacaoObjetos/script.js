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

// Prototype
const text = "Sdlalkjdjlkas";
console.log(Object.getPrototypeOf(text));
const bool = true;
console.log(Object.getPrototypeOf(bool));

const myObject = {
    a: "b"
};

console.log(Object.getPrototypeOf(myObject));

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);