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
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// Métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuu!");
}

husky.uivar();

// Classes ES6
class Gato {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

const maxon = new Gato("Maxon", "Laranja");
const eren = new Gato("Eren", "Branco");

console.log(maxon);
console.log(eren);

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhao possui ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const caminhao1 = new Caminhao(8, "Preto")
caminhao1.descreverCaminhao();

// Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const rodrigo = new Humano("Rodrigo", 23);
console.log(rodrigo);

Humano.prototype.idade = "Não definida"

// Symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol()
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);

// Getters e Setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, JavaScript e Js"
console.log(myPost);