// Todo App Version 10






var newTask = document.createElement("li");
var taskHolder = document.getElementById("task-ul");

newTask.innerText = "leones";
taskHolder.insertBefore(newTask, taskHolder.childNodes[0]);



// console.clear();
// if(this.list.length === 0){
//     console.log("The To-Do lIst is empty");
// }else{
//     console.log("My Tod List: ");
//     for(var x = 0; x < this.list.length; x++){
//         var mark = (this.list[x].completed === true) ? "(x) " : "( ) ";
//         console.log(mark + this.list[x].task);
//     }
// }
