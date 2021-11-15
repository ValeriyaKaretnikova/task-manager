import makeElement from "../../utils/makeElement";
import deleteHeader from "../../components/ui/deletePage";
import { todoWithoutMenu } from "../../components/ui/todo";
import { Router } from "./../../routes/router";
import { getStore } from "../../redux/store";
import reducer from "./../../redux/reducers";


const deletePage = function (props) {
    //FUNCTIONS
    function cleanUp() {
        page.querySelector('.cancel').removeEventListener('click', onCancelTask)
        page.querySelector('.delete').removeEventListener('click', onDeleteTask)
    }
    function onCancelTask(e) {
        cleanUp();
        Router('/todo');
    }
    function onDeleteTask(e) {
        if (props !== null) {
            Router('/todo');
            const removeTask = props;
            const index = getStore().findIndex(task => task.id === removeTask.id)
            const action = {
                type: "delete",
                payload: { index },
                cb: () => Router('/todo')
            }
            reducer(action);
            cleanUp();
        }
    }
    // LAYOUT
    //Page Container
    const page = document.createElement('div');
    page.className = "delete-page";
    //Page Header
    page.appendChild(deleteHeader());

    //Todo to delete
    const todo = todoWithoutMenu(props.id, props.title, props.category, props.startTime, props.endTime, props.startDate, props.endDate, props.isComplete);
    page.appendChild(todo);

    //Buttons
    const template = `
    <div class="buttons">
        <button class="cancel">Cancel</button>
        <button class="delete">Delete</button>
    </div> 
    `
    page.appendChild(makeElement(template));

    // ADD EVENT LISTENERS
    page.querySelector('.cancel').addEventListener('click', onCancelTask);
    page.querySelector('.delete').addEventListener('click', onDeleteTask);

    return page;

}

export default deletePage;


