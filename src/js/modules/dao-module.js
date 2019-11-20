class DaoModule extends HTMLElement{
    constructor(){
        super();
        console.log(this.getAttribute("config"));
        this.config = JSON.parse(this.getAttribute("config"));
        this.id = this.getAttribute("id") == null ? "" : this.getAttribute("id");
        this.className = this.getAttribute("class") == null ? "" : this.getAttribute("class");
        this.UIstyle = this.getAttribute("style") == null ? "" : this.getAttribute("style");
    }
    paserUI(type, config){
        let html = "";
        html += "<" + type + " config ='" + JSON.stringify(config) +"' />";
        return html;
    }
    _getData(data){
        let key ;
        try
		{
		    key = JSON.parse(data); 
		}
        catch(e)
        {
            console.log("parse data error : " + data);
        }
        return ChasePayDataService.get(key);
    }
    _render(){

    }
};