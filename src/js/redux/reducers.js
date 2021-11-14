import { getStore, updateStore } from './store';

function reducer(action) {
    console.log(action);

    switch (action.type) {
        case "delete":
            const store = getStore();
            const index = action.payload.index;
            const newStore = [...store.slice(0, index), ...store.slice(index + 1)];
            updateStore(newStore);
            action.cb();
            return "remove todo";
        case "edit":
            return "edit todo";
        case "add":
            return "add new todo";
        default: return store;
    }
}

export default reducer;