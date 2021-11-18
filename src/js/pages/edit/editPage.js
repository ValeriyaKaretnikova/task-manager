import Header from "../../components/ui/pageHeader";
import editForm from "../../components/ui/form";
import { Router } from "./../../routes/router";
import { getStore } from "../../redux/store";
import reducer from "./../../redux/reducers";
import datesValid from "../../utils/datesValid";

const editPage = function (props) {
    //FUNCTIONS
    function cleanUp() {
        page.querySelector('.cancel').removeEventListener('click', onCancelTask)
        page.querySelector('.form').removeEventListener('submit', onEditTask)
    }
    function onChange() {
        document.querySelector('.error').textContent = ""
    }
    function onCancelTask(e) {
        cleanUp();
        Router('/todo');
    }

    function onEditTask(e) {
        //TODO
        e.preventDefault();
        if (props !== null) {
            const startDate = new Date(document.querySelector('#StartDate').value);
            const endDate = new Date(document.querySelector('#EndDate').value);
            const startTime = document.querySelector('#StartTime').value;
            const endTime = document.querySelector('#EndTime').value;

            if (!datesValid(startDate, startTime, endDate, endTime)) {
                document.querySelector('.error').textContent = "The start date&time must be before the end date&time"
            }
            else {
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

    page.querySelector('#StartDate').addEventListener('change', onChange);
    page.querySelector('#EndDate').addEventListener('change', onChange);
    page.querySelector('#StartTime').addEventListener('change', onChange);
    page.querySelector('#EndTime').addEventListener('change', onChange);

    return page;
}

export default editPage;