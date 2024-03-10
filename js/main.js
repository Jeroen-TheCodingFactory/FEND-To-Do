var taskInput = document.getElementById("js--input");
taskInput.onkeyup= function(event){
    if(event.key === "Enter"){
        var newTask = document.createElement("li");
        newTask.innerText = taskInput.value;
        newTask.classList = "toDo__task";
        document.getElementById("js--list").appendChild(newTask);
        taskInput.value = "";
        newTask.onclick = function(event){
            event.target.classList.add("toDo__task--done");
            toDone(event);
        }
    }
}
var tasks = document.getElementsByClassName("toDo__task");
for (var i =0; i < tasks.length; i++){
    tasks[i].onclick = function(event){
        event.target.classList.toggle("toDo__task--done");
        toDone(event);
    }
}

function toDone(event){
    setTimeout(function(){
        var doneTask = document.createElement("li");
        doneTask.classList = "toDo__task toDo__task--done";
        doneTask.innerText = event.target.innerText;
        document.getElementById("js--done").appendChild(doneTask);
        event.target.remove();
    },3000)
}