import todo from "../components/ui/todo";

const createToDoList = function(data){

    const main = document.createElement('main');
    const todosWrapper = document.createElement('div');
    todosWrapper.className = "todos-wrapper";
    
    data.todos.forEach(element => {
        const completed = element.isComplete === "true"? true : false;
        const item = todo(element.id, element.title, element.category, element.startTime, element.endTime, element.startDate, element.endDate, completed);
        todosWrapper.appendChild(item);
    });
    
    main.appendChild(todosWrapper);
   
    if (document.querySelector('.todoPage')){
        document.querySelector('.todoPage').appendChild(main);
    }
}

export default createToDoList;