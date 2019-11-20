class Page extends HTMLElement{
    constructor() {
        super();
        //console.log(this.getAttribute("config"));
        this.config = JSON.parse(this.getAttribute("config"));
    }
    _getData(data){
        let key ;
        try{
            key = JSON.parse(data);
        }
        catch(e)
        {
            console.log("eval data error : " + data);
        }
        return ChasePayDataService.get(key);
    }

    ajaxGet(url){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp .open( "GET" , url, false);
        xmlhttp .send();
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            return xmlhttp.responseText;
        }else
            return null;
    }
    paserUI(type, config){
        let html = "";
        html += "<" + type + " config ='" + JSON.stringify(config) +"' />";
        return html;
    }

    render(){

    }
}


