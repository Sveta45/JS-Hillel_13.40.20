"use strict";


function Accordeon(arg) {
    let box = Array.prototype.slice.call(arg.children);

    let elemsBox = [];

    for (let index = 0; index < box.length; index++) {
        elemsBox[index] = box[index].children;

        elemsBox[index][0].addEventListener('click', (e) => this.select(index));
    }

    this.elemsBox = elemsBox;
    this.selectedIndex = -1;
}


Accordeon.prototype.select = function (index) {

    if (this.selectedIndex > -1)
        this.elemsBox[this.selectedIndex][1].classList.remove('openBody');

    if (this.selectedIndex == index) {
        this.selectedIndex = -1;
        return;
    }

    this.selectedIndex = index;
    this.elemsBox[index][1].classList.toggle('openBody');
}


new Accordeon(document.getElementById('list'));














