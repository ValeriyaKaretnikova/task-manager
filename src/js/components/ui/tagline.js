import makeElement from "../../utils/makeElement";

const tagline = (content = '') => {
    const template = `
    <p class="tag">${content}</p>
    `
    return makeElement(template);
}

export default tagline;