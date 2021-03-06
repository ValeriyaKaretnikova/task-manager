import {Router} from "./routes/router";
import {createStore} from "./redux/store";
import dataFetcher from "./utils/dataFetcher";
import keyGenerator from './utils/key'

const app = document.querySelector("#app");
 
const onAppInit = async function(e){
    let todos = await dataFetcher('./static/data/data.json');

    if(todos[0].id === undefined){
         todos = [...keyGenerator(todos)]
    };

    createStore(todos);
    Router(window.location.pathname);
   
}

window.addEventListener('load', onAppInit);

