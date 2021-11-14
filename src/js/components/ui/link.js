import makeElement from "../../utils/makeElement";
import {Router} from "../../routes/router";

const onRequestPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const link = (className='', path="#", label = "") => { 
    const template =`
    <a href="${path}" data-path="${path}" class="${className}">${label}</a>`;

    const linkElm = makeElement(template);
    linkElm.addEventListener('click', onRequestPage)

    return linkElm;
}

export default link;