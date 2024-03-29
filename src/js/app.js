class ChasepayAppUtil {
    constructor(doc){
        this.doc = doc;
    }
    path(){
        console.log(this.doc.currentScript);
        let jsPath = this.doc.currentScript ? this.doc.currentScript.src : function() {
            let js = this.doc.scripts;
            let lastjs = js.length - 1;
            let src;

            for(let i = lastjs; i > 0; i--) {
                if( js[i].readyState === 'interactive'){
                    src = js[i].src;
                    break;
                }
            }
            return src || js[lastjs].src;
        }();
        return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
    };
    ajaxGet(url){
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open( "GET" , url, false);
        xmlhttp.send();
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            return xmlhttp.responseText;
        }else
            return null;
    }
}
const ChasePayClassFactory = (function()
{
    let MAP_CLASS;
    let _init=function()
    {
        MAP_CLASS = new Map();
    };

    let _register=function(key, className)
    {
        MAP_CLASS.set(key, className);
    };
    let _create=function(name)
    {
        return MAP_CLASS.get(name);
    };
    return {
        init: _init,
        create : _create,
        register : _register,
    };
})();
!(function(window, document, undefined){
    'user strick';
    window.ChasepayApp = {};
    ChasepayApp.util = new Util();
    ChasepayApp._getCacheData = function (data) {
        let key;
        try {
            key = eval(data);
        }
        catch (e) {
            console.log("get router error, e:" + e.toString());
        }
        return ChasePayDataService.get(key);
    };

    ChasepayApp.init = function(){
        let until = new ChasepayAppUtil(document);
        ChasePayClassFactory.init();
        //1.router
        let routerconfig1 = ChasepayApp._getCacheData("key_nav_data");

        //1.1 init router html
        let routerHtml = "";
        for(let i = 0; i < routerconfig1.length; i++) {
            if(routerconfig1[i].sub){
                for(let j = 0; j < routerconfig1[i].sub.length; j++) {
                    let pageclass= routerconfig1[i].sub[j].url.substring(1);
                    let pageDatahash = routerconfig1[i].sub[j].url;
                    routerHtml += '<div class="page" data-hash="'+pageDatahash+'">';
                    routerHtml += '<div class="dao-height-full" id = "'+pageclass +'"></div></div>';
                }

            }else{
                let pageclass= routerconfig1[i].url.substring(1);
                let pageDatahash = routerconfig1[i].url;
                routerHtml += '<div class="page" data-hash="'+pageDatahash+'">';
                routerHtml += '<div class="dao-height-full" id = "'+pageclass +'"></div></div>';
            }
        }
        document.getElementById("routerView").innerHTML = routerHtml;


        let routerconfig = {};
        routerconfig.routerViewId = "routerView";
        routerconfig.stackPages = true;
        routerconfig.animationName = "slide";
        routerconfig.routes = [];
        for(let i = 0; i < routerconfig1.length; i++) {
            //console.log(routerconfig1[i]);

            if(routerconfig1[i].sub){

                for(let j = 0; j < routerconfig1[i].sub.length; j++) {
                    let newRouter = {};
                    newRouter.path = routerconfig1[i].sub[j].url;
                    newRouter.name = routerconfig1[i].sub[j].url.substring(1);
                    console.log(newRouter.name);
                    newRouter.callback = function(route){
                        //console.log("router callback 1: " );
                        let url = "./src/js/page/"+ route.path.substring(1)+"/"+ route.path.substring(1)+".js";
                        eval(until.ajaxGet(url));
                    };
                    routerconfig.routes.push(newRouter);
                }

            }else{
                let newRouter = {};
                newRouter.path = routerconfig1[i].url;
                newRouter.name = routerconfig1[i].url.substring(1);
                newRouter.callback = function(route){
                    //console.log("router callback 2: " + newRouter.path );
                    let url = "./src/js/page/"+ route.path.substring(1)+"/"+ route.path.substring(1)+".js";
                    //console.log("router callback 2: " + url );
                    eval(until.ajaxGet(url));
                };
                routerconfig.routes.push(newRouter);
            }

        }
        //console.log("sub routerconfig1[i] : " + JSON.stringify(routerconfig));
        router.init(routerconfig);
        router.beforeEach(function(transition) {
            //console.log('切换之 前 dosomething', transition);
            transition.next();
        });
        router.afterEach(function(transition) {
            //console.log("切换之 后 dosomething", transition)
        })

        //2. import base js
        /*加载文件*/
    };

    window.onload = ChasepayApp.init();
})(window, document, undefined);


