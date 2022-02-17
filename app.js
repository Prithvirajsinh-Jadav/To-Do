// Getting elements form the document
const inputBox = document.getElementById("todo-id"),
      addBtn = document.getElementById("todo-btn"),
      todoList = document.getElementById("todo-list");


// Adding events to the inputBox
inputBox.onkeyup = () => {
    let userData = inputBox.value;
    userData.trim() != 0 ? addBtn.classList.add("active") : addBtn.classList.remove("active");
}

// Showing all the tasks from the array
showTasks();

// Adding task to listArray
addBtn.onclick = () => {
    let userData = inputBox.value;
    getLocalStorage();
    listArray.push(userData);
    setLocalStorage();
    showTasks();
    addBtn.classList.remove("active");
}


// function for showing the task
function showTasks() {
    getLocalStorage();
    let newLiTag = "";
    listArray.map((element, index) => {
            newLiTag += `<li draggable=true>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;            
    })
    todoList.innerHTML = newLiTag;
    inputBox.value = ""; 
}

// function to delete the task
function deleteTask(index){
    getLocalStorage();
    listArray.splice(index, 1);
    setLocalStorage();
    showTasks();
}

// getting data from the localStorage
function getLocalStorage(){
    let getLocalStorage = localStorage.getItem("New Todo");  
    getLocalStorage == null ? listArray = [] : listArray = JSON.parse(getLocalStorage);
}

// setting data to the localStorage
function setLocalStorage(){
    localStorage.setItem("New Todo", JSON.stringify(listArray));
}