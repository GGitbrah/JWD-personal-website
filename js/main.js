$(document).ready(function(){
    $('.header').height($(window).height());
    
   })




   // Select the New Form
const newForm = document.querySelector('#newForm');

// Add an 'onsubmit' event listener
newForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newNameInput = document.querySelector('#newNameInput');  //name assign to newTaskNameInput
    const newSelectArea = document.querySelector('#newSelectArea'); //1st pull down menu
    const newDescription = document.querySelector('#newDescription');  //textarea newTaskDescription
    const newDueDate = document.querySelector('#newDueDate'); // Due Date feature
    const newStatus = document.querySelector('#newStatus'); // status on work
    const alertMessage = document.querySelector('#alertMessage');
    
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newNameInput.value;
    const select = newSelectArea.value;
    const description = newDescription.value;
    const status = newStatus.value;
    const dueDate = newDueDate.value;
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

});

function validFormFieldInput(data){
    return data !== null && data !== '';