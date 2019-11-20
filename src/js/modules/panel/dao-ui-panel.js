/***
 * @Author Daniel Zhao
 * @param config:
 *          {
 *                  name:"formm1",
 *                  subtitle : "",
 *                  id:"",
 *                  buttons:[
 *                      {
 *                          name:"btn1",
 *                          type:"ui-name",
 *                          config:[],
 *                          events:function,
 *                      },
 *                      {
 *                          name:"btn2",
 *                          type:"ui-name",
 *                          config:[],
 *                          events:function,
 *                      },
 *                  ],
 *                  elements:[
 *                      {
 *                          name:"key1",
 *                          type:"ui-name",
 *                          config:"",
 *                          events:function,
 *                      },
 *                      {
 *                          name:"key2",
 *                          type:"ui-name",
 *                          config:"",
 *                          events:function,
 *                      },
 *                  ]
 *              }
 */
class DaoUIPanel extends DaoModule{
    constructor(){
        super();

        this._render();
    }

    getHtml(data){
        let html = data => `
            <div class="dao-panel">
                <div class="pl-md-6 pt-md-2 pr-md-6 bb-md-1">
                    <header class="pt-xs-2 pb-xs-2 dao-background-white">
                     <p class="dao-panel-title">${data.title}</p>
                     <p class="dao-text-gray-light">${data.subtitle}</p>
                    </header>
                </div>
                <div class="pl-md-6 pt-md-2 pr-md-6 pb-md-4">
                     ${data.elements}
                </div>
                <div class="pl-md-6 pt-md-2 pr-md-6 pb-md-4">
                    ${data.buttons}
                </div>
            </div>
        `;
        return html(data);
    }

    paserElements(config){
        //console.log(config);
        let  html = "";
        let tmpl = data => `
        <div class="row mb-xs-1 pt-xs-1">
            <div class="col-md-1 mb-xs-1"><p class="dao-panel-text dao-text-gray-light pt-md-1">${data.title}</p></div>
            <div class="col-md-6 mb-xs-1">${data.value}</div>
        </div>`;

        for(let i = 0; i < config.length; i++) {
            let data = {};
            data.title = config[i].name;
            data.value = this.paserUI(config[i].type, config[i].config);
            html += tmpl(data);
        }
        return html;
    }

    paserButton(config){
        let  html = "<div class='col-md-2'>";
        for(let i = 0; i < config.length; i++) {
            //console.log(config);
            html += this.paserUI(config[i].type, config[i].config);
        }
        html+= "</div>";
        return html;
    }
    _render(){

        let elementsHtml = "" , buttonsHtml = "";
        if(this.config.element){
            elementsHtml = this.paserElements(this.config.element);
        }
        if(this.config.button){
            buttonsHtml = this.paserButton(this.config.button);
        }

        let data ={};
        data.id = this.config.id;
        data.title =this.config.name;
        data.subtitle = this.config.subtitle == null ? "" : this.config.subtitle;
        data.buttons = buttonsHtml;
        data.elements = elementsHtml;

        this.innerHTML = this.getHtml(data);

    }
}
window.customElements.define("dao-ui-panel", DaoUIPanel);