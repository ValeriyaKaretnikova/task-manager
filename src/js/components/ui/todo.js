import makeElement from "../../utils/makeElement";
import { formatDateShort } from "../../utils/dateFormat";
import { formatDateLong } from "../../utils/dateFormat";

const todoImage = (category) => {
    switch (category) {
        case 'family':
            const familyImage = '../../../static/images/family.jpg';
            return familyImage;
            break;
        case 'friends':
            const friendsImage = '../../../static/images/friends.jpg';
            return friendsImage;
            break;
        case 'school':
            const schoolImage = '../../../static/images/school.jpg';
            return schoolImage;
            break;
        case 'health':
            const healthImage = '../../../static/images/doctor.jpg';
            return healthImage;
            break;
        default:
            const workImage = '../../../static/images/work.jpg';
            return workImage;
            break;
    }
}

const todo = ({ id = '', title = '', category = '', startTime = '', endTime = '', startDate = '', endDate = '', isComplete = false }) => {

    //Date Manipulation to display in more friendly format
    const shortStartDate = formatDateShort(startDate);
    const shortEndDate = formatDateShort(endDate); 
    const longEndDate = formatDateLong(endDate);

    const template = `
    <div class="todo" data-key="${id}">
        <img src= "${todoImage(category)}" alt="${category} image">
        <div class="text">
            <h3 class="title">${title}</h3>
            <p class="category">${category}</p>
            <p class="time"><span><i class="fas fa-clock"></i></span>${startDate === endDate?"" : shortStartDate} ${startTime}-${startDate === endDate ? "" : shortEndDate} ${endTime}</p>
            <p class="date">Due: ${longEndDate}</p>
            <p class="status ${isComplete ? 'completed' : 'progress'}">${isComplete ? 'Completed' : 'Not completed'}</p>
        </div>
        <div class="menu">
            <div class="ellipsis">
                <i class="fas fa-ellipsis-v"></i> 
            </div>
            
            <div class="icons">
                <div class="tooltip">
                    <div class="check" data-key="${id}">
                        <i class="fas fa-check-square" ></i>
                    </div>     
                    <span class="tooltiptext">Change Status</span>
                </div>
                <div class="tooltip">
                    <div class="edit" data-key="${id}">
                        <i class="fas fa-edit" ></i>
                    </div>                
                    <span class="tooltiptext">Edit Task</span>
                </div>
                <div class="tooltip">
                    <div class="delete" data-key="${id}">
                        <i class="fas fa-trash-alt"></i>
                    </div>   
                    
                    <span class="tooltiptext">Delete Task</span>
                </div>
            </div>
        </div>
    </div>
    `
    const element = makeElement(template);
    element.querySelector('.ellipsis').addEventListener('click', function (e) {
        e.currentTarget.parentElement.querySelector('.icons').classList.toggle('show');
    })
    return element;
}

const todoWithoutMenu = (id = '', title = '', category = '', startTime = '', endTime = '', startDate = '', endDate = '', isComplete = false) => {
    //Date Manipulation to display in more friendly format
    const shortStartDate = formatDateShort(startDate);
    const shortEndDate = formatDateShort(endDate); 
    const longEndDate = formatDateLong(endDate);

    const template = `
    <div class="todo" data-key="${id}">
        <img src= "${todoImage(category)}" alt="${category} image">
        <div class="text">
            <h3 class="title">${title}</h3>
            <p class="category">${category}</p>
            <p class="time"><span><i class="fas fa-clock"></i></span>${startDate === endDate? "" : shortStartDate} ${startTime}-${startDate === endDate ? "" : shortEndDate} ${endTime}</p>
            <p class="date">Due: ${longEndDate}</p>
            <p class="status ${isComplete ? 'completed' : 'progress'}">${isComplete ? 'Completed' : 'Not completed'}</p>
        </div>
    </div>
    `
    const element = makeElement(template);
    return element;
}

export default todo;
export { todoWithoutMenu };