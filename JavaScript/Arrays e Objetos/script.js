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

// Objetos
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

