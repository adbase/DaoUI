!(function(window, document, $, undefined){
    'user strick';
    window.PurchasePage = {};
    PurchasePage.init = function(){
        PurchasePage.renderPurchaseList();
    };

    //Actions
    //新增采购单
    PurchasePage.event_click_add_new_purchase = function(){
        PurchasePage.renderCreateNewPurchase();
    };

    PurchasePage.event_click_add_new_purchase_save_button = function(){
        alert("保存采购单");
    };
    //编辑采购单
    PurchasePage.event_click_edit_purchase = function() {
        PurchasePage.renderEditPurchase();
    };
    //

    //采购单列表
    PurchasePage.renderPurchaseList = function(){
        let config =
            {
                pageId:"pagePurchaseList",
                header:{

                        title:"采购单列表",
                        path:{
                            "首页":"linkTo(\"#/home\")",
                            "采购单列表":"",
                        },
                        bar:[
                            {
                                type:"dao-input",
                                config:
                                    {
                                        id:"headerSearch",
                                        placeholder:"Search by title, tag or SKU",
                                        style:"width: 90%",
                                        size:10,
                                        type:"text"
                                    }
                            },
                            ]

                },//end of header

                filter:{
                    cache:{},
                },
                list:{
                    id:"list",
                    cache:key_chache_key_purchase_list,
                    actions:{
                        add:"PurchasePage.event_click_add_new_purchase()",
                        cardaction:{
                            "查看订单":"PurchasePage.event_click_edit_purchase()",
                        }
                    }
                }
            };

        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("purchase");
        position.innerHTML = _html;
    };

    //新建采购单
    PurchasePage.renderCreateNewPurchase = function(){
        let config =
            {
                pageId:"pagePurchaseList",
                header:{

                    title:"新建采购单",
                    path:{
                        "首页":"linkTo(\"#/home\")",
                        "采购单列表":"PurchasePage.renderPurchaseList()",
                        "新建采购单":"",
                    },
                    bar:[],
                },//end of header

                form:{
                    data:{
                        title:"采购单信息",
                        id:"purchaseform",
                        element:[
                            {
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"vendor",
                                    title:"采购商",
                                }
                            },
                            {
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"number",
                                    title:"数量",
                                }
                            },{
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"price",
                                    title:"价格",
                                }
                            },{
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"data",
                                    title:"日期",
                                }
                            }
                        ],
                        button:[
                            {
                                id:"purchaseFormSaveButton",
                                name:"保存",
                                color:"orange accent-2",
                                action:"event_click_add_new_purchase_save_button()",
                            }
                        ]
                    }
                },//form end

                list:{
                    data:{},
                    actions:{
                        add:"",
                        cardaction:{
                            "":"",
                        }
                    }
                }
            };
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("purchase");
        position.innerHTML = _html;

    };
    //编辑采购单
    PurchasePage.renderEditPurchase = function(){
        let config =
            {
                pageId:"pagePurchaseEditList",
                header:{

                    title:"编辑采购单",
                    path:{
                        "首页":"linkTo(\"#/home\")",
                        "采购单列表":"PurchasePage.renderPurchaseList()",
                        "编辑采购单":"",
                    },
                    bar:[],
                },//end of header
                form:{
                    data:{
                        title:"采购单信息",
                        id:"purchaseform",
                        element:[
                            {
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"vendor",
                                    title:"采购商",
                                    value:"采购商1"
                                }
                            },
                            {
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"number",
                                    title:"数量",
                                    value:"100",
                                }
                            },{
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"price",
                                    title:"价格",
                                    value:"$1023"
                                }
                            },{
                                type:"dao-input",
                                config:{
                                    type:"text",
                                    id:"data",
                                    title:"日期",
                                    value:"2019-01-01"
                                }
                            }
                        ],
                        button:[
                            {
                                id:"purchaseFormSaveButton",
                                name:"保存",
                                color:"orange accent-2",
                                action:"",
                            }
                        ]
                    }
                },//form end

                list:{
                    cache:key_card_list_data,
                    actions:{
                        add:"",
                        cardaction:{
                            "":"",
                        }
                    }
                }

            };
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("purchase");
        position.innerHTML = _html;

    };

    window.onload = PurchasePage.init();
})(window, document, jQuery);