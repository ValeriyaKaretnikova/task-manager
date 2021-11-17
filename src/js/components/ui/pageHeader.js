import tagline from "./tagline";
import logo from "../icons/logo";
import { tag } from "../../utils/strings";

const Header = function (heading="Page Header") {
    //Edit Section
    const div = document.createElement('div');
    div.id= 'pageHeader';

    // Header
    const header = document.createElement('header');
    header.appendChild(logo("logo.jpg", "Task Manager Logo"))
    header.appendChild(tagline(tag));
    const h1 = document.createElement('h1');
    h1.textContent = heading;
    header.appendChild(h1);
    div.appendChild(header);

    return div;
}

export default Header;