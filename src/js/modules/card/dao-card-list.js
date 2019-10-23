class DaoCardList extends DaoModule{
    constructor() {
        super();
        this._data = this._getData(this.getAttribute("data"));
        //console.log(this._data);
        this._id = this.getAttribute("id");
        this._render();
    }

    _getCardItem(data){
       //console.log(data);
        let _html = '<li class="dao-cards-item" id="'+this._id+"_"+data.id+'">';
        _html += '<div class="dao-card">';
        _html += '<div class="dao-card-content">';
        if(data.img === undefined || data.img === ""){
            _html += '<div class="dao-card-image"><div class="dao-card-image-default"></div></div>';
        }else{
            _html += '<div class="dao-card-image"><img src="'+ data.img+'"></div>';
        }
        _html += '<div class="dao-card-title">'+ data.title +'</div>';
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