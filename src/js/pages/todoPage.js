import tagline from "../components/ui/tagline";
import logo from "../components/icons/logo";
import { tag } from "../utils/strings";
import todo from "../components/ui/todo";

const todoPage = function () {

    // Header
    const header = document.createElement('header');
    header.appendChild(logo("logo.jpg", "Task Manager Logo"))
    header.appendChild(tagline(tag));
    const h1 = document.createElement('h1');
    h1.textContent="Monthly Tasks";
    header.appendChild(h1);

    // Main
    const userData = require('~/src/js/data/todos.json');
    const main = document.createElement('main');
    const todosWrapper = document.createElement('div');
    todosWrapper.className = "todos-wrapper";
    main.appendChild(todosWrapper);

    userData.todos.forEach(element => {
      const completed = element.isComplete === "true"? true : false;
      const item = todo(element.id, element.title, element.category, element.startTime, element.endTime, element.startDate, element.endDate, completed);
        todosWrapper.appendChild(item);
    });

    const page = document.createElement('div');
    page.appendChild(header);
    page.appendChild(main)
   
    return page;
}

export default todoPage