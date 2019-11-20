/**
 * 平行导航
 * 10/7/2019
 *
 * @param
 * config{
 *      cache:{}
 *      data:[
 *          {
 *              name:""
 *              url:""
 *              sub:[
 *                  {name:"",url:""}
 *              ]
 *          },
 *      ]
 *
 * }
 */

class DaoNavBar extends DaoModule {
    constructor() {
        super();
        this._render();
        this.events();
    }
    events(){
        $(".dropdown-trigger").dropdown();
    }

    _render(){
        let navdata = [];
        //console.log(this.config);
        if(this.config.cache){
            navdata = this._getData(JSON.stringify(this.config.cache));
        }else{
            navdata = this.config.data;
        }

        let html ="";
        html += "<nav class='brown lighten-3'><div class=\"nav-wrapper\">";
        html += "<a href=\"#!\" class='brand-logo'>GenieSeller</a>";
        html += "<ul class=\"right hide-on-med-and-down\">";

        let count = 0;
        for(let i = 0; i < navdata.length; i++) {
            html += "<li>";

            if(navdata[i].sub) {
                html += "<a class='dropdown-trigger' href='#!' data-target='dropdown"+count+"'>" + navdata[i].name+"<i class=\"material-icons right\">arrow_drop_down</i></a>";
                html += "<ul class='dorpdown-content' id='dropdown"+count+"'>";
                for(let j =0 ;j < navdata[i].sub.length; j++) {
                    html += "<li>";
                    html += "<a href='"+navdata[i].sub[j].url+"'>"+navdata[i].sub[j].name+"</a>";
                    html += "</li>";
                }
                html += "</ul>";
                count++;
            }else{
                html += "<a href='#1' onclick='linkTo(\""+"#"+navdata[i].url +"\")'>" + navdata[i].name+"</a>";
            }

            html += "</li>";
        }
        html += "</ul>";
        html += "</div></nav>";
        this.innerHTML = html;

    }
}
window.customElements.define('dao-nav-bar', DaoNavBar);