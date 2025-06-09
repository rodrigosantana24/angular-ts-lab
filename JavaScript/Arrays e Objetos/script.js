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

for (let i = 0; i < users.length; i++) {
    console.log(`Listando os usuários: ${users[i]}`);
}

// Métodos PUSH e POP
const array = ["a", "b", "c"];
array.push("d");
console.log(array);

const itemRemovido = array.pop();
console.log(array);
console.log(itemRemovido);

// Métodos SHIFT e UNSHIFT
const arrayNumbers = [1, 2, 3];

arrayNumbers.shift();
console.log(arrayNumbers)

arrayNumbers.unshift(1, 1.5);
console.log(arrayNumbers);

// Métodos INDEXOF e LASTINDEXOF
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];
console.log(myElements.indexOf("Morango"));
console.log(myElements.indexOf("Abacate"));
console.log(myElements[2]);

// Métodos SLICE
let testeSlice = ["a", "b", "c", "d", "e", "f"];
let subArray = testeSlice.slice(2, 4);

console.log(testeSlice);
console.log(subArray);

subArray = testeSlice.slice(2);
console.log(subArray);

subArray = testeSlice.slice(10, 20);
console.log(subArray);

// Método ForEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é: ${numero}`);
})

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" }
]

posts.forEach((post)=>{
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
})

// Método INCLUDE
const brands = ["BMW", "VW", "Fiat"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("Mercedes"));

if(brands.includes("Fiat")) {
    console.log("Há carros da marca Fiat!");
} else {
  console.log("Não há carros da marca!");  
} 

// Método REVERSE 
const reverseTest = [1, 2, 3, 4, 5, 6];
reverseTest.reverse();
console.log(reverseTest);

// Métodos de STRINGS - TRIM
const trimTest = "  testando \n  ";
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// Métodos de STRINGS - Padstart
const testPadStart = "1";

const newNumber = testPadStart.padStart(4, "0");
console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, "0");
console.log(testPadEnd);

// Métodos de STRINGS - Split
const frase = "O rato roeu a roupa do rei de Roma"
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// Métodos de STRINGS - Join
const joinFrase = arrayDaFrase.join(" ");
console.log(joinFrase);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Preciso comprar: ${itensParaComprar.join(", ")}.`
console.log(fraseDeCompra);

// Métodos de STRINGS - Repeat
const palavra = "Teste "
console.log(palavra.repeat(5));

