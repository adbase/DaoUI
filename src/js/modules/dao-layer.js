const daolayertmpl1 = `<div>test</div>`
class DaoLayer extends HTMLElement{
    static get observedAttributes() { return ['type']; }

    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =daolayertmpl1;
    }
}

window.customElements.define('dao-layer', DaoLayer);