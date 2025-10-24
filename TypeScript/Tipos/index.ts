// number
let x: number = 10;
console.log(x);
console.log(typeof x);

//string
const firstName: string = "Rodrigo";
console.log(firstName.toLocaleUpperCase());
const lastName: string = " Santana";

let fullName = firstName + lastName;
console.log(fullName);
console.log(typeof fullName);

//boolean
let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;
console.log(a);
console.log(typeof a);

a = false;

// inferencia e annotation
let ann: string = "Teste"; // annotation
let inf = "Teste"; // inferencia

// inf = 1;
// ann = 1;

console.log("Testando...");

