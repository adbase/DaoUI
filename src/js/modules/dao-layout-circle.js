/***
 * 口字布局
 * @author daniel zhao
 * @date 07/30/2019
 */

const DaoLayoutCircleTmpl = data =>
    `
        <div class="dao-layer-circle">
            <div class="header">${data.header}</div>
            <div class="screen">
                <div class="left">${data.left}</div>
                <div class="main">${data.main}</div>
                <div class="right">${data.right}</div>
            </div>
            <div class="footer">${data.footer}</div>
        </div>
    `;

class DaoLayoutCircle extends HTMLElement{
    static get observedAttributes() { return ['header','foot','left','right','main']; }
    constructor(){
        super();

        this._header = this.getAttribute('header');
        this._footer = this.getAttribute('footer');
        this._left = this.getAttribute('left');
        this._right = this.getAttribute('right');
        this._main = this.getAttribute('main');

        //util
        this.util = new Util();
        //render
        this._render();

    }


    _render(){
        let data = {};

        let headerHTML = this.util.template(this._header);
        let footerHTML = this.util.template(this._footer);
        let leftHTML   = this.util.template(this._left);
        let rightHTML  = this.util.template(this._right);
        let mainHTML   = this.util.template(this._main);

        data.header = headerHTML;
        data.footer = footerHTML;
        data.left = leftHTML;
        data.right = rightHTML;
        data.main = mainHTML;

        this.innerHTML = DaoLayoutCircleTmpl(data);
    }
}
window.customElements.define('dao-layout-circle', DaoLayoutCircle);