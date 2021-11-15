import tagline from "../../components/ui/tagline";
import logo from "../../components/icons/logo";
import { tag } from "../../utils/strings";

const deleteHeader = function () {
    //Delete Section
    const div = document.createElement('div');
    div.id= 'deleteHeader';

    // Header
    const header = document.createElement('header');
    header.appendChild(logo("logo.jpg", "Task Manager Logo"))
    header.appendChild(tagline(tag));
    const h1 = document.createElement('h1');
    h1.textContent = "Delete Task?";
    header.appendChild(h1);

    div.appendChild(header);
    return div;
}

export default deleteHeader;