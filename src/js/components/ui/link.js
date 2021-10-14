import makeElement from "../../utils/makeElement";

const link = (id= '', className='', link="#", content = "&gt;") => { 
    const template =`
    <a href="${link}" id="${id}" class="${className}">${content}</a>`;

    const linkElm = makeElement(template);

    return linkElm;
}

export default link;