
  const newInstance = new TaskManager(0);
  newInstance.load();
  newInstance.render();
      
  
  // Select the New Task Form
  const newTaskForm = document.querySelector('#taskForm');
  
  // Add an 'onsubmit' event listener that handles all input from the form and produces an error message
  newTaskForm.addEventListener('submit', (event) => {
      // Prevent default action i.e. do not refresh screen
      event.preventDefault();
  
      // Select the inputs from the name attribute
      const newAssignToInput = document.querySelector('#assignTo');
      const newNameInput = document.querySelector('#name');
      const newDescriptionInput = document.querySelector('#description');
      const newDueDateInput = document.querySelector('#dueDate');
      const newStatusInput = document.querySelector('#status');
      //const errorMessage = document.querySelector('#errorMessage');

  
      
  
  
  
      // Get the values of the inputs
      const taskAssignTo = newAssignToInput.value;
      const taskName = newNameInput.value;
      const taskDescription = newDescriptionInput.value;
      const taskDueDate = newDueDateInput.value;
      const taskStatus = newStatusInput.value;
      // console.log(taskAssignTo);
  
      //Validate the input values
      var errorMessage ='';

        if (taskAssignTo === "" || taskAssignTo === undefined || taskAssignTo === null) {
          errorMessage += "Invalid name input";
          //errorMessage.style.display = "block";
          console.log("invalid");
  
      } else {
  
          console.log("valid");
      }

      if (taskName === "" || taskName === undefined || taskName === null) {
          errorMessage += " Invalid task name input";
          //errorMessage.style.display = "block";
          console.log("invalid");
      } else {
  
          console.log("valid");
      }
  
      if (taskDescription === "" || taskDescription === undefined || taskDescription === null) {
          errorMessage += "  Invalid description of task input";
          //errorMessage.style.display = "block"
          console.log("invalid");
      } else {
  
          console.log("valid");
      }
    
      if (taskDueDate === "" || taskDueDate === undefined || taskDueDate === null) {
          errorMessage += " Invalid date input";
          //errorMessage.style.display = "block";
          console.log("invalid");
      } else {
  
          console.log("valid");
      }
  
      if (taskStatus === "" || taskStatus === undefined || taskStatus === null) {
          errorMessage += " Please select status";
          //errorMessage.style.display = "block";
          console.log("invalid");
      } else {
  
          console.log("valid");
      }
                
        console.log(errorMessage)

         alert(errorMessage);

  /*so you'll need to change errorMessage.innerhtml into a variable that will store the string :slightly_smiling_face: so you should define an empty string BEFORE any validations called var alertMessage (eg. underneath where you have all your queryselectors), and then you can use this code:
alertMessage += "Please select status" for each validation 'if' statement, and then in your alert, you would pass in that variable as such : alert(alertMessage);
This is because, errorMessage is referring to an element - you can't alert a user of a html element. It has to be a string :slightly_smiling_face:*/

      //sprint 2
  //initialise new instance of taskmanager
      
      // check on tasks being added???????
      console.log(newInstance._tasks);
      
  // Add the task to the task manager
    newInstance.addTask(taskAssignTo, taskName, taskDescription, taskDueDate, taskStatus);
      newInstance.storetodoListinLocalStorage()
      // Render the tasks
      newInstance.render()
  
      newAssignToInput.value = '';
      newNameInput.value = '';
      newDescriptionInput.value = '';
      newDueDateInput.value = '';
      
  
  });
  
  
  
  function validFormFieldInput(data){
      return data !== null && data !== '';
  }

  // Select the Tasks List
const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement;
 
        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);
 
        // Get the task from the TaskManager using the taskId
        const task = newInstance.getTaskById(taskId);
         /* console.log(parentTask)
         console.log(parentTask.dataset.taskId)
        console.log(taskId)
        console.log(task) */
        
        // Update the task status to 'DONE'
        task.status = 'DONE';
 
        //save the tasks to localStorage
        newInstance.storetodoListinLocalStorage();
 
        // Render the tasks
        newInstance.render();
    }
 });
 //========DELETE FUNCTION=========================//

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
    console.log("button was clicked")
   // Check if a "Mark As Done" button was clicked
   if (event.target.classList.contains('delete-button')) {
       console.log("if statement Done button")
       // Get the parent Task
       const parentTask = event.target.parentElement.parentElement.parentElement;

       // Get the taskId of the parent Task.
       const taskId = Number(parentTask.dataset.taskId);
        console.log("taskid is" + taskId)
       // Get the task from the TaskManager using the taskId
       

        newInstance.deleteTask(taskId)

       //save the tasks to localStorage
       newInstance.storetodoListinLocalStorage();

       // Render the tasks
       newInstance.render();
   }
});
