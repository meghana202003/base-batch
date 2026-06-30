const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {

    const text = taskInput.value.trim();

    if (!text) return;

    // Prevent duplicates
    if (tasks.some(task => task.text.toLowerCase() === text.toLowerCase())) {
        alert("Task already exists");
        return;
    }

    tasks.push({
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toLocaleString()
    });

    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");

        span.innerHTML = `
            <strong>${task.text}</strong><br>
            <small>${task.createdAt}</small>
        `;

        span.addEventListener("click", () => {
            toggleTask(task.id);
        });

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = createButton("Edit", () => editTask(task.id));

        const deleteBtn = createButton("Delete", () => deleteTask(task.id));

        actions.append(editBtn, deleteBtn);

        li.append(span, actions);

        taskList.appendChild(li);

    });
}

function toggleTask(id) {

    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    renderTasks();
}

function editTask(id) {

    const task = tasks.find(t => t.id === id);

    const updated = prompt("Edit Task", task.text);

    if (updated && updated.trim()) {

        task.text = updated.trim();

        saveTasks();
        renderTasks();
    }
}

function deleteTask(id) {

    if (!confirm("Delete this task?")) return;

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();
}

function createButton(text, handler) {

    const btn = document.createElement("button");

    btn.textContent = text;

    btn.addEventListener("click", handler);

    return btn;
}

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}