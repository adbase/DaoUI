;!function (window) {
    "user strict";
    let doc = document, modulefolder = 'modules';

    let path = (function () {
        let jsPath = doc.currentScript ? doc.currentScript.src : function() {
            let js = doc.scripts;
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
    })();

    let getJS = function(url){
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
    /*加载文件*/
    let daoheader = path + modulefolder+'/dao-header.js'
        ,daolayer = path + modulefolder +'/dao-layer.js'
        ,daolayoutvertical = path + modulefolder +'/dao-layout-vertical.js'
        ,daolayouthorizontal = path + modulefolder +'/dao-layout-horizontal.js'
        ,daolayoutcircle = path + modulefolder +'/dao-layout-circle.js';

    getJS(daoheader).then(function(msg){
        return getJS(daolayer);
    }).then(function(msg){
        return getJS(daolayoutvertical);
    }).then(function(msg){
        return getJS(daolayouthorizontal);
    }).then(function(msg){
        return getJS(daolayoutcircle);
    });
}(window);