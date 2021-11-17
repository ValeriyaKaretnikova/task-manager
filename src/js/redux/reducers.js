import { getStore, updateStore } from './store';

function reducer(action) {
    const store = getStore();
    const index = action.payload.index;
    let newStore = null;

    switch (action.type) {
        case "delete":
            newStore = [...store.slice(0, index), ...store.slice(index + 1)];
            updateStore(newStore);
            action.cb();
            return "delete";
           
        case "edit":           
            const editTask = action.payload.editTask;
            newStore = [...store.slice(0, index), Object.assign({}, store[index], editTask) , ...store.slice(index +1)];
            updateStore(newStore);
            action.cb();
            return "update";
            
        case "add":
            const addTask = action.payload.addTask;
            newStore = [addTask, ...store];
            updateStore(newStore);
            action.cb();
            return "add";

        case "toggleStatus":
            const toggleStatusTask = store[index];
            newStore = [...store.slice(0, index), Object.assign({}, store[index], {isComplete: !toggleStatusTask.isComplete}) , ...store.slice(index +1)];
            updateStore(newStore);
            action.cb();
            return "toggle";
        default: 
            return store;
    }
}

export default reducer;