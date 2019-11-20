/**
 * @param
 * config:
 * {
 *      cache:{}
 *      data:
 *      {
 *           title:"formm1",
 *           id:""
 *            button:[
 *              {
 *                   id:"",
 *                   name:"",
 *                   color:"",
 *                   config:"",
 *                   action:function,
 *               },
 *            ]
 *            element:[
 *                {
 *                type:"ui-name",
 *                  config:{}
 *               },
 *           ]
 *      }
 * }
 */
class DaoPageForm extends Page{

    constructor(){
        super();
        this.render();
    }

    render(){
        let config = {};
        if(this.config.cache){
            //console.log("form config : " + this.config.cache);
            config = this._getData(this.config.cache);
        }else{
            config = this.config.data;
        }

        let html = "";
        html += "<div class='card'><div class='card-content'>";
        html += "<div class='card-title'><p>"+config.title+"</p></div>";
        html += "<form class='row' id ='"+config.id+"'>";
        for(let i = 0; i < config.element.length; i++) {
            html += "<div class='col s12'>";
            html += this.paserUI(config.element[i].type, config.element[i].config);
            html += "</div>";
        }
        html += "</form>";

        html += "</div>";
        html += "<div class='card-action'>";

        for(let i = 0; i < config.button.length; i++) {

            html += "<a class='waves-effect waves-light btn "+config.button[i].color+"' id='"+config.button[i].id+"' onclick='"+config.button[i].action+"' >"+config.button[i].name+"</a>";
        }
        html += "</div>";
        html += "</div>";

        this.innerHTML = html;
    }
}

window.customElements.define('dao-page-form', DaoPageForm);