class DaoCardList extends DaoModule{
    constructor() {
        super();
        console.log(" dao card list : "+this.getAttribute("data"));
        let dataAttr = this.getAttribute("data");
        if(dataAttr.className){
            this._data = this._getData();
        }else{
            this._data = JSON.parse(dataAttr);
        }

        this._id = this.getAttribute("id");
        this._render();
    }
    _getCardItem(data){

        let _html = '<li class="dao-cards-item" id="'+data.id+'">';
        _html += '<div class="dao-card">';
        _html += '<div class="dao-card-content">';
        _html += '<div class="dao-card-title"><div class="row"><div class="col-md-9"><p class="p-md-3">'+ data.title +'</p></div></div></div>';
        if(data.img === undefined || data.img === ""){
            _html += '<div class="dao-card-image "><div class="dao-card-image-default dao-height-full"></div></div>';
        }else{
            _html += '<div class="dao-card-image"><img src="'+ data.img+'"></div>';
        }
        _html += '<div class="dao-card-text">';
        for(let i = 0; i<data.cardItemText.length; i++) {
            _html += '<div class="dao-card-text-item">' +  data.cardItemText[i] + '</div>';
        }
        _html += '</div></li>';
        return _html;
    }

    _render(){
        let _html = "";
        _html += '<ul class="dao-cards dao-width-full" id="'+this._id +'">';
        _html += '<li class="dao-cards-item" id="newItem"><div class="dao-card dao-card-new"><i class="fas fa-plus"></i></div></li>';
        for (let i = 0; i < this._data.length; i++) {
            let cardItem = this._data[i];

            let cardIterate = {};
            cardIterate.id = cardItem.sku;
            cardIterate.cardItemText = [];
            cardIterate.cardItemText.push('sku : ' + cardItem.sku);
            cardIterate.cardItemText.push(cardItem.stock + ' in stock');
            cardIterate.cardItemText.push('price : $' + cardItem.price);

            cardIterate.img = cardItem.img;
            cardIterate.title = cardItem.name;
            //console.log(JSON.stringify(cardIterate));
            _html += this._getCardItem(cardIterate)
        }
        _html += '</ul>';
        this.innerHTML =  _html;
    }
}

window.customElements.define('dao-card-list', DaoCardList);