let buttonAddText = document.querySelector('#buttonAddText');
let list = document.querySelector('#list');
let userText = document.querySelector('#userText');


function onAddButtonClick(){
let li = document.createElement('li');
    li.textContent = userText.value;
    list.append(li);
    userText.value = '';
}
buttonAddText.addEventListener('click', onAddButtonClick);
