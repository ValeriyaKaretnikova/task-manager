import { v4 as uuidv4 } from 'uuid';
import Header from "../../components/ui/pageHeader";
import { addForm } from "../../components/ui/form";
import { Router } from "./../../routes/router";
import { getStore } from "../../redux/store";
import reducer from "./../../redux/reducers";

const addPage = function () {
    //FUNCTIONS
    function cleanUp() {
        page.querySelector('.cancel').removeEventListener('click', onCancelTask)
        page.querySelector('.form').removeEventListener('submit', onAddTask)
    }
    function onCancelTask(e) {
        cleanUp();
        Router('/todo');
    }
    function onAddTask(e) {
        e.preventDefault();

        const addTask = {
            id: document.querySelector('#todoID').value,
            category: document.querySelector('#Category').value,
            title: document.querySelector('#Description').value,
            isComplete: document.querySelector('#Status').checked,
            startDate: document.querySelector('#StartDate').value,
            startTime: document.querySelector('#StartTime').value,
            endDate: document.querySelector('#EndDate').value,
            endTime: document.querySelector('#EndTime').value
        }
        const action = {
            type: "add",
            payload: { addTask },
            cb: () => Router('/todo')
        }
        reducer(action);
        cleanUp();
    }

    // LAYOUT
    //Page Container
    const page = document.createElement('div');
    page.className = "add-page";

    //Page Header
    page.appendChild(Header("Add New Task"));

    //ADD Form
    const newId = uuidv4().substr(0, 8);
    page.appendChild(addForm(newId));

    // ADD EVENT LISTENERS
    page.querySelector('.cancel').addEventListener('click', onCancelTask);
    page.querySelector('.form').addEventListener('submit', onAddTask);

    return page;

}

export default addPage;