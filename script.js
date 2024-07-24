document.addEventListener("DOMContentLoaded", () => {
  const newTaskInput = document.getElementById("new-task");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const clearCompletedBtn = document.getElementById("clear-completed-btn");

  addTaskBtn.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      newTaskInput.value = "";
    }
  });

  newTaskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-task-btn")) {
      const taskItem = e.target.parentElement;
      taskItem.classList.toggle("completed");
    } else if (e.target.classList.contains("remove-task-btn")) {
      const taskItem = e.target.parentElement;
      taskList.removeChild(taskItem);
    }
  });

  clearCompletedBtn.addEventListener("click", () => {
    const completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach((task) => taskList.removeChild(task));
  });

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="complete-task-btn">✓</button>
          <button class="remove-task-btn">✗</button>
      `;
    taskList.appendChild(taskItem);
  }
});
