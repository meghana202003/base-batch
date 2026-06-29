const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        addTask();
    }
});

function addTask(){

    const text = taskInput.value.trim();

    if(text==="") return;

    tasks.push({
        text:text,
        completed:false
    });

    saveTasks();
    renderTasks();

    taskInput.value="";
}

function renderTasks(){

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        const li=document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        const span=document.createElement("span");
        span.textContent=task.text;

        span.addEventListener("click",()=>{
            tasks[index].completed=!tasks[index].completed;
            saveTasks();
            renderTasks();
        });

        const actions=document.createElement("div");
        actions.className="actions";

        const editBtn=document.createElement("button");
        editBtn.textContent="Edit";

        editBtn.onclick=()=>{

            const updated=prompt("Edit task",task.text);

            if(updated!==null && updated.trim()!==""){
                tasks[index].text=updated;
                saveTasks();
                renderTasks();
            }

        };

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete";

        deleteBtn.onclick=()=>{

            tasks.splice(index,1);
            saveTasks();
            renderTasks();

        };

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);

        taskList.appendChild(li);

    });

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}