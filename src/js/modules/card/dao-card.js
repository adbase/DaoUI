/**
 * @param
 * config:{
 *    type:1,2
 *    img: url
 *    title:
 *    content:[
 *      {
 *          icon:
 *          key:"value"
 *      },
 *    ]
 *    actions:{
 *      click:func
 *    }
 * }
 */
class DaoCard extends DaoModule{
    constructor(){
        super();
        this._render();
    }

    getType1(config){
        let html = "";
        html += "<div class='card dao-width-full' id='"+config.id+"'>";
        if(config.img){

            html += "<div class='card-image waves-effect waves-block waves-light'>";
            html += "<img class='activator dao-card-img' src='"+ config.img +"'>";
            html += "</div>";
        }
        html += '<div class="card-content">';
        html += '<span class="card-title activator grey-text text-darken-2">'+config.title+'<i class="material-icons right">more_vert</i></span>';

        html += "</div>";

        html += '<div class="card-reveal">';
        html += '<span class="card-title grey-text text-darken-2">'+config.title+'<i class="material-icons right">close</i></span>';
        //console.log("config.content" + JSON.stringify(config.content));
        for(let key in config.content) {
                html += "<p class=\"grey-text text-darken-2\">"+key+" : "+config.content[key]+"</p>";
        }
        html += "</div>";

        //console.log(JSON.stringify(config));
        html += "<div class='card-action'>";
        for(let key in config.actions){
            html += "<a class='card-edit-button' onclick='"+config.actions[key]+"'>"+key+"</a></div>";
        }

        html += "</div>";
        return html;
    }
    _render(){
        //console.log("tst");
        let html = "";
        if(!this.config.type){
            this.config.type = 1;
        }
        if(this.config.type === 1){
            html += this.getType1(this.config);
        }else{

        }

        this.innerHTML = html;
    }
}
window.customElements.define('dao-card', DaoCard);