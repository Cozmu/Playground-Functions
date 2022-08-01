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
  let concatenacao = array[array.length - 1] + ', ' + array[0];
  return concatenacao;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5 ----------------------------------------------------------------------------------------------------------------------------
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties)
  return pontuacao;
}
console.log(footballPoints(14, 8));

// Desafio 6 ----------------------------------------------------------------------------------------------------------------------------
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
    } else {
      palavras.push('bug!');
    }

  }
  return palavras;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9 ----------------------------------------------------------------------------------------------------------------------------
function encode(palavra) {
  let resultado = '';
  for (let index = 0; index < palavra.length; index += 1) {
    let igualA = palavra[index] === 'a';
    let igualE = palavra[index] === 'e';
    let igualI = palavra[index] === 'i';
    let igualO = palavra[index] === 'o';
    let igualU = palavra[index] === 'u';
    let muda = palavra[index];

    if (igualA) {
      resultado += muda.replace(/a/gi, '1');

    } else if (igualE) {
      resultado += muda.replace(/e/gi, '2');

    } else if (igualI) {
      resultado += muda.replace(/i/gi, '3');

    } else if (igualO) {
      resultado += muda.replace(/o/gi, '4');

    } else if (igualU) {
      resultado += muda.replace(/u/gi, '5');

    } else {
      resultado += palavra[index];
    }
  }
  return resultado;
}
console.log(encode('h3 th2r2!'));

function decode(palavra) {
  let resultado = '';
  for (let index = 0; index < palavra.length; index += 1) {
    let igualA = palavra[index] === '1';
    let igualE = palavra[index] === '2';
    let igualI = palavra[index] === '3';
    let igualO = palavra[index] === '4';
    let igualU = palavra[index] === '5';
    let muda = palavra[index];

    if (igualA) {
      resultado += muda.replace(/1/gi, 'a');

    } else if (igualE) {
      resultado += muda.replace(/2/gi, 'e');

    } else if (igualI) {
      resultado += muda.replace(/3/gi, 'i');

    } else if (igualO) {
      resultado += muda.replace(/4/gi, 'o');

    } else if (igualU) {
      resultado += muda.replace(/5/gi, 'u');

    } else {
      resultado += palavra[index];
    }
  }
  return resultado;
}
console.log(decode('g4 Tryb2!'));

// Desafio 10 ----------------------------------------------------------------------------------------------------------------------------
function techList(tec, pessoa) {
  let array = [];
  let erro = 'Vazio!';
  let alfabetica = tec.sort();

  for (let index = 0; index < alfabetica.length; index += 1) {
    let tecnologia = alfabetica[index];
    let t = {
      tech: tecnologia,
      name: pessoa
    }
    array.push(t);

  }

  if (tec.length === 0) {
    return erro;
  } else {
    return array;
  }

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
