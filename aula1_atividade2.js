let primeiroNumero = 0;
let segundoNumero = 0;
let resultadoSoma = 0;

const mensagemSoma = "A soma dos números é: ";

primeiroNumero = prompt("Digite o primeiro número");
segundoNumero = prompt("Digite o segundo numero");

resultadoSoma = parseInt(primeiroNumero) + parseInt(segundoNumero);
alert(mensagemSoma + resultadoSoma);
console.log(resultadoSoma);
