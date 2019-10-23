import {Page} from "../page";

class Home extends Page{
    constructor(){
        super();
        this._htmlTmpl = this.ajaxGet("./home.html");
    }
}