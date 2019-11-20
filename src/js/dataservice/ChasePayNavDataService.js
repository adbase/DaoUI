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
                            icon:"",
                        },
                        {
                            name:"商品管理",
                            url:"/listing",
                            icon:"",
                        },
                        {
                            name:"采购",
                            url:"/purchase",
                            icon:"",
                        },
                        {
                            name:"库存",
                            url:"/stock",
                            icon:"",
                        },
                        {
                            name:"销售",
                            url:"/sell",
                            icon:"",
                        },
                        {
                            name:"设置",
                            url:"/settings",
                            icon:"",
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