//Task 6 create a new function createTaskHtml
function createTaskHtml(name, description, assignTo,dueDate, status){
    const html = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${assignTo}</p>
      <p class="card-text">${dueDate}</p>
      <span class="badge" style="background-color:#354f5e; color:white;"">${status}</span>
      <a href="#" class="btn" style=background-color:#ef9c50;>Delete</a>
    </div>
  </div>`
  return html;
};

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
console.log(createTaskHtml('x'));