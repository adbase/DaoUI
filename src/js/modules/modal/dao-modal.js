/**
 * config:
 * {
 *      title:""
 *      content:[
 *          {
 *              type:"ui name"
 *              config:{}
 *          }
 *      ]
 *
 *      footer:[
 *          {
 *              type:"ui name"
 *              config:{}
 *          }
 *      ]
 * }
 *
 */

class DaoModal extends DaoModule{
    constructor(){
        super();
        this.render();
        this.event();
    }

    event(){
        $('.modal').modal();
    }

    paserHtml (data){
        let html = data => `
            <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4>${data.title}</h4>
                  <div>${data.content}</div>
                </div>
                <div class="modal-footer">
                  ${data.footer}
                </div>
              </div>    
        `
        return html(data);
    };

    render(){
        let data = {};
        data.title = this.config.title;
        let contentHtml = "";

        for(let i = 0; i < this.config.content.length; i++) {
            contentHtml += "<div class='row'>";
            contentHtml += this.paserUI(this.config.content[i].type, this.config.content[i].config);
            contentHtml += "</div>";
        }
        data.content = contentHtml;

        let footerHtml = "";
        for(let i = 0; i < this.config.footer.length; i++) {
            footerHtml += this.paserUI(this.config.footer[i].type, this.config.footer[i].config);

            console.log(footerHtml);
        }
        data.footer = footerHtml;

        this.innerHTML = this.paserHtml(data);


    }
}

window.customElements.define('dao-modal', DaoModal);