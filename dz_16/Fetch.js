const toDoList = document.getElementById('list');
const listTemplate = document.getElementById('listTemplate').innerHTML;

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => {
    return res.json();
  }).then((date) => {
    createList(date);

  });

function createList(date) {
  let list;

  for (let i = 0; i < date.length; i++) {
    list = listTemplate.replace('{{value}}', date[i].title)
      .replace('{{id}}', date[i].id);

    if (date[i].completed == false) {
      list = list.replace('styleNotTaskDone', 'styleTaskDone');
    }

    addlist(list);
  }
}

function addlist(list) {

  toDoList.innerHTML += list;

}





