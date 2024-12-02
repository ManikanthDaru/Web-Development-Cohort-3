/* const title = document.querySelector("h1");
console.log(title); // here title has <h1>Todo list</h1>
console.log(title.parentElement);
console.log(typeof title); // object
console.log(title.innerHTML);
console.log(title.innerText);
const one = document.querySelector("h4");
console.log(one.innerHTML);
const two = document.querySelectorAll('h4');
console.log(two[0],two[1]);
// console.log(document.querySelectorAll('h4')[0],document.querySelectorAll('h4')[1]);
// console.log(two.innerHTML);
console.log(document); //document object
const input = document.querySelector("input");
console.log(input.value); 
const addTodo = () => {
    const inputEle = document.querySelector("input");
    const text = inputEle.value;
    console.log(text);
};
const second = document.querySelector("#todo-2");
console.log(second);
const ele = document.getElementById("todo-2");
ele.innerHTML = "2. Eat in home only.";
console.log(ele);
let val = 1;
while (val<=10) {
    document.querySelector("#stopwatch").innerHTML = val;
    console.log(val);
    val++;
}
let ctr = 0;
function callback() {
    ctr++;
    // console.log(ctr);
    document.querySelector("#stopwatch").innerHTML = ctr;
}
callback();
callback();
callback();
callback();
callback();
setInterval(callback, 1000);
*/
function delTodo(idx) {
    const ele = document.getElementById("todo-" + idx);
    ele.parentNode.removeChild(ele);
    // document.querySelector(".container").removeChild(ele);
}
// let ele = document.createElement("div"); // this div element is outside the DOM
let currentIndex = 3;
function addTodo() {
    const text = document.querySelector("input").value; // this store the value of input box
    if (text === '') {
        alert('Please enter a todo item.');
        return;
    }
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "todo");
    parentDiv.setAttribute("id", "todo-" + currentIndex);
    parentDiv.innerHTML ="<h4>"+text+'</h4><button type="button" onclick="delTodo('+currentIndex+')">Delete</button></div>';
    document.getElementById("todos").appendChild(parentDiv);
    currentIndex += 1;
}