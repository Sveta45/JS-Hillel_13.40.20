
let mathAction = prompt('Введите математическое действие');
let numOne = +prompt('Введите первое число');
let numTwo = +prompt('Введите второе число');

switch (mathAction) {
    case '+': alert('Результат: ' + numOne + '+' + numTwo + '=' + addition(numOne, numTwo)); break;
    case '-': alert('Результат: ' + numOne + '-' + numTwo + '=' + subtraction(numOne, numTwo)); break;
    case '*': alert('Результат: ' + numOne + '*' + numTwo + '=' + multiplication(numOne, numTwo)); break;
    case '/': alert('Результат: ' + numOne + '/' + numTwo + '=' + division(numOne, numTwo)); break;
    default: alert('Не правильно введено математическое действие'); break;
}

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






