/***
 * 口字布局
 * @author daniel zhao
 * @date 08/20/2019
 */
const DaoLargeButtonTmpl = data =>
    `
        <div class="dao-btn">
            ${data.title}
        </div>   
    `;
class DaoLargeButton extends HTMLElement{
    constructor(){
        super();
        this._title = this.getAttribute("title");
        this._img = this.getAttribute("img");

        this.util = new Util();

        this._render();
    }

    _render(){
        let data = {};

        data.title = this._title;
        this.innerHTML = DaoLargeButtonTmpl(data);
        console.log("test" + DaoLargeButtonTmpl(data));
    }

}

window.customElements.define('dao-lg-button', DaoLargeButton);