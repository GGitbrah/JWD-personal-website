 //Task 6 create a new function createTaskHtml
 const createTaskHtml = (id, assignTo,name, description, dueDate, status) => `
 <li class="list-group-item" data-task-id=${id}>
 <div class="card">
   <div class="card-body">
     <h5 class="card-text">Name: ${assignTo}</h5>
     <p class="card-title">Area: ${name}</p>
     <p class="card-text">Duty description: ${description}</p>
     <p class="card-text">Date: ${dueDate}</p>
     <span class="badge">${status}</span>
   <button class="btn btn-outline-danger delete-button">Delete</button>
     <button class="btn btn-outline-success done-button ${status !== 'DONE' ? 'visible' : 'invisible'}">Mark As Done</button>
   </div>
 </div>
 </li>
`;

// Create a TaskManager class

class TaskManager {
constructor(currentId = 0) {
   this._tasks = [];
   this.currentId = currentId;
}


 addTask(assignTo, name, description, dueDate, status) {
       const task = {
           // Increment the currentId property
           id: this.currentId++,
           assignTo: assignTo,
           name: name,
           description: description,
           dueDate: dueDate,
           status: status
       }
   
   
       // Push the task to the tasks property
       this._tasks.push(task);
       } 

//  Create the deleteTask method
 deleteTask(taskId) {
   console.log("hello")
   // Create an empty array and store it in a new variable, newTasks
   const newTasks = [];

   // Loop over the tasks
   for (let i = 0; i < this._tasks.length; i++) {
       // Get the current task in the loop
       const task = this._tasks[i];

       // Check if the task id is not the task id passed in as a parameter
       if (task.id !== taskId) {
           // Push the task to the newTasks array
           newTasks.push(task);
       } 
   }
   this._tasks = newTasks;
 }

// Geting the Task by ID
       getTaskById(taskId) {
           // Create a variable to store the found task
           let foundTask;
   
           // Loop over the tasks and find the task with the id passed as a parameter
           for (let i = 0; i < this._tasks.length; i++) {
               // Get the current task in the loop
               const task = this._tasks[i];
   
               // Check if its the right task by comparing the task's id to the id passed as a parameter
               if (task.id === taskId) {
                   // Store the task in the foundTask variable
                   foundTask = task;
               }
           }
   
           // Return the found task
           return foundTask;
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
       console.log(task.id)
     const taskHtml = createTaskHtml(task.id, task.assignTo, task.name, task.description, formattedDate, task.status);

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



// get list from local storage

/*getList() {
// declare variable for List Array
let lists;
//get lists out of localStorage and parse into JS array
//If localStorage is empty, assign lists to empty array
if (localStorage.getItem('lists') === null) {
lists = []; //set to empty array if there is no lists
} else {
lists = JSON.parse(localStorage.getItem('lists'));
console.log(lists);
}
//Generate to-do list
let itemHTML = '';
//Generate todo list including HTML including data in localStorage
lists.map((newTask) => {
itemHTML += `
<li class="list-group-item">
${createTaskHtml.assignTo}, 
${createTaskHtml.name},
${createTaskHtml.description},
${createTaskHtml.dueDate},
${createTaskHtml.status},
</li>
`;
tasksList.innerHTML = itemHTML; 
console.log(itemHTML)
console.log(localStorage)
});
}*/

//store list
storetodoListinLocalStorage() {
const tasksJson = JSON.stringify(this._tasks)

// Get lists out of localStorage and parse into JS array
//If localStorage is empty, assign lists to empty array



//Put new array back into localStorage (parse into string first)
localStorage.setItem('tasks', tasksJson);
localStorage.setItem('currentId', String(this.currentId));
console.log('data added to local storage');
}

//Step 2. adding the load method to task manager

load() {
// Check if any tasks are saved in localStorage
if (localStorage.getItem('tasks')) {
   // Get the JSON string of tasks in localStorage
   const tasksJson = localStorage.getItem('tasks');

   // Convert it to an array and store it in our TaskManager
   this._tasks = JSON.parse(tasksJson);
}

// Check if the currentId is saved in localStorage
if (localStorage.getItem('currentId')) {
   // Get the currentId string in localStorage
   const currentId = localStorage.getItem('currentId');

   // Convert the currentId to a number and store it in our TaskManager
   this.currentId = Number(currentId);
   console.log(this.currentId);
 }
}

}
//==========Turn Off when using browser, On when testing==========//

// module.exports = TaskManager;