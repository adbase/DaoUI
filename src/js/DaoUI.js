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
    delegateEvent(element, tag, event, listener) {
        // 判断是否支持addEventlistener
        if(element.addEventListener){
            // 给父元素添加事件
            element.addEventListener(event,function(e){
                // 获取当前触发的元素
                var target = e.target;
                // 判断当前元素是否是我需要的
                if(target.nodeName.toLowerCase()===tag){
                    listener(target);
                }
            })
        }else{
            // 兼容IE
            element.attachEvent("on"+event,function(){
                var target = window.event.srcElement;
                if(target.nodeName.toLowerCase()===tag){
                    listener(target);
                }
            })
        }


    }

    getData(data){
        let key ;
        try{key = eval(data);}
        catch(e)
        {
        }
        return ChasePayDataService.get(key);
    }
    TemplateEngine(tpl, data) {
        const re = /{{(.+?)}}/g;
        const {addLine, insert, transform} = templateHandler(tpl);
        let match = "";
        while (match = re.exec(tpl)) {
            let [placeholder, prop] = match;

            addLine({index: match.index});
            insert({
                startIndex: match.index,
                placeholder,
                prop: prop.trim()
            });
        }

        let code = transform();
        return new Function(code.replace(/[\r\t\n]/g, '')).call(data);

        function templateHandler(template) {
            let code = ['let template = [];\n'];
            let codeEnd = 'return template.join("");\n';
            let cursor = 0;
            const sentRe = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;
            return {
                addLine: ({index}) => {
                    let line = template.slice(cursor, index);
                    code.push(`template.push("${line.replace(/('|")/g, '\\$1')}");\n`);
                },
                insert: ({startIndex, placeholder, prop}) => {
                    prop = prop.replace(/(^\s+)|(\s+$)/g, '');
                    if (prop.match(sentRe)) {
                        code.push(`${prop}\n`);
                    } else {
                        code.push(`template.push(this.${prop});\n`);
                    }
                    cursor = startIndex + placeholder.length;
                },
                transform: () => {
                    code.push(`template.push("${template.substr(cursor, tpl.length - cursor)}");\n`);
                    code.push(codeEnd);
                    return code.join('');
                }
            }
        }
    }

}

function DataBinder( object_id ) {
    // 创建一个简单的pubSub对象
    var pubSub = {
            callbacks: {},

            on: function( msg, callback ) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || [];
                this.callbacks[ msg ].push( callback );
            },
            publish: function( msg ) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || [];
                for ( var i = 0, len = this.callbacks[ msg ].length; i < len; i++ ) {
                    this.callbacks[ msg ][ i ].apply( this, arguments );
                }
            }
        },
        data_attr = "data-bind-" + object_id,
        message = object_id + ":input",
        timeIn;

    changeHandler = function( evt ) {
        var target = evt.target || evt.srcElement, //  IE8兼容
            prop_name = target.getAttribute( data_attr );

        if ( prop_name && prop_name !== "" ) {
            clearTimeout(timeIn);
            timeIn = setTimeout(function(){
                pubSub.publish( message, prop_name, target.value );
            },50);

        }
    };

    // 监听事件变化，并代理到pubSub
    if ( document.addEventListener ) {
        document.addEventListener( "input", changeHandler, false );
    } else {
        // IE8使用attachEvent而不是addEventListenter
        document.attachEvent( "oninput", changeHandler );
    }

    // pubSub将变化传播到所有绑定元素
    pubSub.on( message, function( evt, prop_name, new_val ) {
        var elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]"),
            tag_name;

        for ( var i = 0, len = elements.length; i < len; i++ ) {
            tag_name = elements[ i ].tagName.toLowerCase();

            if ( tag_name === "input" || tag_name === "textarea" || tag_name === "select" ) {
                elements[ i ].value = new_val;
            } else {
                elements[ i ].innerHTML = new_val;
            }
        }
    });

    return pubSub;
}
const DBind = function( uid ) {
    var binder = new DataBinder( uid ),

        user = {
            // 属性设置器使用数据绑定器pubSub来发布
            attributes: {},
            set: function( attr_name, val ) {
                this.attributes[ attr_name ] = val;
                // Use the `publish` method
                binder.publish( uid + ":input", attr_name, val, this );
            },
            get: function( attr_name ) {
                return this.attributes[ attr_name ];
            },

            _binder: binder
        };

    // Subscribe to the PubSub
    binder.on( uid + ":input", function( evt, attr_name, new_val, initiator ) {
        if ( initiator !== user ) {
            user.set( attr_name, new_val );
        }
    });

    return user;
}

;!function (window) {
    "user strict";
    let util = new Util();
    /*加载文件*/
    let modulefolder = 'modules', path = util.path();
    let  daoModule = path + modulefolder +'/dao-module.js'
        ,daoInput = path + modulefolder +'/input/dao-input.js'
        ,daoSelect = path + modulefolder +'/select/dao-select.js'
        ,daoPanel = path + modulefolder +'/panel/dao-panel.js'
        ,daoNav = path + modulefolder +'/nav/dao-nav.js'
        ,daoLargeButton = path + modulefolder + '/button/dao-button-large.js'
        ,daoCardList = path + modulefolder + '/card/dao-card-list.js';

    util.getJS(daoModule).then(function(msg){
        return util.getJS(daoInput);
    }).then(function(msg){
        return util.getJS(daoSelect);
    }).then(function(msg){
        return util.getJS(daoPanel);
    }).then(function(msg){
        return util.getJS(daoNav);
    }).then(function(msg){
        return util.getJS(daoLargeButton);
    }).then(function(msg){
        return util.getJS(daoCardList);
    });
}(window);

