import Header from "./pageHeader";

const todosContainer = function () {
    //TodoList Section
    const section = document.createElement('section');
    section.id= 'todosList';
    //Header
    const header = Header("Monthly Tasks");
    // TodoList
    const div = document.createElement('div');
    div.className = 'todos-wrapper';

    section.appendChild(header);
    section.appendChild(div);
    
    return section;
}

export default todosContainer;