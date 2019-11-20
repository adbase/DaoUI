!(function(window, document, $, undefined){
    'user strick';
    window.HomePage = {};
    HomePage.until = new Util();

    /* page init */
    HomePage.init= function(){
        //console.log("this is home page js");
        HomePage.cacheData = {};
        HomePage.renderSKUListing();
    };

    let getCache = function(key){
        if(HomePage.cacheData[key]){
            return HomePage.cacheData[key];
        }
        return "";
    };

    let setCache = function(key,value){
        HomePage.cacheData[key] = value;
    };
    /*
    * Event functions
    * */

    //1. 商品列表
    //click add button
    HomePage.event_click_list_add = function(target) {
        this.renderNewProduct();
    };

    //编辑按钮
    HomePage.event_click_cardList = function(target){
        let node = target.parentNode;
        let sku = node.getAttribute("id");
        HomePage.renderAttributes(sku);

    };

    //2.新增商品
    HomePage.event_click_return =function(target) {
        this.renderSKUListing();
    };
    HomePage.event_click_new_add =function(target) {
        alert("保存表格方法");
    };

    HomePage.event_click_new_add_img =function(target) {
        alert("保存图片方法");
    };

    //3. 商品属性列表
    HomePage.event_click_attr_list_add = function(tartget){

    };
    HomePage.event_click_attr_list_edit = function(tartget){
        this.renderAttributeDetail()
    };

    //4.商品属性编辑
    HomePage.event_click_attr_detail_save = function(tartget){
      alert("保存属性表格方法");
    };

    HomePage.event_click_attr_detail_new = function(target){
        console.log("event_click_attr_detail_new");
        HomePage.renderAttributeDetailNew();


        $('#modal1').modal('open');

    };

    HomePage.event_click_attr_detail_new_save = function(target){
        alert("保存属性方法");
    };
    HomePage.event_click_attr_detail_new_cancel = function(target){
        $('#modal1').modal('close');
    };



    //商品列表页面
    HomePage.renderSKUListing = function(){
        //1 render html
        let config = {};
        config.pageID = "SKUListing";

        //1.1 header config
        config.header = {title:"商品列表"};
        config.header.bar =[];
        config.header.bar.push(
            {
                type:"dao-ui-input",
                config:
                    {
                        id:"headerSearch",
                        placeholder:"Search by title, tag or SKU",
                        style:"width: 90%",
                        size:10,
                        type:"text"
                    }
            });
        config.header.path = {"商品列表":"HomePage.renderSKUListing()"};

        //1.2 filter config
        config.filter = {};
        config.filter.id = config.pageID+"Filter";

        //1.3 list config
        config.list = {};
        config.list.cache = key_card_list_data;
        config.list.id = "SKUListingList";
        config.list.actions = {};
        config.list.actions.add = "HomePage.event_click_list_add(this)";
        config.list.actions.cardaction ={ "编辑":"HomePage.event_click_cardList(this)"};

        //1.4 paser html
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("home");
        position.innerHTML = _html;
    };

    //2.新增商品页面
    HomePage.renderNewProduct = function(){
        let config = {};
        config.pageID = "newProduct";

        //2.1 header config
        config.header = {title:"新增商品"};
        config.header.bar =[];
        config.header.path = {"商品列表":"HomePage.renderSKUListing()","新增商品":""};

        //2.2 form config

        config.form = {};
        config.form.data = {};
        config.form.data.title = "商品信息";
        config.form.data.id = "newProductForm";
        config.form.data.element =[];

        let formElemets = {
            type:"",
            config:{},
        };

        let skuInput = JSON.parse(JSON.stringify(formElemets));
        skuInput.type = "dao-input";
        skuInput.config = {"id":"skuInput", "title":"商品SKU","dataLength":"10"};

        config.form.data.element.push(skuInput);

        let nameInput = JSON.parse(JSON.stringify(formElemets));
        nameInput.type = "dao-input";
        nameInput.config = {"id":"nameInput", "title":"商品名称","dataLength":"20"};

        config.form.data.element.push(nameInput);

        config.form.data.button = [];
        let formButton = {
            color:"",
            id:"",
            name:"",
            action:"",
        };

        let saveButton = JSON.parse(JSON.stringify(formButton));
        saveButton.color = "orange accent-2";
        saveButton.name = "保存";
        saveButton.id = "saveNewForm";
        saveButton.action = "HomePage.event_click_new_add()";

        config.form.data.button.push(saveButton);
        //2.3 filter N/A

        //2.4 list
        config.list ={};
        config.list.data =[];
        config.list.actions={};
        config.list.actions.add =　"HomePage.event_click_new_add_img()";
        config.list.actions.cardaction = {"查看属性":""};


        //2.5 paser html
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("home");
        position.innerHTML = _html;


    };

    //商品属性类别列表页面　
    HomePage.renderAttributes = function(sku){

        let config = {};
        config.pageID = "SKUAttributes"+sku;

        //header config
        config.header = {title:"商品属性"};
        config.header.bar =[];
        config.header.path = {"商品列表":"HomePage.renderSKUListing()","商品属性":""};
        //filter
        config.filter = {};

        //list config
        config.list ={};
        config.list.cache = key_card_detail_data;

        config.list.actions={};
        config.list.actions.add =　"HomePage.event_click_attr_list_add()";
        config.list.actions.cardaction = {"编辑属性":"HomePage.event_click_attr_list_edit()"};

        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("home");
        position.innerHTML = _html;

    };
    //商品属性页面
    HomePage.renderAttributeDetail = function(sku, attri){
        let config = {};
        config.pageID = "SKUAttributesDetail";

        //header config
        config.header = {title:"商品详细属性"};
        config.header.bar =[];
        config.header.path ={"商品列表":"HomePage.renderSKUListing()","商品属性":"HomePage.renderAttributes()","商品详细属性":""};

        //form config
        config.form ={};
        config.form.cache = JSON.stringify(key_card_detail_attr_data);


        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("home");
        position.innerHTML = _html;
    };

    //新增商品属性页面

    HomePage.renderAttributeDetailNew = function(){
        let config = {
            title:"新增属性",
            content:[
                {
                    type:"dao-input",
                    config:{
                        title:"属性名称",
                        id:"modalAttrName",
                    }
                },
                {
                    type:"dao-input",
                    config:{
                        title:"属性值",
                        id:"modalAttrValue+",
                    }
                }
            ],
            footer:[
                {
                    type:"dao-ui-button",
                    config:{
                        id:"attrNewSaveButton",
                        icon:"save",
                        name:"保存",
                        action:"HomePage.event_click_attr_detail_new_save()",
                    }
                },{
                    type:"dao-ui-button",
                    config:{
                        id:"attrNewCancelButton",
                        name:"取消",
                        action:"HomePage.event_click_attr_detail_new_cancel()",
                    }
                }
            ],

        };
        let _html = "";
        _html += "<dao-modal config ='"+JSON.stringify(config)+"'></dao-modal>";
        let position = document.getElementById("popup");
        position.innerHTML = _html;

    };
    window.onload = HomePage.init();
})(window, document, jQuery);