// ============================================================
//   ATIVIDADE 07 – Estruturas de Controle (If/Else) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO X – Calculadora interativa
// ------------------------------------------------------------
// a) Peça ao usuário dois números usando questionFloat().
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
// c) Armazene os dois números, o número referente à escolha e o simbolo referente a escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
// d) Com base na escolha, calcule o resultado usando if/else if.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"

// → Seu código aqui:

var readline = require('readline-sync');

let calculo = {
    primeiroNumero: readline.questionFloat("Digite o primeiro numero: "),
    segundoNumero: readline.questionFloat("Digite o segundo numero: "),
    simboloDaOperacao: readline.questionInt("Digite um numero: 1-Soma | 2-Subtracao | 3-Multiplicacao | 4-Divisao: ")
}

let resultado;

if (calculo.simboloDaOperacao === 1) {
    calculo.simboloDaOperacao = "+"
    resultado = calculo.primeiroNumero + calculo.segundoNumero

} else if (calculo.simboloDaOperacao === 2) {
    calculo.simboloDaOperacao = "-"
    resultado = calculo.primeiroNumero - calculo.segundoNumero

} else if (calculo.simboloDaOperacao === 3) {
    calculo.simboloDaOperacao = "*"
    resultado = calculo.primeiroNumero * calculo.segundoNumero

} else if (calculo.simboloDaOperacao === 4) {

    if (calculo.segundoNumero === 0) {
        console.log("Erro: divisao por zero nao permitida")
    } else {
        calculo.simboloDaOperacao = "/"
        resultado = calculo.primeiroNumero / calculo.segundoNumero
    }

} else {
    console.log("Operacao invalida")
}

if (resultado !== undefined) {
    console.log(`${calculo.primeiroNumero} ${calculo.simboloDaOperacao} ${calculo.segundoNumero} = ${resultado}`);
}


// resultado = undefined
//       ↓
// usuario escolhe operação
//       ↓
// resultado recebe valor
//       ↓
// if (resultado !== undefined)
//       ↓
// mostra o cálculo