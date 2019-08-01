/***
 * 口字布局
 * @author daniel zhao
 * @date 07/30/2019
 */

const DaoLayoutCircleTmpl = data =>
    `
        <div class="dao-layer-circle">
            <div class="header">${data.header}</div>
            <div class="left">${data.left}</div>
            <div class="main">${data.main}</div>
            <div class="right">${data.right}</div>
            <div class="footer">${data.footer}</div>
        </div>
    `;

class DaoLayoutCircle extends HTMLElement{
    static get observedAttributes() { return ['header','foot','left','right','main']; }
    constructor(){
        super();

        //get attribute
        this._header = this.getAttribute('header');
        this._footer = this.getAttribute('footer');
        this._left = this.getAttribute('left');
        this._right = this.getAttribute('right');
        this._main = this.getAttribute('main');

        //render
        this._render();
        this._getHTML('/resources/css/mei.html')
    }

    _getHTML(page){
        let regex_id = '^#[\\w]*';
        let regex_class = '^.[\\w-_]*';
        let regex_html = new RegExp('^\\/([\\s\\S]*\\/)*\\w+\\.html$');
        //console.log(regex_html.test(page));
        if(regex_id.test(page)){
               
        }
    }
    _render(){
        let data = {};
        let headerHTML = ( document.getElementById(this._header) != null ) ? document.getElementById(this._header).innerHTML : `<div class="dao-hidden"></div>`;
        let footerHTML = ( document.getElementById(this._footer) != null ) ? document.getElementById(this._footer).innerHTML : `<div class="dao-hidden"></div>`;
        let leftHTML   = ( document.getElementById(this._left) != null ) ? document.getElementById(this._left).innerHTML : `<div class="dao-hidden"></div>`;
        let rightHTML  = ( document.getElementById(this._right) != null ) ? document.getElementById(this._right).innerHTML : `<div class="dao-hidden"></div>`;
        let mainHTML   = ( document.getElementById(this._main) != null ) ? document.getElementById(this._main).innerHTML : `<div class="dao-hidden"></div>`;

        data.header = headerHTML;
        data.footer = footerHTML;
        data.left = leftHTML;
        data.right = rightHTML;
        data.main = mainHTML;

        this.innerHTML = DaoLayoutCircleTmpl(data);
    }
}
window.customElements.define('dao-layout-circle', DaoLayoutCircle);