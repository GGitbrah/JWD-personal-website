
   import {TaskManager} from './taskManager.js';
   const newInstance = new TaskManager(0);
   
       
       
       
   
   // Select the New Task Form
   const newTaskForm = document.querySelector('#taskForm');
   
   // Add an 'onsubmit' event listener that handles all input from the form and produces an error message
   newTaskForm.addEventListener('submit', (event) => {
       // Prevent default action i.e. do not refresh screen
       event.preventDefault();
   
       // Select the inputs from the name attribute
       const newNameInput = document.querySelector('#name');
       const newDescriptionInput = document.querySelector('#description');
       const newAssignToInput = document.querySelector('#assignTo');
       const newDueDateInput = document.querySelector('#dueDate');
       const newStatusInput = document.querySelector('#status');
       const errorMessage = document.querySelector('#errorMessage');
   
   
       function myFunction() {
           alert('#errorMessage');
       }
   
   
   
       // Get the values of the inputs
       const taskName = newNameInput.value;
       const taskDescription = newDescriptionInput.value;
       const taskAssignTo = newAssignToInput.value;
       const taskDueDate = newDueDateInput.value;
       const taskStatus = newStatusInput.value;
       // console.log(taskAssignTo);
   
   
       if (taskName === "" || taskName === undefined || taskName === null) {
           errorMessage.innerHTML += "Invalid task name input";
           errorMessage.style.display = "block";
           console.log("invalid");
       } else {
   
           console.log("valid");
       }
   
       if (taskDescription === "" || taskDescription === undefined || taskDescription === null) {
           errorMessage.innerHTML += "Invalid description of task input";
           errorMessage.style.display = "block"
           console.log("invalid");
       } else {
   
           console.log("valid");
       }
   
       if (taskAssignTo === "" || taskAssignTo === undefined || taskAssignTo === null) {
           errorMessage.innerHTML += "Invalid name input";
           errorMessage.style.display = "block";
           console.log("invalid");
   
       } else {
   
           console.log("valid");
       }
   
       if (taskDueDate === "" || taskDueDate === undefined || taskDueDate === null) {
           errorMessage.innerHTML += "Invalid date input";
           errorMessage.style.display = "block";
           console.log("invalid");
       } else {
   
           console.log("valid");
       }
   
       if (taskStatus === "" || taskStatus === undefined || taskStatus === null) {
           errorMessage.innerHTML += "Please select status";
           errorMessage.style.display = "block";
           console.log("invalid");
       } else {
   
           console.log("valid");
       }
   
       //sprint 2
   //initialise new instanace of taskmanager
       
       // check on tasks being added???????
       console.log(newInstance._tasks);
       
   // Add the task to the task manager
   newInstance.addTask(taskName, taskDescription, taskAssignTo, taskDueDate);
      
       // Render the tasks
       newInstance.render()
   
       newNameInput.value = '';
       newDescriptionInput.value = '';
       newAssignToInput.value = '';
       newDueDateInput.value = '';
       
   
   });
   
   
   
   function validFormFieldInput(data){
       return data !== null && data !== '';
   }