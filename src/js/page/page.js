class Page {
    constructor() {

    }
    _getData(data){
        let key ;
        try{key = eval(data);}
        catch(e)
        {
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
    render(){

    }
}


