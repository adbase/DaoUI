/***
 * 大按钮
 * @author daniel zhao
 * @date 08/20/2019
 */
const DaoLargeButtonTmpl = data =>
    `
        <div class="${data.colorclass}">
            ${data.inner}
        </div>   
    `;
class DaoLargeButton extends HTMLElement{
    constructor(){
        super();
        this._title = this.getAttribute("title");
        this._inner = this.innerHTML;
        this._color = this.getAttribute("color");
        this.util = new Util();

        this._render();
    }

    getColorClass(prop){
        let rs = "dao-btn ";
        if(prop === "primary"){
            rs+= "dao-btn-primary";
            return rs;
        }
        return rs;
    }
    _render(){
        let data = {};


        data.colorclass = this.getColorClass(this._color);
        data.inner = this._inner +  this._title;
        this.innerHTML = DaoLargeButtonTmpl(data);
        //console.log("test" + DaoLargeButtonTmpl(data));
    }

}

window.customElements.define('dao-lg-button', DaoLargeButton);