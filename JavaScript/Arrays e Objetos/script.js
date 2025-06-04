// Arrays 
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista);

const lista_diversa = ["Rodrigo", true, 2, 2.10]
console.log(lista_diversa);

const lista2 = [1, 2, 3];
console.log(lista2.length);

const arr = ["a", "b", "c", "d"]

console.log(arr[2]);

const allNumbers = lista.concat(lista2);
console.log(allNumbers);

const text = "texto teste"
console.log(text.toUpperCase());
console.log(text.indexOf("x"));

// // Se aprofundando em Objetos

const pessoa = {
    nome: "Rodrigo",
    idade: 23,
    trabalho: "Programador FullStack",
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.trabalho);

const carro = {
    motor: 2.0,
    marca: "VW",
    modelo: "Tiguan",
    km: 20000,
};

console.log(carro);

carro.portas = 4;
console.log(carro);

delete carro.km;
console.log(carro);

const obj = {
    a: "teste",
    b: true
};

const obj2 = {
    c: []
};

Object.assign(obj, obj2);

console.log(Object.keys(carro));

const a = {
    name: "Rodrigo"
}

const b = a;

console.log(a);
console.log(b);
console.log(a === b);

a.age = 23;
console.log(b);

delete b.age;
console.log(a);
console.log(b);

// Loops em Arrays
const users = ["Rodrigo", "João", "Pedro", "Miguel"];

for(let i=0; i<users.length; i++) {
    console.log(`Listando os usuários: ${users[i]}`);
}

// Métodos PUSH e POP
const array = ["a", "b", "c"];
array.push("d");
console.log(array);

const itemRemovido = array.pop();
console.log(array);
console.log(itemRemovido);