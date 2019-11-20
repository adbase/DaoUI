!(function(window, document, $, undefined){
    'user stick';
    window.StockPage = {};
    StockPage.init = function(){
        StockPage.renderWareHouseList();
    };
    StockPage.event_add_new_warehouse = function(){
        StockPage.renderCreateWareHouse();
    };


    //仓库列表
    StockPage.renderWareHouseList = function(){
        let config ={
            pageID:"wareHouseList",
            header:{
                title:"仓库列表",
                bar:[],
                path: {
                    "首页": "linkTo(\"#/home\")",
                    "仓库列表":'',
                }
            },
            list: {
                cache:key_cache_key_warehouse_list,
                actions:{
                    add:"StockPage.event_add_new_warehouse()",
                    cardaction:{
                        "":"",
                    }
                }
            }
        };
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("stock");
        position.innerHTML = _html;
    };

    //新建仓库
    StockPage.renderCreateWareHouse = function(){
        let config ={
            pageID:"wareHouseList",
            header:{
                title:"新建仓库",
                bar:[],
                path: {
                    "首页": "linkTo(\"#/home\")",
                    "仓库列表":' StockPage.renderWareHouseList()',
                    "新建仓库":'',
                }
            },
            form: {data:{
                    title:"仓库信息",
                    id:"newWarehouseForm",
                    element:[
                        {
                            type:"dao-input",
                            config:{
                                type:"text",
                                id:"vendor",
                                title:"仓库名称",
                            }
                        },
                        {
                            type:"dao-input",
                            config:{
                                type:"text",
                                id:"addr1",
                                title:"地址1",
                            }
                        },{
                            type:"dao-input",
                            config:{
                                type:"text",
                                id:"addr2",
                                title:"地址2",
                            }
                        }
                    ],
                    button:[
                        {
                            id:"newWareHouseFormSaveButton",
                            name:"保存",
                            color:"orange accent-2",
                            action:"",
                        }
                    ]
                }
            },//form end
        };
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("stock");
        position.innerHTML = _html;
    };


    window.onload = StockPage.init();
})(window, document, jQuery);
