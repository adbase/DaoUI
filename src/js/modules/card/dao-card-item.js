class DaoCardItem extends DaoModule{
    constructor() {
        super();
        this._data = this.getAttribute("data");
        this._id = this.getAttribute("id");
        this._title = this.getAttribute("title");
        this._img = this.getAttribute("img");
        this._innerText = this.innerHTML;

        this._render();

    }
    _render(){
        let _html = "";
        _html += '<div class="dao-card">';
        _html += '<div class="dao-card-content">';
        if(this._img === null){
            _html += '<div class="dao-card-image"><div class="dao-card-image-default"></div></div>';
        }else{
            _html += '<div class="dao-card-image"><img src="'+ this._img+'"></div>';
        }
        _html += '<div class="dao-card-title">'+ this._title +'</div>';
        _html += '<div class="dao-card-text">';

        let textlist = JSON.parse(this._innerText);
        console.log(textlist);
        for(let i = 0; i<textlist.length; i++) {
            _html += '<div class="dao-card-text-item">' + this._innerText[i] + '</div>';
        }
        _html += '</div>';
        this.innerHTML = _html;
    }
}

window.customElements.define('dao-card-item', DaoCardItem);