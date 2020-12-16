// Create a TaskManager class
export class TaskManager {
    constructor(currentId = 0) {
        this._tasks = [];
        this._currentId = currentId;
    }
    // get tasks() {
    //     return console.log(this._tasks);
    //   }

      addTask(name, description, assignTo, dueDate) {
            const task = {
                // Increment the currentId property
                id: this.currentId++,
                name: name,
                description: description,
                assignTo: assignTo,
                dueDate: dueDate,
                status: 'TODO'
            }
        
        

            // Push the task to the tasks property
            this._tasks.push(task);
            }       
} 
