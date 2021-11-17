import tagline from "../../components/ui/tagline";
import logo from "../../components/icons/logo";
import { tag } from "../../utils/strings";

const editHeader = function () {
    //Edit Section
    const div = document.createElement('div');
    div.id= 'editHeader';

    // Header
    const header = document.createElement('header');
    header.appendChild(logo("logo.jpg", "Task Manager Logo"))
    header.appendChild(tagline(tag));
    const h1 = document.createElement('h1');
    h1.textContent = "Edit Task";
    header.appendChild(h1);

    div.appendChild(header);
    return div;
}

export default editHeader;