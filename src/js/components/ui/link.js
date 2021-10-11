import makeElement from "../../utils/makeElement";

const link = (id= '', className='', link="#") => { 
    const template =`
    <a href="${link}" id="${id}" class="${className}">&gt;</a>`;

    const linkElm = makeElement(template);

    // Event listener
    // linkElm.addEventListener('click', function(e){
    //     e.preventDefault();
    //     // console.log(e);
    // })

    return linkElm;
}

export default link;