/**
 * 输入框
 * 09/16/2019
 * config
 * {
 *      type:"email","password","text"
 *      dataLength:10
 *      data-error:
 *      data-success:
 *      value:""
 *      title:""
 *      placeholder:""
 *      id:""
 *      icon:""
 * }
 */



class DaoInput extends DaoModule{
    constructor() {
        super();
        this._render();
        this.evetns();
    }

    evetns(){
        $(document).ready(function() {
            Materialize.updateTextFields();
        });
    }
    _render(){
        let html = "";
        html += "<div class='input-field'>";

        //0.icon
        if(this.config.icon){
            html += "<i class='material-icons prefix'>"+this.config.icon+"</i>"
        }
        html += "<input class = 'validate'";

        //1. id
        if(this.config.id){
            html += "id = '" + this.config.id + "'";
        }

        //2. type
        if(this.config.type){
            html += "type = '" + this.config.type + "'";
        }else{
            //default is text input.
            html += "type = 'text'";
        }
        //3.value
        if(this.config.value){
            html += "value = '" + this.config.value +"'";
        }

        //4.placeholder
        if(this.config.placeholder){
            html += "placeholder = '" + this.config.placeholder +"'";
        }

        //5.data-length
        if(this.config.dataLength){
            html += "data-length = '" + this.config.dataLength +"'";
        }

        html += "/>";
        //6. title
        if(this.config.id && this.config.title){
            html += " <label for='"+this.config.id+"'>"+this.config.title+"</label>";
        }
        html += "</div>";
        this.innerHTML = html;
    }


}
window.customElements.define('dao-input', DaoInput);