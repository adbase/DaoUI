/***
 * 上下布局
 * @author daniel zhao
 * @date 07/30/2019
 */

const DaoLayoutVertical_tmpl1  = data =>
    `
        <div class="dao-layer-vertical">
            <div class = "head head-shadow"> ${data.head}</div>
            <div class = "bottom dao-background-blue"> ${data.bottom} </div>
        </div>
    `;

/***
 *
 */
class DaoLayoutVertical extends HTMLElement{
    static get observedAttributes() { return ['head','bottom']; }

    constructor() {
        super();

        //get attribute
        this._head = this.getAttribute('head');
        this._bottom = this.getAttribute('bottom');

        //render
        this._render();
    }

    _render(){
        let data = {};
        let headhtml = document.getElementById(this._head)
            ,bottomhtml = document.getElementById(this._bottom);
        if(headhtml != null && typeof(headhtml) != "undefined"){
            //console.log("headhtml : " + headhtml.innerHTML);
            data.head = headhtml.innerHTML;
        }else{
            data.head = `<div></div>`;
        }

        if(bottomhtml != null && typeof(bottomhtml) != "undefined"){
            data.bottom = bottomhtml.innerHTML;
        }else{
            data.bottom = `<div></div>`;
        }

        this.innerHTML = DaoLayoutVertical_tmpl1(data);
    }

}

window.customElements.define('dao-layout-vertical', DaoLayoutVertical);