/**
 * @param config
 * {
 *      id:"",
 *      icon:"",
 *      name:"",
 *      style:"",
 *      class:"",
 *      action:""
 * }
 */
class DaoUIButton  extends DaoModule{
    constructor(){
        super();
        this._render();
    }

    _render(){

        let customerClass = this.className;

        let html ="<div class='dao-btn dao-btn-primary"+ customerClass +"'";
        if(this.config.id){
            html += " id = '" + this.config.id +"'";
        }
        if(this.style){
            html += " style = '" + this.style +"'";
        }

        if(this.action){
            html += " onclick = '" + this.action +"'";
        }
        html += ">";

        if(this.config.icon){
            html += '<i class="fas '+this.config.icon+' pr-md-1"></i>';
        }
        html +=this.config.name+ '</div>';
        //console.log("button " + html);
        this.innerHTML = html;
    }

}
window.customElements.define('dao-ui-button', DaoUIButton);