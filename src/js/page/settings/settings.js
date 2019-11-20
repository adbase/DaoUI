!(function(window, document, $, undefined){
    'user stick';
    window.Settings = {};
    Settings.init = function(){
        Settings.renderDepermentList();
    };
    Settings.event_add_new_warehouse = function(){
        Settings.renderDepermentList();
    };


    //事件
    Settings.event_click_department_list = function(){
        Settings.renderDepermentList();
    };

    Settings.event_click_department_edit = function(){
        Settings.renderDepartmnetDetail();
    };

    //部门列表
    Settings.renderDepermentList = function(){
        let config ={
            pageID:"wareHouseList",
            header:{
                title:"部门列表",
                bar:[],
                path: {
                    "首页": "linkTo(\"#/home\")",
                    "部门列表":'',
                }
            },
            list: {
                cache:cache_settings_department_list,
                actions:{
                    add:"",
                    cardaction:{
                        "查看部门详细信息":"Settings.event_click_department_edit()",
                    }
                }
            }
        };
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("settings");
        position.innerHTML = _html;
    };

    //部门信息
    Settings.renderDepartmnetDetail = function(){
        let config ={
            pageID:"wareHouseList",
            header:{
                title:"部门详细信息",
                bar:[],
                path: {
                    "首页": "linkTo(\"#/home\")",
                    "部门列表":' StockPage.renderWareHouseList()',
                    "部门详细信息":'',
                }
            },
            form: {data:{
                    title:"部门信息",
                    id:"newWarehouseForm",
                    element:[
                        {
                            type:"dao-input",
                            config:{
                                type:"text",
                                id:"vendor",
                                title:"部门名称",
                            }
                        },
                        {
                            type:"dao-input",
                            config:{
                                type:"text",
                                id:"addr1",
                                title:"员工数量",
                            }
                        },{
                            type:"dao-input",
                            config:{
                                type:"text",
                                id:"addr2",
                                title:"部门经理",
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

            list:{
                cache:cache_settings_user_list,
                actions:{
                    add:"",
                    cardaction:{
                        "查看员工详细信息":"",
                    }
                }
            }
        };
        let _html = "";
        _html += "<dao-list-detail-page config ='"+JSON.stringify(config)+"'></dao-list-detail-page>";
        let position = document.getElementById("settings");
        position.innerHTML = _html;
    };


    window.onload = Settings.init();
})(window, document, jQuery);
