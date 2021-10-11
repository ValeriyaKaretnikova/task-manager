import makeElement from "../../utils/makeElement";

const todo = (id='', title = '', category ='', startTime ='', endTime = '', startDate ='', endDate = '') => {
    const template = `
    <div class="todo" data-key="${id}">
    <h3 class="title">${title}</h3>
    <p class="category">${category}</p>
    <p class="time">${startTime} - ${endTime}</p>
    <p class="date">${startDate} - ${endDate}</p>
    <div class="icons">
        <i class="far fa-edit"></i>
        <i class="far fa-trash-alt"></i>
    </div>
</div>
    `
    return makeElement(template);
}

export default todo;