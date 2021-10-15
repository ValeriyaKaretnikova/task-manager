import dataFetcher from "../../utils/dataFetcher";
import todo from "./todo";

const buildUserDataList = async function () {
    // Fetch the data
    const data = await dataFetcher('https://raw.githubusercontent.com/ValeriyaKaretnikova/taskManager/main/data.json');
    // Build main component using the data
    build(data);
}

export default buildUserDataList;

// Functions
function build(data) {
    const main = document.createElement('main');
    const todosWrapper = document.createElement('div');
    todosWrapper.className = "todos-wrapper";

    data.todos.forEach(element => {
        const completed = element.isComplete === "true" ? true : false;
        const item = todo(element.id, element.title, element.category, element.startTime, element.endTime, element.startDate, element.endDate, completed);
        todosWrapper.appendChild(item);
    });

    main.appendChild(todosWrapper);

    if (document.querySelector('.todoPage')) {
        document.querySelector('.todoPage').appendChild(main);
    }
}
