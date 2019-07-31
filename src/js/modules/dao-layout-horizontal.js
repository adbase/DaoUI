/***
 * 水平布局
 * @author daniel zhao
 * @date 07/30/2019
 */

const DaoLayoutHorizontal_tmpl1  = data =>
    `
        <div class="dao-layer-horizontal">
            <div class = "left"> ${data.left}</div>
            <div class = "right"> ${data.right} </div>
        </div>
    `;
class DaoLayoutHorizontal extends HTMLElement{
    static get observedAttributes() { return ['left','right']; }

    constructor() {
        super();

        //get attribute
        this._left = this.getAttribute('left');
        this._right = this.getAttribute('right');

        //render
        this._render();
    }

    _render(){
        let data = {};
        let leftHTML = document.getElementById(this._left)
            ,rightHTML = document.getElementById(this._right);
        if(leftHTML != null && typeof(leftHTML) != "undefined"){
            data.left = leftHTML.innerHTML;
        }else{
            data.left = `<div></div>`;
        }

        if(rightHTML != null && typeof(rightHTML) != "undefined"){
            data.right = rightHTML.innerHTML;
        }else{
            data.right = `<div></div>`;
        }

        this.innerHTML = DaoLayoutHorizontal_tmpl1(data);
    }

}

window.customElements.define('dao-layout-horizontal', DaoLayoutHorizontal);