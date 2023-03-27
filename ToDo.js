// Get HTML elements
const taskInput = document.querySelector("#task");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");
const categorySelect = document.querySelector("#category");
const prioritySelect = document.querySelector("#priority");

// Add task to the list
function addTask(event) {
  // Prevent page reload
  event.preventDefault();

  // Get input values
  const taskName = taskInput.value;
  const category = categorySelect.value;
  const priority = prioritySelect.value;

  // Create task item
  const taskItem = document.createElement("li");

  // Create task name element
  const taskNameElem = document.createElement("span");
  taskNameElem.innerText = taskName;

  // Create category element
  const categoryElem = document.createElement("span");
  categoryElem.innerText = category;
  categoryElem.classList.add("category");

  // Create priority element
  const priorityElem = document.createElement("span");
  priorityElem.innerText = priority;
  priorityElem.classList.add("priority");

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Add event listener to delete button
  deleteBtn.addEventListener("click", deleteTask);

  // Append elements to task item
  taskItem.appendChild(taskNameElem);
  taskItem.appendChild(categoryElem);
  taskItem.appendChild(priorityElem);
  taskItem.appendChild(deleteBtn);

  // Append task item to task list
  taskList.appendChild(taskItem);

  // Clear input fields
  taskInput.value = "";
  categorySelect.value = "all";
  prioritySelect.value = "normal";
}

// Delete task from the list
function deleteTask(event) {
  // Get parent element of delete button (li element)
  const taskItem = event.target.parentElement;

  // Remove task item from task list
  taskList.removeChild(taskItem);
}

// Filter tasks by category
function filterTasksByCategory() {
  // Get selected category value
  const selectedCategory = categorySelect.value;

  // Get all task items
  const taskItems = taskList.querySelectorAll("li");

  // Loop through task items and show/hide based on category
  taskItems.forEach((taskItem) => {
    const categoryElem = taskItem.querySelector(".category");
    if (selectedCategory === "all" || categoryElem.innerText === selectedCategory) {
      taskItem.style.display = "flex";
    } else {
      taskItem.style.display = "none";
    }
  });
}

// Filter tasks by priority
function filterTasksByPriority() {
  // Get selected priority value
  const selectedPriority = prioritySelect.value;

  // Get all task items
  const taskItems = taskList.querySelectorAll("li");

  // Loop through task items and show/hide based on priority
  taskItems.forEach((taskItem) => {
    const priorityElem = taskItem.querySelector(".priority");
    if (selectedPriority === "normal" || priorityElem.innerText === selectedPriority) {
      taskItem.style.display = "flex";
    } else {
      taskItem.style.display = "none";
    }
  });
}

// Add event listeners
addBtn.addEventListener("click", addTask);
categorySelect.addEventListener("change", filterTasksByCategory);
prioritySelect.addEventListener("change", filterTasksByPriority);
