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
            return "remove todo";
        case "edit":
            
            const task = action.payload.editTask;
            newStore = [...store.slice(0, index), task , ...store.slice(index +1)];
            updateStore(newStore);
            action.cb();
            return "edit todo";
        case "add":
            return "add new todo";
        default: return store;
    }
}

export default reducer;