/**
 * 平行导航
 * 10/7/2019
 */

class DaoNavHorizontal extends DaoModule {
    constructor() {
        super();
        this._id = this.getAttribute("id");
        this._layout = this.getAttribute("layout");
        this._data = this.getAttribute("data");
        this.menu = this._getData(this._data);
        this._render();

    }

    _render(){
        let _html = "";
        _html +='<ul class="dao-nav dao-layout-right" id="'+ this._id+ '">';
        for(let i = 0; i< this.menu.length; i++) {

        }
        _html +='</ul>';

        this.innerHTML = _html;
    }
}
window.customElements.define('dao-nav-horizontal', DaoNavHorizontal);