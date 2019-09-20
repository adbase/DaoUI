/**
 * 选择框
 * 09/16/2019
 */

const DaoSelectImpl = data => `
<div class="dao-select-warper">
    <div class="dao-input-group">
        <select class="dao-select dao-select-custom  dao-width-full">
            <option value="">${data.primary}</option>
            ${data.optionHtml}
        </select>
    </div>
    <div class="dao-input-group-btn" >
        <i class="fas fa-chevron-down" style="margin-left: -20px;margin-top: 13px; color: #4E5465; font-size: small"></i>
    </div>
</div>
`;

class DaoSelect extends HTMLElement{
    constructor() {
        super();
        this._width = this.getAttribute('width');
        this._primary = this.getAttribute('primary');
        this._HTML = this.innerHTML;
        this._render();
    }

    _render(){
        let data ={};
        data.width = this._width;
        data.primary = this._primary;
        data.optionHtml = this._HTML;
        this.innerHTML = DaoSelectImpl(data);
    }
}

window.customElements.define('dao-select', DaoSelect);