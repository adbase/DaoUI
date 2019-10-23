var ChasePayNavDataService = class ChasePayNavDataService{
	
	// get  nav data
	getNavData(input)
	{
	    let navdata = chasepayCache(CACHE_KEY_NAV_DATA);
		if(navdata)
		{
		    return navdata;
		}
		else
		{
		    //get data from server 
			navdata=[
                        {
                            name:"首页",
                            url:"/home",
                        },
                        {
                            name:"所有商品",
                            url:"/",
                            sub: [
                                 {
                                    name:"发布商品",
                                    url:"/createsku",
                                 },
                                 {
                                    name:"商品列表",
                                    url:"/listing",
                                 }
                                 ]
                        },
                        {
                            name:"进货订单",
                            url:"/",
                            sub:[
                                {
                                    name:"新建订单",
                                    url:"/createpo",
                                },
                                {
                                    name:"订单列表",
                                    url:"/preorder",
                                }
                                ]
                        },
                        {
                            name:"设置",
                            url:"/",
                            sub:[
                                {
                                    name:"权限设置",
                                    url:"/settingpv",
                                },
                                {
                                    name:"员工管理",
                                    url:"/settinguser",
                                }
                            ]
                        }
                        ];
			chasepayCache(CACHE_KEY_NAV_DATA,navdata);
			return navdata;
		}
	}
    getCardListData(input) {
        let cardListData = chasepayCache(CACHE_KEY_CARD_LIST_DATA);
        if(cardListData)
        {
            return cardListData;
        }
        else
        {
            cardListData = [
                {
                    "img": "",
                    "sku": "000000001",
                    "name":"test1",
                    "stock":10,
                    "price":13.34,
                },
                {
                    "img":"",
                    "sku":"000000002",
                    "name":"test2",
                    "stock":130,
                    "price":10.00,
                },

            ];
            chasepayCache(CACHE_KEY_CARD_LIST_DATA,cardListData);
            return cardListData;
        }
    }
};