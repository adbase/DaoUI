/**
 * 面板
 * 09/18/2019
 */
const DaoPanelImpl = data => `
     <div class="dao-panel p-xs-4 pl-md-6 pt-md-2 pr-md-6 pb-md-4">
        <header class="pt-xs-2 pb-xs-2 bb-xs-1 dao-background-white">
            <h3>${data.title}</h3>
            <p class="dao-text-gray-light">${data.subtitle}</p>
        </header>
        <div class="pt-lg-2">
            ${data.innerhtml}
         </div>
     </div>
`;

class DaoPanel extends HTMLElement{
    constructor() {
        super();
        this._HTML = this.innerHTML;
        this._render();
    }

    _render(){
        let data = {};

        data.title = this.getAttribute("title") == null ? "" : this.getAttribute("title");
        data.subtitle = this.getAttribute("subtitle") == null ? "" : this.getAttribute("subtitle");
        data.innerhtml= this._HTML;
        this.innerHTML = DaoPanelImpl(data);

    }
}

window.customElements.define('dao-panel', DaoPanel);