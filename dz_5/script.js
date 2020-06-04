
const mathAction = getMathAction();
const userArg = getArguments();
const userNum = parseArguments(userArg);
calculation(mathAction);

function getMathAction() {
    let userInput;
    do {
        userInput = prompt('Введите математическое действие');
    }
    while (checkMathAction(userInput));
    return userInput;
}

function checkMathAction(userAction) {
    return (
        userAction != '+' &&
        userAction != '-' &&
        userAction != '*' &&
        userAction != '/'
    );
}

function getArguments() {
    let userInput = [];
    do {
        userInput = prompt('Введите аргументы через пробел');
    }
    while (checkArguments(userInput));
    return userInput.split(' ');
}

function checkArguments(userInput) {
    return userInput === '' || userInput > 2;
}

function parseArguments(userNumbers) {
    let userInput = [];
    for (let i = 0, index = 0; i < userNumbers.length; i++) {
        let v = parseFloat(userNumbers[i]);

        if (Number.isNaN(v))
            continue;

        userInput[index++] = v;
    }
    return userInput;
}

function action(a) {
    let sum = userNum[0];
    for (let i = 1; i < userNum.length; i++) {
        sum = a(sum, userNum[i]);
    }
    return sum;
}

function calculation(mathAct) {
    let act;
    switch (mathAct) {
        case '+': act = addition; break;
        case '-': act = subtraction; break;
        case '*': act = multiplication; break;
        case '/': act = division; break;
    }
    alert('Результат : ' + action(act));
}

function addition(v1, v2) {
    return v1 + v2;
}

function subtraction(v1, v2) {
    return v1 - v2;
}

function multiplication(v1, v2) {
    return v1 * v2;
}

function division(v1, v2) {
    return v1 / v2;
}