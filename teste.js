


//Fácil 1- Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles 

//codigo aqui =

const readline = require("readline-sync");

// let numero1 = readline.questionInt("Digite o primeiro numero: ");
// let numero2 = readline.questionInt("Digite o segundo numero: ");

// if (numero1 > numero2) {
//     console.log(`O maior numero é: ${numero1}.`)
// } else {
//     console.log(`O maior numero é: ${numero2}.`)
// };

//Fácil 2- Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo  

//codigo aqui =

// let number = readline.questionInt("Digite um numero: ");

// if (number >= 0) {
//     console.log("Numero é positivo.")
// } else {
//     console.log("Numero é negativo.")
// };


//Fácil 3- Faça um programa que verifique (usando if e else) 
//se uma letra digitada é “F” ou “M”.
//Conforme a letra escrever: F – Feminino, M- Masculino, Sexo inválido.  

//codigo aqui = 

// let letra = readline.question("Digite um letra correspondente ao genero: ");
// if (letra === "F") {
//     console.log("F - Feminino")
// } else if (letra === "M") {
//     console.log("M - Masculino")
// } else {
//     console.log("Sexo Invalido")
// };

//Intermediário 6- Faça um programa que leia três números, 
//verifique (usando if e else), e mostre o maior deles.  

//codigo aqui =

let numero1 = readline.questionInt("Digite o primeiro numero: ");
let numero2 = readline.questionInt("Digite o segundo numero: ");
let numero3 = readline.questionInt("Digite o terceiro numero: ")
if (numero1 > numero2 && numero1 > numero2) {
    console.log(`O numero maior é: ${numero1}.`)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`O numero maior é: ${numero2}.`)
} else {
    console.log(`O numero maior é: ${numero3}.`)
}


