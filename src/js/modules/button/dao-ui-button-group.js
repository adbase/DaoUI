/**
 * @param
 * config
 * [
*       id:"",
*       icon:"",
*       name:"",
*
*  ]
 */
class DaoUIButtonGroup extends DaoModule{
    constructor(){
        super();
        this._render();
    }
    _render(){
        let html="";
        html += "<div class='dao-btn-group "+ this.className +"'";
        if(this.id){
            html += "id = '" + this.id + "'";
        }

        if(this.UIstyle){
            html += "style = '" + this.UIstyle + "'";
        }
        html += "><div>";


        //console.log(this.config.buttons);
        for(let i = 0 ;i < this.config.buttons.length; i++) {
            let buttonConfig = this.config.buttons[i];
            html += "<button class='dao-btn dao-btn-secondary dao-btn-group-item'>";
            html += "<p class='pl-md-2 pr-md-2'><i class = 'fas " + buttonConfig.icon + "'></i></p>";
            html +="</button>";
        }

        html += "</div></div>";
        this.innerHTML = html;
    }

}
window.customElements.define("dao-ui-button-group", DaoUIButtonGroup);