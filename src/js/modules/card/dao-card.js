const DaoCardTmpl= `
    <style>
    
    </style>
    <div class="dao-width-full">
    
    </div>
`;
class DaoCard extends DaoModule{
    constructor(){
        super();
        this._data = this.getAttribute("data");
    }
}
window.customElements.define('dao-card', DaoCard);