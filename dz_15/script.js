"use strict";

class Tabset{

    selectedIndex = 0;

    constructor(a){
        let box = Array.prototype.slice.call(a.children);

        let elemsBox = [];
    
        for (let index = 0; index < box.length; index++) {
            elemsBox[index] = box[index].children;
    
            elemsBox[index][0].addEventListener('click', (e) => this.select(index));
        }
    
        this.elemsBox = elemsBox;
        }
        select(index) {

            if (this.selectedIndex > -1) {
                this.elemsBox[this.selectedIndex][0].classList.remove('titleActiv');
                this.elemsBox[this.selectedIndex][1].classList.remove('openBody');
            }
        
            if (this.selectedIndex == index) {
                this.selectedIndex = -1;
                return;
            }
        
            this.selectedIndex = index;
            this.elemsBox[index][0].classList.add('titleActiv');
            this.elemsBox[index][1].classList.add('openBody');
        }
}

new Tabset(document.getElementById('container'));