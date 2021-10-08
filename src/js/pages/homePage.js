import logo from "../components/icons/logo";
import makeElement from "../utils/makeElement"
import header from "../components/ui/header";
import tagline from "../components/ui/tagline";
import { svg } from "../components/ui/button";
import { button } from "../components/ui/button";

const homePage = function(params) {
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('page-header');
    pageHeader.appendChild(makeElement(header()))
    pageHeader.appendChild(logo());
    pageHeader.appendChild(makeElement(tagline()));

    const buttonContainer = document.createElement('div');
    buttonContainer.className ="button-container";

    buttonContainer.appendChild(makeElement(svg()))
    buttonContainer.appendChild(button('gooey-button', 'btnAction'));

    
    pageHeader.appendChild(buttonContainer);
    
    
    return pageHeader;

}

export default homePage;