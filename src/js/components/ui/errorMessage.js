import makeElement from "../../utils/makeElement";


const errorMessage = ( errorNumber = "404", errorName = "", errorDetails ="something went wrong") => {

    const template = 
    
    `<div class="errorMessage">      
        <p class="errorName"><span class="errorNumber">${errorNumber}</span>${errorName}</p>
        <p class="errorDetails">${errorDetails}</p>
    </div>`
    

    return makeElement(template);
}

export default errorMessage;