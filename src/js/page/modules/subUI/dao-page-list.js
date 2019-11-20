/**
 * @param
 * config
 * {
 *      actions:{
 *          add:function,
 *          cardaction:{
 *              "编辑":"func"
 *          }
 *
 *      }
 *      cache:{}
 *      data:{
 *
 *      };
 * }
 */

class DaoPageList extends Page{
    constructor(){
        super();
        this.render();
    }

    render(){
        let config = [];
        let actions = this.config.actions;
        if(this.config.cache){
            //console.log(this.config.cache);
            config = this._getData(JSON.stringify(this.config.cache));
        }else{
            config = this.config.data;
        }

        //console.log(config);
        let html = "<ul class='dao-cards'>";
        html +=  "<li class='dao-cards-item'>" +
            "<div class='card dao-width-full' id='newCard'>" +
            "<div class='card-image'>" +
            "<img class='dao-card-image' src='src/image/default.png'>" +
            "<a class='btn-floating halfway-fab waves-effect waves-light orange accent-2' onclick='"+actions.add+"'><i class='material-icons'>add</i></a>" +
            "</div>";
        html += "<div class='card-content'><span class='card-title grey-text text-darken-2'>新增</span></div>";
        html +=   "</div></li>";


        for(let i =0 ;i < config.length; i ++){
            html += "<li class='dao-cards-item'>";
            let tmp_config = {};
            tmp_config = JSON.parse(JSON.stringify(config[i]));
            tmp_config.actions ={};
            tmp_config.actions = actions.cardaction;

            console.log(tmp_config);
            html += "<dao-card config ="+JSON.stringify(tmp_config)+"></dao-card>";
            html += "</li>";
        }
        html += "</ul>";

        this.innerHTML = html;
    }
}

window.customElements.define('dao-page-list', DaoPageList);