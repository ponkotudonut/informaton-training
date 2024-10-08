//main.js
const todoList=
document.getElementById('todoList');
window.addTodo=function(){
    const todoInput=
document.getElementById('todoInput');
const todoText=todoInput.value.trim();
if(todoText!==""){
    addToDoToList(todoText);
    todoInput.value='';
} else{
    addEventListener("ToDoを入力してください");
}
};
function addToDoToList(todoText){
    const li=document.createElement('li');
    li.textContent=todoText;
    todoList.appendChild(li);
}

function addToDoToList(){
    document.querySelector('li').remove()
}