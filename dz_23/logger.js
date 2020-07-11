
let arg = 0;
module.exports = {
    add: (x) => (arg += x),
    sub: (x) => (arg -= x),
    mult: (x) => (arg *= x),
    div: (x) => (arg /= x),
    set: (x) => (arg = x)

}