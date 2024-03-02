const inputResultado = document.querySelector("#panel");
const listaDeTeclasNum = document.querySelectorAll(".btn__keyboard");

const somaTecla = document.querySelector("#soma");
const subTecla = document.querySelector("#subtracao");
const multTecla = document.querySelector("#multiplicacao");
const divTecla = document.querySelector("#divisao");
let equacao = "";

somaTecla.addEventListener("click", function () {
  inputResultado.value += "+";
});

subTecla.addEventListener("click", function () {
  inputResultado.value += "-";
});

multTecla.addEventListener("click", function () {
  inputResultado.value += "*";
});

divTecla.addEventListener("click", function () {
  inputResultado.value += "/";
});

for (let cont = 0; cont < listaDeTeclasNum.length; cont++) {
  const numbers = listaDeTeclasNum[cont];
  numbers.onclick = function () {
    inputResultado.value += numbers.textContent;
  };
}

let clean = document.querySelector("#clean");

clean.addEventListener("click", function () {
  inputResultado.value = "";
});

let result = document.querySelector("#result");

result.addEventListener("click", function () {
  equacao = inputResultado.value;
  console.log(equacao);

  let searchOperador = equacao.match(/[-+*/]/);

  if (searchOperador) {
    var operator = searchOperador[0];
    var separar = equacao.split(operator);
    var num1 = parseInt(separar[0]);
    var num2 = parseInt(separar[1]);

    if (operator === "/" && num2 === 0) {
      inputResultado.value = "Denominador não pode ser 0";
    } else {
      var resultado;
      switch (operator) {
        case "+":
          resultado = num1 + num2;
          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          resultado = num1 / num2;
          break;
        default:
          inputResultado.value = "Operador inválido";
          return;
      }
      inputResultado.value =
        num1 + " " + operator + " " + num2 + " = " + resultado;
    }
  }
});
