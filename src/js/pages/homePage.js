import logo from "../components/icons/logo";
import header from "../components/ui/header";
import tagline from "../components/ui/tagline";
import { svg } from "../components/ui/link";
import { link } from "../components/ui/link";

const homePage = function(params) {
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('page-header');
    pageHeader.appendChild(header());
    pageHeader.appendChild(logo());
    pageHeader.appendChild(tagline('Best Manager for your daily todos'));

    const linkContainer = document.createElement('div');
    linkContainer.className ="link-container";
    // linkContainer.appendChild(svg());
    linkContainer.appendChild(link('btnAction', 'linkAction', '#'));

    pageHeader.appendChild(linkContainer);
    
    return pageHeader;
}

export default homePage;