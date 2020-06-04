const SIZE_SMALL = { tugriks: 50, callories: 20, };
const SIZE_MEDIUM = { tugriks: 75, callories: 30, };
const SIZE_LARGE = { tugriks: 100, callories: 40, };

const TOPPING_CHEESE = { tugriks: 10, callories: 20, };
const TOPPING_SALAD = { tugriks: 20, callories: 5, };
const TOPPING_POTATOES = { tugriks: 15, callories: 10, };
const TOPPING_SEASONING = { tugriks: 15, callories: 0, };
const TOPPING_MAYNNAISE = { tugriks: 20, callories: 5, };


function Hamburger(typeHamb) {
    this.tugriks = typeHamb.tugriks;
    this.callories = typeHamb.callories;

}

Hamburger.prototype.getPrice = function () {
    return this.tugriks;

}

Hamburger.prototype.getCallories = function () {
    return this.callories;
}

Hamburger.prototype.addTopping = function (toping) {
    this.tugriks += toping.tugriks;
    this.callories += toping.callories;

}

const hamburger = new Hamburger(SIZE_LARGE);

hamburger.addTopping(TOPPING_MAYNNAISE);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());


