import todosContainer from "../../components/ui/taskList";
import todo from "../../components/ui/todo";
import addToDo from "../../components/ui/addtodo";
import { getStore } from "../../redux/store";
import { Router } from "../../routes/router";


const todoPage = function () {
   // Page container
    const page = document.createElement('div');
    page.className ='todoPage';
    const todosList = todosContainer();
    
    // Append floating action button to the page container
    page.appendChild(addToDo());
    page.querySelector('.addToDo').addEventListener('click', onAddTask);

    // Render Task List
    function render(){
      const todos = getStore();
      const div = todosList.querySelector('.todos-wrapper');
      const todoElements = Array.from(todos).map(element => todo(element));
      
      todoElements.forEach(element => {
        element.querySelector('.delete').addEventListener('click', onDeleteTask);
        element.querySelector('.edit').addEventListener('click', onEditTask);
        element.querySelector('.check').addEventListener('click', onCheckTask);
        div.append(element);
      });
      
      page.append(todosList);
    }
    render();

    return page;
  }
  
  export default todoPage;

  
  // Functions
  function onDeleteTask(e){
    const taskId = e.currentTarget.dataset.key;
    const task = getStore().filter((todo) => todo.id === taskId)
        cleanUp();
        Router('/delete', task[0]);
  }

  function onAddTask(e){
    console.log(e.currentTarget, "add")  
  }

  function onEditTask(e){
    const taskId = e.currentTarget.dataset.key;
    const task = getStore().filter((todo) => todo.id === taskId)
        cleanUp();
        Router('/edit', task[0]);
  }

  function onCheckTask(e){
    console.log(e.currentTarget, "check")  
  }
 
  // Remove event listeners
  function cleanUp( ){
    const tasks = document.querySelectorAll('.todo') 
    tasks.forEach((task)=>{
         task.removeEventListener('click', onDeleteTask)
    })
 }