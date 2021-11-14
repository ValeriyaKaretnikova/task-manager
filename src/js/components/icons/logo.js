const logo = (filename="", alt="") => {
    const image = document.createElement('img');
    image.src = '../../../static/images/logo.jpg';
    image.alt = alt;

    return image;
}

export default logo;