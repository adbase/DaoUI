/**
 垂直导航
 2019/09/29
 */
const daoNavTmpl =`<div class="dao-side-scroll">
<ul class="dao-nav dao-nav-tree"  lay-filter="test">
                <li class="dao-nav-item dao-nav-itemed">
                    <a class="" href="javascript:;">所有商品</a>
                    <dl class="dao-nav-child">
                        <dd><a href="javascript:;">列表一</a></dd>
                        <dd><a href="javascript:;">列表二</a></dd>
                        <dd><a href="javascript:;">列表三</a></dd>
                        <dd><a href="">超链接</a></dd>
                    </dl>
                </li>
                <li class="dao-nav-item">
                    <a href="javascript:;">解决方案</a>
                    <dl class="dao-nav-child">
                        <dd><a href="javascript:;">列表一</a></dd>
                        <dd><a href="javascript:;">列表二</a></dd>
                        <dd><a href="">超链接</a></dd>
                    </dl>
                </li>
                <li class="dao-nav-item"><a href="">云市场</a></li>
                <li class="dao-nav-item"><a href="">发布商品</a></li>
            </ul>
        </div>` ;
class DaoNavVertical extends HTMLElement{
    constructor(){
        super();
        this._data = this.getAttribute("data");
        
        this._render();
    }

    _render(data){
        this.innerHTML =daoNavTmpl;
    }
}
window.customElements.define('dao-nav-vertical', DaoNavVertical);