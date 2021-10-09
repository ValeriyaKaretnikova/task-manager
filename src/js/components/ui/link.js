import makeElement from "../../utils/makeElement";

const svg = () => {
    const template = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
        <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
        </filter>
    </defs>
    </svg>
    `;

    return makeElement(template);
}

const link = (id= '', className='', link="#", spanClassName='') => { 
    const template =`
    <a href="${link}" id="${id}" class="${className}"> &gt;
          <span class="bubbles">
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>
            <span class="${spanClassName}"></span>           
        </span>
    </a>`
    const linkElm = makeElement(template);

    // Event listener
    linkElm.addEventListener('click', function(e){
        console.log(e);
    })

    return linkElm;
}

export { svg, link }