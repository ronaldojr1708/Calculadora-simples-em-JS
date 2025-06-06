const resultadoElemento = document.getElementById("resultado");

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
  resultadoElemento.innerHTML = "Por favor, digite números válidos.";
} else {
  let resultado = num1;

  resultado += num2;
  resultadoElemento.innerHTML += `Adição: ${num1} + ${num2} = ${resultado} <br>`;

  resultado = num1;
  resultado -= num2;
  resultadoElemento.innerHTML += `Subtração: ${num1} - ${num2} = ${resultado} <br>`;

  resultado = num1;
  resultado *= num2;
  resultadoElemento.innerHTML += `Multiplicação: ${num1} * ${num2} = ${resultado} <br>`;

  resultado = num1;
  resultado /= num2;
  resultadoElemento.innerHTML += `Divisão: ${num1} / ${num2} = ${resultado} <br>`;

  resultado = num1;
  resultado %= num2;
  resultadoElemento.innerHTML += `Resto da divisão: ${num1} % ${num2} = ${resultado} <br>`;
}
