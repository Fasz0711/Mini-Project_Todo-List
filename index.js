const todo_input=document.getElementById('todo-input');
const todoForm=document.getElementById('todo-form');
const todo_list=document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    agregar(todo_input.value);
    todo_input.value='';
});


function agregar(valor){
    const listItem= document.createElement('li');
    listItem.textContent=valor;
    // listItem.target.classList.add('list-group-item');

    todo_list.appendChild(listItem);
    addDeleteButton(listItem);
    
}

function addDeleteButton(listItem) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      listItem.remove();
    });
    listItem.appendChild(deleteButton);
    console.log(listItem);
  }


