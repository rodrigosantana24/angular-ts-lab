// Criando uma função
function minhaFuncao() {
    console.log("Testando minha funçao");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function() {
    console.log("Minha função dentro de uma variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Teste");

// Função com return
const a = 10, b = 20;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);

// Escopo da função
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é ${y}`)
}

testandoEscopo();
console.log(`Y fora da função é ${y}`)

// Escopo aninhado
let m = 10;

function escopoAninhado() {
    let m = 20;

    if(true) {
        let m = 30;

        if(true) {
            let m = 40;
            console.log(m);
        }

        console.log(m);
    }
    console.log(m);
}

escopoAninhado();
console.log(m);

// Arrowfunction
const testeArrow = () => {
    console.log("Esta é uma arrow function");
}

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par");
        return

    } else {
        console.log("Impar")
    }
}

parOuImpar(14);

// Mais sobre Arrow Functions
const raizQuadrada = (x) => {
    return x*x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x*x;
console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Olá, mundo!");
helloWorld();

// Parametro opcional
const multiplication = function(m, n) {
    if(n === undefined) {
        return m*2;
    } else {
        return m*n;
    }
}
console.log(multiplication(2, 5));

const greeting = (name) => {
    
    if(!name) {
        console.log("Olá!");
    } else {
        console.log(`Olá ${name}!`);
    }
}

greeting();
greeting("Santana");

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
}

console.log(customGreeting("Rodrigo"));
console.log(customGreeting("José", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    for(let i=0; i<repeat; i++) {
        console.log(`${text} ` + i);
    }
}

repeatText("Teste");

// Closure
function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt );
    }
    return display();
}

someFunction();

const multiplicationClosure = (n) => {
    return (m) => {
        return n*m;
    };
}

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);
console.log(c1(5));
console.log(c2(10));

// Recursão
const ateDez = (n, m) => {
    if(n<10) {
        console.log("A função parou de executar!");
    } else {
        const x = n - m;
        console.log(x);

        ateDez(x, m);
    }
}

ateDez(100, 7);

function fatorial(x) {
    if(x  === 0) {
        return 1;
    } else {
        return x * fatorial(x-1);
    }
}

console.log(fatorial(6));