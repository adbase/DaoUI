/**
 *@param
 * config {
 *  cache:{}
 *  data:{
 *
 *      bar:[
 *          {
 *              type:""
 *              config:""
 *          }
 *      ],
 *      title:"",
 *      path:{
 *          "name1":func1
 *          "name2":func2
 *      }
 * }
 *
 */

class DaoPageHeader extends Page{

    constructor(){
        super();
        this.render();

    }
    paserHtml(data){
        let html = data =>
            `
                <header class="pt-xs-2">
                    <div class='row'>
                        <div class="col s6">
                            <h5 class="mt-lg-1 pt-lg-3">${data.title}</h5>
                        </div>
                        <div class="col s6">
                            <div class='mt-lg-1'>
                                ${data.bar}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        ${data.path}
                    </div>
                </header>
            `;

        return html(data);
    }
    render(){

        let data = {};
        data.title = this.config.title;

        let html ="";
        //console.log(this.config);
        for(let i = 0; i < this.config.bar.length; i++){
            let ui = this.config.bar[i];
            html += this.paserUI(ui.type, ui.config);
        }

        data.bar = html;

        html = "";
        //html += "<nav class='transparent'>";
        html += "<div class='col s12'><ol class='dao-breadcrumbs'>";
        for(let key in this.config.path){
            html += "<li class='dao-breadcrumbs-item'><a class='brown-text text-darken-1 breadcrumb' href='#!' onclick = '"+ this.config.path[key] +"'class=\"breadcrumb\">"+key+"</a></li>"
        }

        html += "</ol></div>";
        //html += "</nav>";
        data.path = html;

       this.innerHTML = this.paserHtml(data);
    }
}
window.customElements.define('dao-page-header', DaoPageHeader);