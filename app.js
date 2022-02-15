const inputBox = document.querySelector(".form-group input");
const addBtn = document.querySelector(".form-group button");
const todoList = document.querySelector(".todoList");


inputBox.onkeyup = () => {
    let userData = inputBox.value;
    userData.trim() != 0 ? addBtn.classList.add("active") : addBtn.classList.remove("active");
}

showTasks();
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");  
    getLocalStorage == null ? listArray = [] : listArray = JSON.parse(getLocalStorage);
    listArray.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArray));
    showTasks();
    addBtn.classList.remove("active");
}

function showTasks() {
    console.log("I m executing");
    let getLocalStorage = localStorage.getItem("New Todo");  
    getLocalStorage == null ? listArray = [] : listArray = JSON.parse(getLocalStorage);
    let newLiTag = "";
    listArray.forEach((element, index) => {
      newLiTag += `<li draggable=true>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = ""; 
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}