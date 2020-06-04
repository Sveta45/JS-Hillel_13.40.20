let NumOne = +prompt('Введите первое число');
let NumTwo = +prompt('Введите второе число');

function addition(value1, value2) {
    return value1 + value2;
}


function subtraction(value1, value2) {
    return value1 - value2;
}


function multiplication(value1, value2) {
    return value1 * value2;
}


function division(value1, value2) {
    return value1 / value2;
}
/* ************** */
/* Первый вариант */
/* ************** */

function allResult(value1, value2){
console.log('Результат: ' + value1 + '+' + value2 + '=' + addition(value1, value2));
console.log('Результат: ' + value1 + '-' + value2 + '=' + subtraction(value1, value2));
console.log('Результат: ' + value1 + '*' + value2 + '=' + multiplication(value1, value2));
console.log('Результат: ' + value1 + ':' + value2 + '=' + division(value1, value2));
}
allResult(NumOne,NumTwo);

/* ************** */
/* Второй вариант */
/* ************** */

// let _add, _sub, _mult, _div;

// function allMethot(value1, value2) {
//     _add = addition(value1, value2);
//     _sub = subtraction(value1, value2);
//     _mult = multiplication(value1, value2);
//     _div = division(value1, value2);
// }
// allMethot(NumOne, NumTwo);
 
// console.log('Результат: ' + NumOne + '+' + NumTwo + '=' + _add);
// console.log('Результат: ' + NumOne + '-' + NumTwo + '=' + _sub);
// console.log('Результат: ' + NumOne + '*' + NumTwo + '=' + _mult);
// console.log('Результат: ' + NumOne + ':' + NumTwo + '=' + _div);

/* ************** */
/* Третий вариант  */
/* ************** */

// let _add = addition(NumOne, NumTwo);
// let _sub = subtraction(NumOne, NumTwo);
// let _mult = multiplication(NumOne, NumTwo);
// let _div = division(NumOne, NumTwo);

// function allResults(value1, value2) {
//     let results = '';
//     results = results + 'Результат: ' + value1 + '+' + value2 + '= ' + _add + '\n';
//     results = results + 'Результат: ' + value1 + '-' + value2 + '= ' + _sub + '\n';
//     results = results + 'Результат: ' + value1 + '*' + value2 + '= ' + _mult + '\n';
//     results = results + 'Результат: ' + value1 + ':' + value2 + '= ' + _div + '\n';
//     return results;
// }
// alert(allResults(NumOne, NumTwo));