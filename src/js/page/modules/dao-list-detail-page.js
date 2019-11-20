/**
 * @author Daniel Zhao
 * @param page config:
 *
 * {
 *      pageID: ""
 *      header:{
 *          title:"",
 *          returnButton:"function",
 *          bar:[
 *              {
 *                  type:"",
 *                  config:"",
 *                  events:function,
 *              }
 *          ]
 *      }
 *      form:{
 *          cache:{},
 *          data:
 *          {
 *              cache:{}
 *               data:
 *              {
 *                  title:"formm1",
 *                  id:""
 *                  button:[
 *                      {
 *                          id:"",
 *                          name:"",
 *                          color:"",
 *                          config:"",
 *                          action:function,
 *                      },
 *                  ]
 *            element:[
 *                {
 *                type:"ui-name",
 *                  config:{}
 *               },
 *           ]
 *      }
 * }
 *
 *      filter:{
 *          cache:{},
 *      }
 *      list:{
 *          cache:{},
 *          data:
 *          [
 *              {
 *                  id:"",
 *                  title:"card1",
 *                  img:"url1",
 *                  content:{
 *                      "key1":"value",
 *                      "key2":"value",
 *                  }
 *                  events:function
 *              }
 *          ]
 *      }
 * }
 */

class DaoListDetailPage extends Page{
    constructor(){
        super();

        let config = JSON.parse(this.getAttribute("config"));
        this.pageId = config.pageID;
        this.render(config);
    }

    paserPage(data){
        let pageTmpl = data =>`
        <div class="dao-page-view dao-height-full" id="${data.pageID}">
            <div class="dao-page-heading bb-lg-1">
                ${data.header}
            </div>
            <div class="dao-page-body dao-background-gray">
                    ${data.form}
                    ${data.filter}
                    ${data.list}
            </div>
        </div>
       `;
        return pageTmpl(data);
    }

    paserHeader(config){
        return "<dao-page-header config = '" +JSON.stringify(config) + "'></dao-page-header>";
    }

    paserForm(config){

        return "<dao-page-form config = '" +JSON.stringify(config) + "'></dao-page-form>";
    }
    parseFilter(config){
        return "<dao-page-filter config='"+ JSON.stringify(config)+"'></dao-page-filter>";
    }

    parseList(config){
        return'<dao-page-list config = '+ JSON.stringify(config)+'></dao-page-list>';
    }
    render(config){
        let headerHtml ="", formHtml = "", filterHtml = "", listHtml = "";
        if(config.header){
            headerHtml = this.paserHeader(config.header);
        }
        if(config.form){

            formHtml = this.paserForm(config.form);
        }
        if(config.filter){
            filterHtml = this.parseFilter(config.filter);
        }
        if(config.list){
            listHtml = this.parseList(config.list);
        }

        let data ={};
        data.pageID = config.pageID;
        data.header = headerHtml;
        data.form = formHtml;
        data.filter = filterHtml;
        data.list = listHtml;
        this.innerHTML = this.paserPage(data);
    }

}

window.customElements.define('dao-list-detail-page', DaoListDetailPage);