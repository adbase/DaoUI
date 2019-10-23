/**
 * 输入框
 * 09/16/2019
 */

const DaoInputImpl = data => `
<div class="row">
    <div class="col-sm-4 col-xl-3 col-tv-2">
        <label class="dao-text-strong">
            ${data.title}
        </label>
        <p class="dao-text-small dao-text-gray-light">
            ${data.subTitle}
        </p>
    </div>
    <div class="col-sm-8 col-xl-9 col-tv-10">
        <input class="dao-input" placeholder = "${data.placeholder}" size="10" style="width : ${data.width}"/>
    </div>
</div>
`;

class DaoInput extends HTMLElement{
    constructor() {
        super();
        this._title = this.getAttribute('title');
        this._subTitle = this.getAttribute('subTitle');
        this._width = this.getAttribute('width');
        this._placeholder = this.getAttribute('placeholder');
        this._render();
    }

    _render(){
        let data = {};
        data.title = this._title;
        data.subTitle = this._subTitle;
        data.width = this._width;
        data.placeholder = this._placeholder;
        this.innerHTML = DaoInputImpl(data);
    }
}
window.customElements.define('dao-input', DaoInput);