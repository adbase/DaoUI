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
    ajaxObject() {
        let xmlHttp;
        try {
            // Firefox, Opera 8.0+, Safari
            xmlHttp = new XMLHttpRequest();
        }
        catch (e) {
            // Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    alert("您的浏览器不支持AJAX！");
                    return false;
                }
            }
        }
        return xmlHttp;
    }
    ajaxGet ( url , data , fnSucceed , fnFail , fnLoading ) {
        let ajax = ajaxObject();
        ajax.open( "post" , url , true );
        ajax.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded" );
        ajax.onreadystatechange = function () {
            if( ajax.readyState == 4 ) {
                if( ajax.status == 200 ) {
                    fnSucceed( ajax.responseText );
                }
                else {
                    fnFail( "HTTP请求错误！错误码："+ajax.status );
                }
            }
            else {
                fnLoading();
            }
        }
        ajax.send( data );
    }
    template(page){
        let regex_id = new RegExp('^#[\\w]*');
        let regex_class = new RegExp('^\\.[\\w-_]*');
        let regex_html = new RegExp('^\\/([\\s\\S]*\\/)*[\\w-_]+\\.html$');
        //console.log(regex_html.test(page));

        if(regex_id.test(page)){return  ( document.getElementById(page) != null ) ? document.getElementById(page).innerHTML : `<div class="dao-hidden"></div>`;}

        if(regex_class.test(page)){return  ( document.getElementsByClassName(page) != null ) ? document.getElementsByClassName(page).innerHTML : `<div class="dao-hidden"></div>`;}

        if(regex_html.test(page)){
            let html = this.ajax_get(page);
            console.log("html:" + html);
            return html != null ? html : `<div class="dao-hidden"></div>`;
        }
    };

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
        ,daolayoutcircle = path + modulefolder +'/dao-layout-circle.js';

    util.getJS(daoheader).then(function(msg){
        return util.getJS(daolayer);
    }).then(function(msg){
        return util.getJS(daolayoutvertical);
    }).then(function(msg){
        return util.getJS(daolayouthorizontal);
    }).then(function(msg){
        return util.getJS(daolayoutcircle);
    });
}(window);

