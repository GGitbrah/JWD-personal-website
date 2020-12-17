//Task 6 create a new function createTaskHtml
function createTaskHtml(name, description, assignTo,dueDate, status){
    const html = `<div class="card-columns">
    <div class="card">

      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">${assignTo}</p>
        <p class="card-text">${dueDate}</p>
        <span class="badge" style="background-color:#354f5e; color:white;"">IN PROGRESS</span>
        <a href="#" class="btn" style=background-color:#ef9c50;>Delete</a>
      </div>
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

            // display the tasks by creating a render method
      render(){
        const tasksHtmlList=[];

        // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this._tasks.length; i++) {
          // Get the current task in the loop
          const task = this._tasks[i];

          // Format the date
          const date = new Date(task.dueDate);
          const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

          // create a taskHtml variable to store the HTML of the current task by calling the createTaskHtml function and using the properties of the current task
          
            // Create the task html
          const taskHtml = createTaskHtml(task.name, task.description, task.assignTo, formattedDate, task.status);

          // Push it to the tasksHtmlList array
          tasksHtmlList.push(taskHtml);
          }
          // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
      };
} 

//view output of task 6 atep 1 in browser
// console.log(createTaskHtml('x'));