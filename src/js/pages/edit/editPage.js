import Header from "../../components/ui/pageHeader";
import editForm from "../../components/ui/form";
import { Router } from "./../../routes/router";
import { getStore } from "../../redux/store";
import reducer from "./../../redux/reducers";

const editPage = function (props) {
    //FUNCTIONS
    function cleanUp() {
        page.querySelector('.cancel').removeEventListener('click', onCancelTask)
        page.querySelector('.form').removeEventListener('submit', onEditTask)
    }
    function onCancelTask(e) {
        cleanUp();
        Router('/todo');
    }
    function onEditTask(e) {
        //TODO
        e.preventDefault();
        if (props !== null) {
            const editTask = {
                id: document.querySelector('#todoID').value,
                category: document.querySelector('#Category').value,
                title: document.querySelector('#Description').value,
                isComplete: document.querySelector('#Status').checked,
                startDate: document.querySelector('#StartDate').value,
                startTime: document.querySelector('#StartTime').value,
                endDate: document.querySelector('#EndDate').value,
                endTime: document.querySelector('#EndTime').value
            }

            const index = getStore().findIndex(task => task.id === editTask.id)
            const action = {
                type: "edit",
                payload: { index, editTask },
                cb: () => Router('/todo')
            }
            reducer(action);
            cleanUp();
        }
    }
    // LAYOUT
    //Page Container
    const page = document.createElement('div');
    page.className = "edit-page";
    //Page Header
    page.appendChild(Header("Edit Task"));

    //EDIT Form
    if (props !== null) {
        const todo = props;
        page.appendChild(editForm(todo.id, todo.category, todo.title, todo.isComplete, todo.startDate, todo.startTime, todo.endDate, todo.endTime));
    }

    // ADD EVENT LISTENERS
    page.querySelector('.cancel').addEventListener('click', onCancelTask);
    page.querySelector('.form').addEventListener('submit', onEditTask);

    return page;
}

export default editPage;