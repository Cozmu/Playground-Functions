// Desafio 1 ----------------------------------------------------------------------------------------------------------------------------
function compareTrue(macaco, banana) {
  if (macaco && banana === true) {
    return true;
  } else if (macaco && banana === false) {
    return false;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));

// Desafio 2 ----------------------------------------------------------------------------------------------------------------------------
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3 ----------------------------------------------------------------------------------------------------------------------------
function splitSentence(frase) {
  let array = frase.split(' ');

  return array;
}
console.log(splitSentence('Go Trybe'));
console.log(splitSentence('Vamo que Vamo'));
console.log(splitSentence('Foguete'));

// Desafio 4 ----------------------------------------------------------------------------------------------------------------------------
function concatName() {
  // seu código aqui
}

// Desafio 5 ----------------------------------------------------------------------------------------------------------------------------
function footballPoints() {
  // seu código aqui
}

// Desafio 6 ----------------------------------------------------------------------------------------------------------------------------
function highestCount() {
  // seu código aqui
}

// Desafio 7 ----------------------------------------------------------------------------------------------------------------------------
function catAndMouse() {
  // seu código aqui
}

// Desafio 8 ----------------------------------------------------------------------------------------------------------------------------
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9 ----------------------------------------------------------------------------------------------------------------------------
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10 ----------------------------------------------------------------------------------------------------------------------------
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
