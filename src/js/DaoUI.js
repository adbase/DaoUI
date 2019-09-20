class Util {
    constructor(){
        this.doc = document;
    };

    path(){
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
    getJS(url){
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.type = "text/javascript";

            if (script.readyState){  //IE
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" ||
                        script.readyState == "complete") {
                        script.onreadystatechange = null;
                        resolve('success: '+url);
                    }
                };
            } else {  //Others
                script.onload = function(){
                    resolve('success: '+url);
                };
            }

            script.onerror = function() {
                reject(Error(url + 'load error!'));
            };

            script.src = url+'?'+'time='+Date.parse(new Date());
            document.body.appendChild(script);

        });
    };

    ajaxGet (url) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp .open( "GET" , url, false);
        xmlhttp .send();
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            return xmlhttp.responseText;
        }else
            return null;
    }

    template(page){
        let regex_id = new RegExp('^#[\\w]*');
        let regex_class = new RegExp('^\\.[\\w-_]*');
        let regex_html = new RegExp('^\\/([\\s\\S]*\\/)*[\\w-_]+\\.html$');

        if(regex_id.test(page)){
            page = page.substring(1, page.length);
            return  ( document.getElementById(page) != null ) ? document.getElementById(page).innerHTML : `<div class="dao-hidden"></div>`;
        }

        if(regex_class.test(page)){
            page = page.substring(1, page.length);
            return  ( document.getElementsByClassName(page) != null ) ? document.getElementsByClassName(page)[0].innerHTML : `<div class="dao-hidden"></div>`;
        }

        if(regex_html.test(page)){
            let html = this.ajaxGet(page);
            return html != null ? html : `<div class="dao-hidden"></div>`;
        }
    }

}

;!function (window) {
    "user strict";
    let util = new Util();
    /*加载文件*/
    let modulefolder = 'modules', path = util.path();
    let daoheader = path + modulefolder+'/dao-header.js'
        ,daolayer = path + modulefolder +'/dao-layer.js'
        ,daolayoutvertical = path + modulefolder +'/dao-layout-vertical.js'
        ,daolayouthorizontal = path + modulefolder +'/dao-layout-horizontal.js'
        ,daolayoutcircle = path + modulefolder +'/dao-layout-circle.js'
        ,daoLargeButton = path + modulefolder +'/Button/dao-button-large.js'
        ,daoInput = path + modulefolder +'/input/dao-input.js'
        ,daoSelect = path + modulefolder +'/select/dao-select.js'
        ,daoPanel = path + modulefolder +'/panel/dao-panel.js';

    util.getJS(daoheader).then(function(msg){
        return util.getJS(daolayer);
    }).then(function(msg){
        return util.getJS(daolayoutvertical);
    }).then(function(msg){
        return util.getJS(daolayouthorizontal);
    }).then(function(msg){
        return util.getJS(daolayoutcircle);
    }).then(function(msg){
        return util.getJS(daoLargeButton);
    }).then(function(msg){
        return util.getJS(daoInput);
    }).then(function(msg){
        return util.getJS(daoSelect);
    }).then(function(msg){
        return util.getJS(daoPanel);
    });
}(window);

