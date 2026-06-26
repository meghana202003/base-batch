function addTask() {
    let input = document.getElementById("taskInput");
    let taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    // Task Text
    let span = document.createElement("span");
    span.textContent = taskValue;

    // Mark Complete
    span.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
let totalHours = 24;
let studiedHours = 0;

// Create Chart
let ctx = document.getElementById("studyChart").getContext("2d");

let chart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Studied", "Remaining"],
        datasets: [{
            data: [0, 24],
            backgroundColor: ["#36d1dc", "#ff7eb3"]
        }]
    }
});

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let hoursInput = document.getElementById("hoursInput");

    let task = taskInput.value.trim();
    let hours = parseInt(hoursInput.value);

    if (task === "" || isNaN(hours)) {
        alert("Enter task and hours!");
        return;
    }

    // Add task UI
    let li = document.createElement("li");
    li.textContent = task + " (" + hours + "h)";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        studiedHours -= hours;
        updateChart();
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    // Update hours
    studiedHours += hours;
    updateChart();

    taskInput.value = "";
    hoursInput.value = "";
}

function updateChart() {
    let remaining = totalHours - studiedHours;
    if (remaining < 0) remaining = 0;

    chart.data.datasets[0].data = [studiedHours, remaining];
    chart.update();
}