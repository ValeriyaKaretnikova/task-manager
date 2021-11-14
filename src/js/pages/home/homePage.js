import logo from "../../components/icons/logo";
import header from "../../components/ui/header";
import tagline from "../../components/ui/tagline";
import link from "../../components/ui/link";
import { tag } from "../../utils/strings";

const homePage = function(params) {
    const page = document.createElement('header');
    page.classList.add('page-header');
    page.appendChild(header());
    page.appendChild(logo("logo.jpg", "Task Manager Logo"));
    page.appendChild(tagline(tag));

    const linkContainer = document.createElement('div');
    linkContainer.className ="link-container";
    linkContainer.appendChild(link('linkAction', '/todo', '&gt;'));

    page.appendChild(linkContainer);
    
    return page;
}

export default homePage;