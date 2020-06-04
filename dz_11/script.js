const calc = createCalculator(0);

showResult();

function showResult() {
    console.log(calc.sum(10));
    console.log(calc.sub(5));
    console.log(calc.mult(2));
    console.log(calc.div(2));
    console.log(calc.set(0));
}

function createCalculator(b) {
    let a = b;
    return {
        sum: function (x) {
            return a += x;
        },
        sub: function (x) {
            return a -= x;
        },
        mult: function (x) {
            return a *= x
        },
        div: function (x) {
            return a /= x;
        },
        set: function (x) {
            return a = x;
        }
    }
}







