import makeElement from "../utils/makeElement";
import { error, errorDetails, tag } from "../utils/strings";
import logo from "../components/icons/logo";
import tagline from "../components/ui/tagline";
import errorMessage from "../components/ui/errorMessage";
import link from "../components/ui/link";

const errorPage = () =>{

    const container = makeElement(`<div class="error"></div>`);

    container.appendChild(logo("logo.jpg", "Task Manager Logo"))
    container.appendChild(tagline(tag));

    const message = errorMessage("404", error, errorDetails);
    container.appendChild(message);
    container.appendChild(link("backToMain", "/", "&lt;"));
    return container;

}

export default errorPage