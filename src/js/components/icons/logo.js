const logo = () => {
    const image = document.createElement('img');
    image.src = require("../../../assets/logo.jpg");
    image.alt = "Task Manager Logo";

    return image;
}

export default logo;