import tagline from "../components/ui/tagline";
import logo from "../components/icons/logo";
import { tag } from "../utils/strings";
import todo from "../components/ui/todo";

const todoPage = function () {

    // Header
    const header = document.createElement('header');

    header.appendChild(logo())
    header.appendChild(tagline(tag));

    // Main
    const userData = require('~/src/js/data/todos.json');
    console.log(userData.todos);    

    const main = document.createElement('main');
    const todosWrapper = document.createElement('div');
    todosWrapper.className = "todos-wrapper";
    main.appendChild(todosWrapper);

    userData.todos.forEach(element => {
        console.log(element);
      const item = todo(element.id, element.title, element.category, element.startTime, element.endTime, element.startDate, element.endDate);
        todosWrapper.appendChild(item);
    });

    const page = document.querySelector('#app').appendChild(header);

    page.appendChild(main);
   
    return page;


}

export default todoPage