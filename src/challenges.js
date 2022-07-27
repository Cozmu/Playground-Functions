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
function concatName(array) {
  let concatenacao = array[array.length - 1] + ', ' + array[0];
  return concatenacao;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5 ----------------------------------------------------------------------------------------------------------------------------
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties)
  return pontuacao;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6 XXXXXXXX---------------------------------------------------------------------------------------------------------------------
function highestCount(arrayMaior) {
  let maior = Math.max.apply(null, arrayMaior);

  return maior
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7 ----------------------------------------------------------------------------------------------------------------------------
function catAndMouse(mouse, cat1, cat2) {
   mouse = 0;
  if ((cat2 - mouse) < (cat1 - mouse)) {
    return 'cat2';
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else if ((cat1 - mouse) === (cat2 - mouse)){
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(10, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(4, 3, 5));

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
