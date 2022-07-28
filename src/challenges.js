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
  let maior = arrayMaior[0];
  let resultado = 0;
  for (let index = 1; index < arrayMaior.length; index += 1) {
    if (arrayMaior[index] > maior) {
      maior = arrayMaior[index];
    }

  }
  for (let index = 0; index < arrayMaior.length; index += 1) {
    if (arrayMaior[index] === maior) {
      resultado += 1;
    }

  }
  return resultado;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));


// Desafio 7 ----------------------------------------------------------------------------------------------------------------------------
function catAndMouse(mouse, cat1, cat2) {
  let GatoUmRato = Math.abs(cat1 - mouse);
  let GatoDoisRato = Math.abs(cat2 - mouse);

  if (GatoDoisRato < GatoUmRato) {
    return 'cat2';
  } else if (GatoUmRato < GatoDoisRato) {
    return 'cat1';
  } else if (GatoUmRato === GatoDoisRato) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(10, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(4, 3, 5));

// Desafio 8 ----------------------------------------------------------------------------------------------------------------------------
function fizzBuzz(array) {
  let palavras = [];
  for (let index = 0; index < array.length; index += 1) {
    let Tres = array[index] % 3 === 0;
    let Cinco = array[index] % 5 === 0;
    let TresECinco = array[index] % 3 === 0 && array[index] % 5 === 0;

    if (TresECinco) {
      palavras.push('fizzBuzz');
    } else if (Tres) {
      palavras.push('fizz');
    } else if (Cinco) {
      palavras.push('buzz');
    } else{
      palavras.push('bug!');
    }

  }
  return palavras;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log(fizzBuzz([7, 9]))
console.log(fizzBuzz([9, 25]));

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
