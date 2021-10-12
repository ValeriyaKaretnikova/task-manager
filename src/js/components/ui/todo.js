import makeElement from "../../utils/makeElement";
const familyImage = require('../../../assets/family.jpg');
const friendsImage = require('../../../assets/friends.jpg');
const schoolImage = require('../../../assets/school.jpg');
const workImage = require('../../../assets/work.jpg');


const todoImage = (category) => {
    switch(category) {
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
const todo = (id='', title = '', category ='', startTime ='', endTime = '', startDate ='', endDate = '', status = false) => {
    
    
    const template = `
    <div class="todo" data-key="${id}">
    <img src= "${todoImage(category)}" alt="${category} image">
    <div class="text">
        <h3 class="title">${title}</h3>
        <p class="category">${category}</p>
        <p class="time"><span><i class="far fa-clock"></i></span>${startTime} - ${endTime}</p>
        <p class="date">Due: ${endDate}</p>
        <p class="status ${status? 'completed' : 'progress'}">${status? 'Completed' : 'Not completed' }</p>
    </div>
    <div class="icons">
        <i class="far fa-edit"></i> 
        <i class="far fa-trash-alt"></i>
    </div>
</div>
    `
    return makeElement(template);
}

export default todo;