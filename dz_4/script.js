
let mathAction = getAction();
let checkArg = checkArgument();
let getArg =getArgument(checkArg);
calculat(mathAction);

function getAction() {
    let a;
    do {
        a = prompt('Введите математическое действие');
    }
    while (a != '+' && a != '-' && a != '*' && a != '/');
    return a;
}

function checkArgument() {
    let b;
    do {
        b = +prompt('Сколько аргументов вы хотите ввести?');
    }
    while (b !== Number(b) || b < 2);
    return b;
}

function getArgument(c) {
    let num = [];
    for (let i = 0; i < c; i++) {

        num[i] =+prompt('Введите аргумент');
    }
    return num;
}

function action(a){

    let sum = getArg[0];
     for (let i = 1; i < checkArg; i++){
       sum = a(sum, getArg[i]);
    }

    return sum;
}

function calculat(mAct) {
    let act;
    switch (mAct) {
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
