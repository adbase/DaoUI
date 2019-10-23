/**
 * 垂直导航
 * 09/19/2019
 */
class DaoNav extends DaoModule{
    constructor() {
        super();
        this._data = this.getAttribute("data");
        this._id = this.getAttribute("id");
		this.menu = this._getData(this._data);
        this._render();
        this.events();
    }

    events(){
        this.nav_items = document.getElementById(this._id);
        let aLi = this.nav_items.getElementsByTagName('li');
        for(var i=0;i<aLi.length;i++){
            let node = aLi[i];
            node.firstChild.onclick = function(){
                //console.log(node.innerHTML);
                if(node.classList.contains("dao-nav-itemed")){
                    node.classList.remove("dao-nav-itemed");
                }else{
                    node.classList.add("dao-nav-itemed");
                }
            }
        }

    }

    _render(){
        let _html = "";

        _html += '<div class="dao-side-scroll"><ul class="dao-nav dao-nav-tree" lay-filter="test" id="'+ this._id +'">';
        //console.log("test: "+this.menu.length);
        for(let i = 0; i < this.menu.length; i++) {

            _html +='<li class="dao-nav-item">';
            _html +='<a class="" href="javascript:;">' + this.menu[i].name+'</a>';

            if( this.menu[i].sub != null ||  this.menu[i].sub != undefined){
                _html += '<ul class="dao-nav-child">';
                for(let j = 0; j < this.menu[i].sub.length; j++) {
                    _html += '<li><a href="javascript:;">'+ this.menu[i].sub[j].name +'</a></li>'
                }
                _html += '</ul>';
            }
            _html +='</li>';
        }

        _html += '</ul></div>';

        this.innerHTML =  _html;

    }
}
window.customElements.define('dao-nav', DaoNav);