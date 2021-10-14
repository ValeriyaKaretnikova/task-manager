import tagline from "../components/ui/tagline";
import logo from "../components/icons/logo";
import { tag } from "../utils/strings";
import addToDo from "../components/ui/addtodo";
import buildUserDataList from "../utils/buildUserDataList";

const todoPage = function () {

    // Header
    const header = document.createElement('header');
    header.appendChild(logo("logo.jpg", "Task Manager Logo"))
    header.appendChild(tagline(tag));
    const h1 = document.createElement('h1');
    h1.textContent="Monthly Tasks";
    header.appendChild(h1);
      
      //Append header and main
      const page = document.createElement('div');
      page.className ='todoPage';

      page.appendChild(header);
      buildUserDataList();
      page.appendChild(addToDo());
      
     
    return page;
  }
  
export default todoPage