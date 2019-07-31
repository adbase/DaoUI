class Header extends HTMLElement{
    static get observedAttributes() { return ['rows']; }

    constructor() {
        super();

        var shadow = this.attachShadow({
            // open外部可访问（通过element.shadowRoot），closed则不能
            mode: 'open'
        });

        var div = document.createElement('div');
        div.innerHTML = this.innerHTML;
        this.innerHTML = '';
        var style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }

    connectedCallback() {
        console.log('自定义元素加入页面');
        this._render();
    }

    disconnectedCallback(){
        console.log('自定义元素从页面移除');
    }
    adoptedCallback(){
        console.log('自定义元素转移到新页面');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('自定义元素属性发生变化');
        this._rows = newValue;
        this._render();
    }
    get rows() {
        return this._rows;
    }
    set rows(v) {
        this.setAttribute('rows', v);
    }
    _render() {
        var shadow = this.shadowRoot;
        var childNodes = shadow.childNodes;
        var rows = this._rows;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeName === 'STYLE') {
                childNodes[i].textContent = `div {
                display: -webkit-box;
                -webkit-line-clamp: ${rows};
                -webkit-box-orient: vertical;
                overflow: hidden;
                }`;
            }
        }
    }
}
window.customElements.define('dao-header', Header);

