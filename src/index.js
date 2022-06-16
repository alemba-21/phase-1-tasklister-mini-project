document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  let li = document.getElementById("tasks");

  li.addEventListener("click", (e) => {
    if (e.target.nodeName ==="Button")
  })
})

function deleteTask(e){
  e.target.nodeName.remove()
}