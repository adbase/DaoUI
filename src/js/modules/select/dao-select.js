/**
 * 选择框
 * 09/16/2019
 */

const DaoSelectImpl = data => `
<div class="dao-select-warper" style="width : ${data.width}">
    <div class="dao-input-group">
        <select class="dao-select dao-select-custom  dao-width-full">
            ${data.optionHtml}
        </select>
    </div>
    <div class="dao-input-group-btn" >
        <i class="fas fa-chevron-down" style="margin-left: -20px;margin-top: 13px; color: #4E5465; font-size: small"></i>
    </div>
</div>
`;

class DaoSelect extends DaoModule{
    constructor() {
        super();
        this._width = this.getAttribute('width');
        this._primary = this.getAttribute('primary');
        //console.log("select : " + this.getAttribute("data"));
        this._options = JSON.parse(this.getAttribute("data"));
        this._render();
    }

    getOptions(data,primary ){
        let html = "<optgroup>";
        if(primary !== null) {
            html += "<option value='"+primary+"'>"+ data[primary]+"</option>";
        }
        for(let key in data) {
            //console.log(key, data[key]);
            html +="<option value = '"+ key +"'>"+data[key]+"</option>";
        }
        html+="</optgroup>";
        return html;
    }
    _render(){
        let data ={};
        data.width = this._width;
        data.primary = this._primary;
        data.optionHtml = this.getOptions(this._options, this._primary);
        data.width = this.getAttribute("width");
        //console.log(DaoSelectImpl(data));
        this.innerHTML = DaoSelectImpl(data);
    }
}

window.customElements.define('dao-select', DaoSelect);