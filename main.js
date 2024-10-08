//main.js
document.addEventListener('DOMContentLoaded',
function() {
    const todoList=
document.getElementById('todoList');
loadToDos();
function saveToDoLocalStorage(todoText){
    let todos=
JSON.parse(localStorage.getItem('todos'))||[];
    todos.push(todoText);
    localStorage.setItem('todos',
JSON.stringify(todos));
function loadToDos(){
    let todos=
JSON.parse(localStorage.getItem('todos'))||[];
    todos.forEach(function(todo){
    addToDoToList(todo);
});
}
window.addToDo=function(){
const todoInput=
document.getElementById('todoInput');
if(todoText!==""){
    addToDoToList(todoText);
    saveToDoLocalStorage(todoText);
    todoInput.value='';
} else{
    alert("ToDoを入力してください");
}
};
function addToDoToList(todoText){
    const li=document.createElement('li');
    li.textContent=todoText;
    todoList.appendChild(li);
}
});
