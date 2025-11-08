// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers[2]);

const nomes: string[] = ["Ana", "Bia", "Carlos"];
nomes.push("Rodrigo");
console.log(nomes[3]);

// outra sintaxe array
const nums: Array<number> = [10, 20, 30];


let valores: Array<number> = [10, 20, 30];
let palavras: Array<string> = ["TypeScript", "Array"];


type Usuario = {
  nome: string;
  idade: number;
};

let usuarios: Usuario[] = [
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 25 },
];
