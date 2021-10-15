import homePage from "./../pages/homePage";
import todoPage from "../pages/todoPage";
import errorPage from "../pages/pageNotFound";

const routes = {
    "/": homePage(),
    "/todo": todoPage(),
    "/error": errorPage()      
}
const Router = (pathname) => {

    const app = document.querySelector('#app');
    app.innerHTML = '';
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    // If path doesn't exist -> load the error page
    if (routes[window.location.pathname]){
        app.appendChild(routes[window.location.pathname]);
    }
    else {
        app.appendChild(routes["/error"]);
    }
}

export default Router;
