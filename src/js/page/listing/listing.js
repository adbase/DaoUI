
class listingPage extends Page{

    constructor(){
        super();
        this.init();
        this.render();
    }
    init(){
        //1. get ui data
        let carlist_data = this._getData(key_card_data);
        console.log("listpage : " + carlist_data);
        //1.1 get card list data

    }
    render(){
        let url = "./listing.html";
        let html = this.ajaxGet(url);

    }


};