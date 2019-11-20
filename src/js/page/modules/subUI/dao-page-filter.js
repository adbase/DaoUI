/**
 * @param
 * config
 * {
 *      cache:{}
 *      data:{
 *
 *      }
 * }
 */
class DaoPageFilter extends Page{

    constructor(){
        super();
        this.render();
    }
    getPage(data){
        let rs = data =>`
            <nav class="brown lighten-5">
                <div class="nav-wrapper row">
                  <div class="grey-text text-darken-2 col s1 right-align">筛选</div>
                  <div class="col s11">
                       <ul class="hide-on-med-and-down">
                        <li><a class="grey-text text-darken-2" href="#!"><i class="material-icons">sort_by_alpha</i></a></li>
                        <li><a class="grey-text text-darken-2"href="#!"><i class="material-icons">sort</i></a></li>
                        <li><a class="grey-text text-darken-2" href="#!"><i class="material-icons">access_time</i></a></li>
                        <li><a class="grey-text text-darken-2" href="#!"><i class="material-icons">swap_vert</i></a></li>
                      </ul>
                  </div>
                 
                </div>
              </nav>
        `;

        return rs(data);
    }


    render(){
        //let config = JSON.parse(this.getAttribute("config"));
        let html ="";
        let data = {};
        this.innerHTML = this.getPage(data);
    }
}
window.customElements.define('dao-page-filter', DaoPageFilter);