let todos = [];

function addToDo() {
    todos.push({
        title: document.querySelector("input").value
    });
    render();
}

function deleteFirstToDo() {
    todos.splice(0, 1);
    render();
}

function deleteLastToDo() {
    todos.splice(todos.length-1, 1);
    render();
}

function deleteToDoAt(index) {
    todos.splice(index, 1);
    render();
}

function createTodoComponent(todo,index) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    div.classList.add("flex");
    button.setAttribute("onclick", "deleteToDoAt(" + index + ")");
    h1.innerHTML = todo.title;
    div.append(h1);
    div.append(button);
    return div;
}

function render() {
    document.querySelector(".todos").innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i],i);
    document.querySelector(".todos").appendChild(element);
    }
    document.getElementById("text-input").value = "";
}