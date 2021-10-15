import homePage from "./../pages/homePage";
import todoPage from "../pages/todoPage";
import errorPage from "../pages/pageNotFound";

const Router = (pathname) => {
       
    const routes = {
        "/": homePage(),
        "/todo": todoPage(),
        "/error": errorPage()      
    }

    const app = document.querySelector('#app');
    app.innerHTML = '';

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    app.appendChild(routes[window.location.pathname]);

}

export default Router;
