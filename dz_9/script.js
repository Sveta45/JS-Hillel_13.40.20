const typeOfBox = document.getElementById('typeOfBox');
const colorBox = document.querySelector('.color');
const box = document.getElementById('box');

typeOfBox.addEventListener('change', boxSelection);
colorBox.addEventListener('change', onInputKeyDown);
document.addEventListener('keydown', movingBox);

function boxSelection(e) {
    switch (typeOfBox.value) {
        case 'square': box.className = 'box_square'; break;
        case 'rectangle': box.className = 'box_square box_rectangle'; break;
        case 'circle': box.className = 'box_square box_circle'; break;
    }
}

function onInputKeyDown() {
    box.style.backgroundColor = colorBox.value;
}

let left = 0;
let top1 = 0;

function movingBox(e) {
    switch (e.key) {
        case 'ArrowUp': box.style.top = top1 + 'px'; top1--; break;
        case 'ArrowRight': box.style.left = left + 'px'; left++; break;
        case 'ArrowDown': box.style.top = top1 + 'px'; top1++; break;
        case 'ArrowLeft': box.style.left = left + 'px'; left--; break;
    }

}





