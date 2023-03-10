// Desafio 1 ----------------------------------------------------------------------------------------------------------------------------
function compareTrue(macaco, banana) {
  if (macaco && banana === true) {
    return true;
  } if (macaco && banana === false) {
    return false;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2 ----------------------------------------------------------------------------------------------------------------------------
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}
console.log(calcArea(10, 50));

// Desafio 3 ----------------------------------------------------------------------------------------------------------------------------
function splitSentence(frase) {
  let array = frase.split(' ');

  return array;
}
console.log(splitSentence('Go Trybe'));

// Desafio 4 ----------------------------------------------------------------------------------------------------------------------------
function concatName(array) {
  let concatenacao = `${array[array.length - 1]}, ${array[0]}`;
  return concatenacao;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5 ----------------------------------------------------------------------------------------------------------------------------
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties);
  return pontuacao;
}
console.log(footballPoints(14, 8));

// Desafio 6 ----------------------------------------------------------------------------------------------------------------------------
function highestCount(arrayMaior) {
  let maior = arrayMaior[0];
  let resultado = 0;
  for (let index = 0; index < arrayMaior.length; index += 1) {
    if (arrayMaior[index] > maior) {
      maior = arrayMaior[index];
    }
    if (arrayMaior[index] === maior) {
      resultado += 1;
    }
  }
  return resultado;
}
console.log(highestCount([9, 1, 9, 3, 9, 5, 7]));

// Desafio 7 ----------------------------------------------------------------------------------------------------------------------------
function catAndMouse(mouse, cat1, cat2) {
  let GatoUmRato = Math.abs(cat1 - mouse);
  let GatoDoisRato = Math.abs(cat2 - mouse);

  if (GatoDoisRato < GatoUmRato) {
    return 'cat2';
  } if (GatoUmRato < GatoDoisRato) {
    return 'cat1';
  } if (GatoUmRato === GatoDoisRato) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(10, 3, 2));

// Desafio 8 ----------------------------------------------------------------------------------------------------------------------------
function fizzBuzz(array) {
  const palavras = [];
  array.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      palavras.push('fizzBuzz');
    } else if (element % 3 === 0) {
      palavras.push('fizz');
    } else if (element % 5 === 0) {
      palavras.push('buzz');
    } else {
      palavras.push('bug!');
    }
  });
  return palavras;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9 ----------------------------------------------------------------------------------------------------------------------------
const handleFunction = (caractere) => {
  if (caractere === 'u') {
    return '5';
  }
  if (caractere === '5') {
    return 'u';
  }
  return '';
};

function encode(palavra) {
  let resultado = '';
  const arr = palavra.split('');
  arr.forEach((e) => {
    if (e === 'a') {
      resultado += '1';
    } else if (e === 'e') {
      resultado += '2';
    } else if (e === 'i') {
      resultado += '3';
    } else if (e === 'o') {
      resultado += '4';
    } else {
      resultado += handleFunction(e);
      resultado += e;
    }
  });
  return resultado;
}
console.log(encode('h3 th2r2!'));

function decode(palavra) {
  let resultado = '';
  const arr = palavra.split('');
  arr.forEach((e) => {
    if (e === '1') {
      resultado += 'a';
    } else if (e === '2') {
      resultado += 'e';
    } else if (e === '3') {
      resultado += 'i';
    } else if (e === '4') {
      resultado += 'o';
    } else {
      resultado += handleFunction(e);
      resultado += e;
    }
  });
  return resultado;
}
console.log(decode('g4 Tryb2!'));

// Desafio 10 ----------------------------------------------------------------------------------------------------------------------------
function techList(tec, pessoa) {
  const alfabetica = tec.sort();
  if (tec.length === 0) {
    return 'Vazio!';
  }
  return alfabetica.map((e) => ({ tech: e, name: pessoa }));
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

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
