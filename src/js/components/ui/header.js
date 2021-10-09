import makeElement from "../../utils/makeElement";

const header = () => {

    const template = `
    <div class="header-text">
      Make 
      <div id=flip>
        <div><div>Everything</div></div>
        <div><div>work</div></div>
        <div><div>lifestyle</div></div>
        <div><div>School</div></div>
      </div>
      Organized
    </div>`

    return makeElement(template);
}

export default header;