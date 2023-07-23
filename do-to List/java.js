const taskInput = document.getElementById("task");
const add = document.getElementById("add");
const taskList = document.getElementById("List");

// Function to add new tasks to the list
function addTask() {
  if (taskInput.value === "") {
("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<span class="task">${taskInput.value}</span>
                  <button class="delete">Delete</button>`;
  List.appendChild(li);
  taskInput.value = "";

  // Add event listener to the delete button
  const deleteBtn = li.querySelector(".delete");
  deleteBtn.addEventListener("click", deleteTask);
}

// Function to delete a task from the list
function deleteTask(event) {
  const li = event.target.parentElement;
  List.removeChild(li);
}

// Add event listener to the Add button
add.addEventListener("click", addTask);