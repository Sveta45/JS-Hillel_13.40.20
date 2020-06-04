const inputText = document.getElementById('text');
const toDoList = document.getElementById('list');
const listTemplateElm = document.getElementById('listTemplate').innerHTML;

document.getElementById('addText').addEventListener('click', checkTextUser);
toDoList.addEventListener('click',  onTextClick);

function checkTextUser(){
    if(inputText.value != ''){
        onAddButtonClick();
    }
}

function onAddButtonClick(){
toDoList.innerHTML+=listTemplateElm.replace('{{}}', inputText.value);
    inputText.value='';
}

function onTextClick(e){
    e.target.classList.toggle('styleTaskDone');
}


