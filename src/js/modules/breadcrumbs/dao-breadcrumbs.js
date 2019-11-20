/**
 * @param
 * config:
 * {
 *      "menu1":"url1,
 *      "menu2":"url2,
 * }
 *
 */
class DaoBreadcrumbs extends DaoModule{
    constructor(){
        super();
        this._render();
    }

    _render(){
        let html ="<nav>";
        html += "<div class='nav-wrapper'><div class='col s12'>";
        for(let key in this.config) {
            html += "<a href='#!' onclick='"+this.config[key]+"' class='breadcrumb'>key</a>"
        }
        html += "</div></div>";
        html += "</nav>";
        this.innerHTML
    }


}

window.customElements.define('dao-breadcrumbs', DaoBreadcrumbs);