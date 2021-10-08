import makeElement from "../../utils/makeElement";

const svg = () => {

    const element = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
        <filter id="gooey">
            <!-- in="sourceGraphic" -->
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
        </filter>
    </defs>
    </svg>
    `;

    return element;
}

const button = (id= '', className='') => {
    const template =  `
    <button id= ${id} class=${className} type='Submit'>
    &gt;
        <span class="bubbles">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </span>
    </button>
    `
    const buttonElm = makeElement(template);
    buttonElm.addEventListener('click', function(e){
        console.log(e);
    })
    return buttonElm;
}

export { svg, button }