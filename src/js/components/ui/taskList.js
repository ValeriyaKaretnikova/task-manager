import tagline from "../../components/ui/tagline";
import logo from "../../components/icons/logo";
import { tag } from "../../utils/strings";

const todosContainer = function () {

    //TodoList Section
    const section = document.createElement('section');
    section.id= 'todosList';

    // Header
    const header = document.createElement('header');
    header.appendChild(logo("logo.jpg", "Task Manager Logo"))
    header.appendChild(tagline(tag));
    const h1 = document.createElement('h1');
    h1.textContent = "Monthly Tasks";
    header.appendChild(h1);

    // TodoList
    const div = document.createElement('div');
    div.className = 'todos-wrapper';

    section.appendChild(header);
    section.appendChild(div);


    return section;

}

export default todosContainer;