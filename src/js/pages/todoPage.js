import tagline from "../components/ui/tagline";
import logo from "../components/icons/logo";
import { tag } from "../utils/strings";
import addToDo from "../components/ui/addtodo";
import buildUserDataList from "../components/ui/buildUserDataList";

const todoPage = function () {
   // Page container
    const page = document.createElement('div');
    page.className ='todoPage';

    // Header
    const header = document.createElement('header');
    header.appendChild(logo("logo.jpg", "Task Manager Logo"))
    header.appendChild(tagline(tag));
    const h1 = document.createElement('h1');
    h1.textContent="Monthly Tasks";
    header.appendChild(h1);
      
    // Append header to the page container
    page.appendChild(header);
    
    // Append floating action button to the page container
    page.appendChild(addToDo());
    
    // Build component with User Data - this is happining async
    buildUserDataList();

    return page;
  }
  
export default todoPage


