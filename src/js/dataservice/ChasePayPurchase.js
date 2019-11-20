const ChasePayPurchase  = class ChasePayPurchase {
    // get  list
    getPurchaseList(input){
        let cardListData = chasepayCache(CHACHE_KEY_PURCHASE_LIST);
        if(cardListData)
        {
            return cardListData;
        }
        else
        {
            cardListData = [
                {
                    id:"001",
                    title:"采购单1",
                    img:"https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                    content:{
                        "商品数量":11,
                        "采购价格":"$22.23",
                    }
                },
                {
                    id:"002",
                    title:"采购单2",
                    img:"https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    content:{
                        "商品数量":1,
                        "采购价格":"$234.10",
                    }
                },{
                    id:"003",
                    title:"采购单3",
                    img:"https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    content:{
                        "商品数量":1,
                        "采购价格":"$234.10",
                    }
                },{
                    id:"004",
                    title:"采购单4",
                    img:"https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    content:{
                        "商品数量":1,
                        "采购价格":"$234.10",
                    }
                },{
                    id:"005",
                    title:"采购单5",
                    img:"https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    content:{
                        "商品数量":1,
                        "采购价格":"$234.10",
                    }
                }

            ];
            chasepayCache(CHACHE_KEY_PURCHASE_LIST,cardListData);
            return cardListData;
        }
    }
};