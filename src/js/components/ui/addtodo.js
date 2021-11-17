import makeElement from "../../utils/makeElement";

const addToDo = () => {
    const template = `
    <div class="addToDo-wrapper">
        <div class="addToDo tooltip">
            <a>&plus;</a>
            <span class="tooltiptext">Add ToDo</span>
        </div>
    </div>
    `
    const element =  makeElement(template);
    return element;
}

export default addToDo;