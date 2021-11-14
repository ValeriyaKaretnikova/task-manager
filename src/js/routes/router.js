import homePage from "../pages/home";
import todoPage from "../pages/todoList";
import pageNotFound from "../pages/notFound";
import editPage from "../pages/edit";
import addPage from "../pages/add";
import deletePage from "../pages/delete";

const routes = {
    "/": homePage,
    "/todo": todoPage,
    "/delete": deletePage,
    "/add" : addPage,
    "/edit" : editPage,
    "/*": pageNotFound
}
const Router = (pathname, params=null) => {

    const isValidRoute = Object.keys(routes).find(key => key === pathname);

    const app = document.querySelector('#app');
    app.innerHTML = '';
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    // If path doesn't exist -> load the error page
    if (isValidRoute === undefined || isValidRoute === '') {
        app.appendChild(pageNotFound())
    }
    else {
        app.appendChild(routes[isValidRoute](params))
    }
}

export { Router };
