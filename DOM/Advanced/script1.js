let currentToDo = 1;

function addToDo() {
    let text = document.querySelector("#text-input").value.trim();
    if (text == "") {
        alert('Enter some text!');
        return;
    }
    let ele = document.createElement("div");
    ele.setAttribute("class", "todo");
    ele.setAttribute("id", "todo-" + currentToDo);
    ele.classList.add("flex");
    ele.innerHTML = "<h4>" +`${currentToDo}. `+ text + "</h4><button type='button' onclick='deleteToDo("+currentToDo+")'>Delete</button>";
    document.querySelector(".todos").appendChild(ele);
    document.querySelector("#text-input").value = "";
    currentToDo++;
}

function deleteToDo(idx) {
    const ele = document.getElementById("todo-" + idx);
    ele.parentNode.removeChild(ele);
    currentToDo--;
}