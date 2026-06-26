const API = "http://localhost:5000/tasks";

async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task.name} 
      <button onclick="completeTask(${task.id})">✔</button>
      <button onclick="deleteTask(${task.id})">❌</button>
    `;

    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");

  await fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name: input.value })
  });

  input.value = "";
  loadTasks();
}

async function deleteTask(id) {
  await fetch(API + "/" + id, { method: "DELETE" });
  loadTasks();
}

async function completeTask(id) {
  await fetch(API + "/complete/" + id, { method: "PUT" });
  loadTasks();
}

loadTasks();