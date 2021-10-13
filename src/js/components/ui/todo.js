import makeElement from "../../utils/makeElement";
const familyImage = require('../../../assets/family.jpg');
const friendsImage = require('../../../assets/friends.jpg');
const schoolImage = require('../../../assets/school.jpg');
const workImage = require('../../../assets/work.jpg');


const todoImage = (category) => {
    switch (category) {
        case 'family':
            return familyImage;
            break;
        case 'friends':
            return friendsImage;
            break;
        case 'school':
            return schoolImage;
            break;
        default:
            return workImage;
            break;
    }
}
const todo = (id = '', title = '', category = '', startTime = '', endTime = '', startDate = '', endDate = '', status = false) => {

    const template = `
    <div class="todo" data-key="${id}">
    <img src= "${todoImage(category)}" alt="${category} image">
    <div class="text">
        <h3 class="title">${title}</h3>
        <p class="category">${category}</p>
        <p class="time"><span><i class="far fa-clock"></i></span>${startTime} - ${endTime}</p>
        <p class="date">Due: ${endDate}</p>
        <p class="status ${status ? 'completed' : 'progress'}">${status ? 'Completed' : 'Not completed'}</p>
    </div>
    <div class="menu">
        <i class="fas fa-ellipsis-v"></i> 
    </div>
    <div class="icons">
        <div class="tooltip">
            <i class="fas fa-check-square"></i>
            <span class="tooltiptext">Check as Complete</span>
        </div>
        <div class="tooltip">
            <i class="fas fa-edit"></i>
            <span class="tooltiptext">Edit Task</span>
        </div>
        <div class="tooltip">
            <i class="fas fa-trash-alt"></i>
            <span class="tooltiptext">Delete Task</span>
        </div>
        
        
    </div>
</div>
    `
    const element = makeElement(template);

    element.querySelector('.menu').addEventListener('click', function (e) {     
        e.currentTarget.nextElementSibling.classList.toggle('show');
    })

    return element;
}

export default todo;