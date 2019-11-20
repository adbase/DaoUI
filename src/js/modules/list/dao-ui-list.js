/***
 * @param
 *  config:
 *  {
 *      id:"",
 *      cache:"",
 *      class:"",
 *      style:"",
 *      data:
 *      [
 *          {
 *              id:"",
 *              title:"",
 *              img:"",
 *              content:{
 *                  "key":"value",
 *              }
 *          }
 *      ]
 *  }
 */
class DaoUIList extends DaoModule{
    constructor(){
        super();
        let data =[];
        //console.log(this.config.cache);
        if(this.config.cache){
            data = this._getData(JSON.stringify(this.config.cache));
        }else{
            data = this.config.data;
        }
        this._render(data);
    }

    parseHTML(data) {
        let html = data =>`
            <ul class="dao-cards dao-width-full ${data.class}" style = "${data.style}" id="${data.id}">
                <li class="dao-cards-item" id="newItem">
                    <div class="dao-card dao-card-new">
                        <i class="fas fa-plus"></i>
                    </div>
                </li>
                ${data.list}
            </ul>
        `;
        return html(data);
    }
    parseList(data){
        let html ='';
        for(let i = 0; i < data.length; i++) {
            let cardData = data[i];
            //console.log(cardData);
            html+= '<li class="dao-cards-item" id="'+cardData.id+'\">';
            html+= '<div class="dao-card">';
            //title
            html += '<div class="dao-card-title">';
            html += '<p class="p-md-3">'+ cardData.title +'</p>';
            html += '</div>';

            //img
            if(cardData.img){

            }else{
                if(cardData.img === "") {
                    html += '<div class="dao-card-image "><div class="dao-card-image-default dao-height-full"></div></div>';
                }else{
                    html += '<div class="dao-card-image"><img src="'+ cardData.img+'"></div>';
                }
            }

            //content
            html += '<div class="dao-card-text">';

            for(let key in cardData.content){
                html += '<div class="dao-card-text-item">' + key  + " : "+ cardData.content[key] + '</div>';
            }

            html += '</div>';

            html+= '</li>'

        }
        html += '';
        return html;
    }

    _render(data){
        let htmldata = {};
        htmldata.id = this.config.id;
        htmldata.class = this.config.class;
        htmldata.style = this.config.style;
        htmldata.list = this.parseList(data);

        this.innerHTML =  this.parseHTML(htmldata);
    }
}

window.customElements.define('dao-ui-list', DaoUIList);