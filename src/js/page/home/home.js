const listTmlp = data =>`
    <div class="dao-page-view">
    <div class="dao-page-heading bb-lg-1">
        <header class="row pt-xs-2 pb-xs-2 pl-xs-3">
            <div class="col-lg-5">
                <h1>Listing</h1>
            </div>
            <div class="col-lg-4 ">
                <input class="dao-input" size="10" style="width: 90%;" placeholder = "Search by title, tag or SKU"/>
            </div>
            <div class="col-lg-2 ">
                <dao-lg-button title="Add a listing" color="primary" ><i class="fas fa-plus pr-md-1"></i></dao-lg-button>
            </div>
            
        </header>
            
    </div>
    <div class="dao-page-body">
       <div class="row">
           <div class="col-lg-8" >
                <dao-card-list id="cardlist" data = '{"className":"ChasePayNavDataService","methodName":"getCardListData","condtioMap":{"userId":"1"}}'></dao-card-list>
           </div> 
           <div class="col-lg-4">
                
           
           </div>
       </div>
    </div>
        
        <!--<div class="dao-layer-horizontal">
            <div class = "left">

            </div>
            <div class = "right">right </div>
        </div>-->
    </div>
    <div class="dao-page-footer"></div>
</div>
`;

const  listingDetailTmpl = `
    <div>
        this is listing Details
    </div>
`;
(function(window, document, undefined){
    'user strick';
    window.HomePage = {};
    // noinspection JSAnnotator
    HomePage.until = new Util();
    HomePage.init= function(){
        //console.log("this is home page js");
        HomePage.render();
        HomePage.pageEvents();
    };

    HomePage.pageEvents = function() {
        let cardList = document.getElementById('cardlist');
        cardList.addEventListener('click',function(ev){
            //console.log("pageEvents :" + ev);
            window.cardId = "";
            let target = ev.target;
            while(target !== cardList ){
                if(target.tagName.toLowerCase() == 'li'){
                    let skuid = target.getAttribute("id");
                    window.cardId = skuid.substring(skuid.length - 9);

                    document.getElementsByClassName("dao-page-body").innerHTML = listingDetailTmpl;
                    console.log('li click~' + window.cardId );
                    break;
                }
                target = target.parentNode;
            }
        });
        //
    };

    HomePage.render = function(){
        //get html
        let _htmltml = listTmlp;
        //console.log("test" + _htmltml);
        let _pagedata = {};
        let position = document.getElementById("routerView");
        position.innerHTML = _htmltml(_pagedata);
    };
    window.onload = HomePage.init();
})(window, document, undefined);

