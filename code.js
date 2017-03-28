// Todo App Version 10.1
console.log("Todo App Version 10.1");
console.log("");

    // Ccreating the Object that will store "Data Bae" and "Functions"
var td_obj = {

        // Data Base, with all task and completion status
    list: [
        {task:"Morning Exersice", completed: true},
        {task:"Turn On Computer", completed: false}
    ],

        // Will display the Data Base on the Console
    displayTD: function(){

        var taskHolder = document.getElementById("task-div-m");
        document.getElementById("task-div-m").innerHTML = "";

            // Will display text: The todo list is empty if there are no elements in the List.
        if(this.list.length === 0){
            var newTask = document.createElement("div");
            newTask.innerText = "The To-Do lIst is empty";
            taskHolder.insertBefore(newTask, taskHolder.childNodes[0]);
        }

            // Will execute this commands if there is at least one element in the List.
        else{
            for(var x = 0; x < this.list.length; x++){

                var check = this.list[x].completed ;
                var loopTask = document.createElement("div");

                loopTask.className = "gral-div-task";
                loopTask.className+= check? " finished" : "";

                loopTask.appendChild(this.createRad(check, x));
                loopTask.appendChild(this.createP(this.list[x].task));
                loopTask.appendChild(this.createDelButton(x));

                taskHolder.insertBefore(loopTask, taskHolder.childNodes[0]);
            }
        }
    },



        // Will Add Task with default complition stautus of "false" to Data Base
    addTD: function(){
        var task2add = document.getElementById("inp1").value;
        this.list.push({task: task2add, completed: false});
        this.displayTD();
            // Cleaning the Input Box in HTHML file
        document.getElementById("inp1").value = "";
    },

    

        // Will change the Name of a task (no change to comp stauts)
    changeTD: function(){
        var x = document.getElementById("x").valueAsNumber;
        var y = document.getElementById("y").value;

        this.list[x].task = y;
        this.displayTD();
            // Clearing the Inputs in HTML
        document.getElementById("x").value = "";
        document.getElementById("y").value = "";
    },



        // Will delete: Element (task, completed) from Data Base
    deleteTD: function(x){
        console.log("Index to Delete: " + x);
        this.list.splice(x, 1);
        this.displayTD();
    },



        // Will change the current status of "completed" the the oposite: true or false
    taskComp: function(x){
        this.list[x].completed = !this.list[x].completed;
        this.displayTD();
    },



        // if one or more task are "falce" -> will change all to "true",   -and-   if all taks are "true" --> will change all to "false"
    chanAll: function(){
        var status = this.list.every(function(element){return element.completed === true;});
        if(status === false){for(var x = 0; x < this.list.length; x++){ this.list[x].completed = true;}}
        if(status === true ){for(var y = 0; y < this.list.length; y++){ this.list[y].completed = false;}}
        this.displayTD();
    },



        // Create Delete Buttons
    createDelButton: function(x){
        var delBu = document.createElement("button");
        delBu.innerHTML = "Delete";
        delBu.className = "gral-but";
        delBu.setAttribute('onClick', "td_obj.deleteTD(" + x + ")");
        delBu.id = x;
        return delBu;
    },



    createRad: function(check, x){
        var radBu = document.createElement("input");
        radBu.type = "checkbox";
        console.log("Check: " + check);
        radBu.checked = check;
        radBu.className = "gral-rad";
        radBu.setAttribute('onClick', "td_obj.taskComp(" + x + ")");
        return radBu;
    },



    createP: function(text){
        var par1 = document.createElement("p");
        par1.innerText = text;
        par1.className = "gral-para";
        return par1;
    }

};
