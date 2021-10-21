import homePage from "./../pages/homePage";
import todoPage from "../pages/todoPage";
import errorPage from "../pages/pageNotFound";

const routes = {
    "/": homePage,
    "/todo": todoPage    
}
const Router = (pathname) => {

    const isValidRoute = Object.keys(routes).find(key => key === pathname);

    const app = document.querySelector('#app');
    app.innerHTML = '';
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    // If path doesn't exist -> load the error page
    if (isValidRoute === undefined) {
        app.appendChild(errorPage())
    }
    else {
        app.appendChild(routes[isValidRoute]())
    }
}

export default Router;
