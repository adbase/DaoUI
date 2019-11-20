const ChasePayWareHouse = class {

    getWareHouseList() {
        let cardListData = chasepayCache(CACHE_KEY_WAREHOUSE_LIST);
        if (cardListData) {
            return cardListData;
        }
        else {
            cardListData = [
                {
                    id: "001",
                    title: "仓库1",
                    img: "https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                    content: {
                        "商品数量": "1175",
                        "地址": "xxxabcave.LA,CA,9xxxx",
                    }
                },
                {
                    id: "002",
                    title: "仓库2",
                    img: "https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    content: {
                        "商品数量": "100",
                        "地址": "xxx省xx市xx街x号",
                    }
                }

            ];
            chasepayCache(CACHE_KEY_WAREHOUSE_LIST, cardListData);
            return cardListData;
        }
    }
};