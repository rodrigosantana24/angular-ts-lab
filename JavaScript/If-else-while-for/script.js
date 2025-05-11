const age = prompt("Digite a sua idade: ");

if(age >= 18) {
    alert(`Você tem ${age} anos e é maior de idade!`);
}

console.log(Math.max(1, 2, 3, 10));
console.log(Math.floor(5.14)); // Arrendonda para baixo (saída 5)
console.log(Math.ceil(5.14)); // Arrendonda para cima (saída 6)

console.error("Erro!"); // Avisa algum erro em determinada linha de código
console.warn("Aviso!"); // Avisa alguma possível mudança em determinada linha de código

const loggedin = false;

if(loggedin) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!")
}

const n = 2;
if(n < 1) {
    console.log("teste 1");
} else if(n < 2) {
    console.log("teste 2");
} else if(n < 3) {
    console.log("teste 3");
}

let num1 = 0;
while(num1 < 5) {
    console.log(`Repetindo ${num1}`);
    num1 ++;
}

let num2 = 10;
do {
    console.log(num2);
    num2 --;
} while (num2 > 1);

for(let i=1; i<=10; i++) {
    console.log(`Repetindo... ${i}`);
}

for(let i=10; i>0; i--) {
    console.log(`Decrementando... ${i}`);
}

let dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  default:
    console.log("Dia inválido");
}

