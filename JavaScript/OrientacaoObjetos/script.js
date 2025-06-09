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

// Classes
const cachorro = {
    raca: null,
    patas: 4
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog"
console.log(bulldog);
console.log(bulldog.patas);

// Função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})
    cachorro.nome = nome;
    cachorro.raca = raca;
    
    return cachorro;
}

const bob = criarCachorro("Bob", "Vira-lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

// Funções como CLasses
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// Métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuu!");
}

husky.uivar();