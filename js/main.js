$(document).ready(function(){
    $('.header').height($(window).height());
    
   })




   
/
// Select the New Task Form
const newTaskForm = document.querySelector('#taskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newNameInput = document.querySelector('#name');
    const newDescriptionInput = document.querySelector('#description');
    const newAssignToInput = document.querySelector('#assignTo');
    const newDueDateInput = document.querySelector('#dueDate');
    const newStatusInput = document.querySelector('#status');
    
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const taskName = newNameInput.value;
    const taskDescription = newDescriptionInput.value;
    const taskAssignTo = newAssignToInput.value;
    const taskDueDate = newDueDateInput.value;
    const taskStatus = newStatusInput.value;
    if(!validFormFieldInput(taskName)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}
