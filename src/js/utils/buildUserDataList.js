import createToDoList from "./createToDoList";
import { dataFetcher } from "./dataFetcher"

const buildUserDataList = async function() {
    const data = await dataFetcher('https://raw.githubusercontent.com/ValeriyaKaretnikova/taskManager/main/data.json');
 
    // return data;
    createToDoList(data);
}

export default buildUserDataList;