
let mathAction = prompt('Введите математическое действие');
let numOne;
let numTwo;

if (mathAction == 'sin' || mathAction == 'cos' || mathAction == 'tan') {
    numOne = +prompt('Введите первое число');
} else {
    numOne = +prompt('Введите первое число');
    numTwo = +prompt('Введите второе число');
}



switch (mathAction) {
    case '+': alert('Результат: ' + numOne + '+' + numTwo + '=' + addition(numOne, numTwo)); break;
    case '-': alert('Результат: ' + numOne + '-' + numTwo + '=' + subtraction(numOne, numTwo)); break;
    case '*': alert('Результат: ' + numOne + '*' + numTwo + '=' + multiplication(numOne, numTwo)); break;
    case '/': alert('Результат: ' + numOne + '/' + numTwo + '=' + division(numOne, numTwo)); break;
    case 'pow': alert('Результат: ' + numOne + ' в степени ' + numTwo + ' = ' + pow(numOne, numTwo)); break;
    case 'sin': alert('Результат: sin числа ' + numOne + '=' + sinus(numOne)); break;
    case 'cos': alert('Результат: cos числа ' + numOne + '=' + cosinus(numOne)); break;
    case 'tan': alert('Результат: tan числа ' + numOne + '=' + tangens(numOne)); break;
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

function pow(value1, value2) {
    return Math.pow(value1, value2);
}

function sinus(value1) {
    return Math.sin(value1);
}

function cosinus(value1) {
    return Math.cos(value1);
}

function tangens(value1) {
    return Math.tan(value1);
}


