import logo from "../components/icons/logo";
import header from "../components/ui/header";
import tagline from "../components/ui/tagline";
import link from "../components/ui/link";
import { tag } from "../utils/strings";

const homePage = function(params) {
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('page-header');
    pageHeader.appendChild(header());
    pageHeader.appendChild(logo());
    pageHeader.appendChild(tagline(tag));

    const linkContainer = document.createElement('div');
    linkContainer.className ="link-container";
    linkContainer.appendChild(link('btnAction', 'linkAction', 'todo'));

    pageHeader.appendChild(linkContainer);
    
    return pageHeader;
}

export default homePage;