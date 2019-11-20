const ChasePaySettings = class ChasePaySettings {
    getDepartmentList(){
        let cardListData = chasepayCache(CACHE_SETTINGS_DEPARTMENT_LIST);
        if (cardListData) {
            return cardListData;
        }
        else {
            cardListData = [
                {
                    id: "001",
                    title: "部门1",
                    img: "https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                    content: {
                        "员工数量": "1",
                        "部门经理": "员工1",
                    }
                },
                {
                    id: "002",
                    title: "部门2",
                    img: "https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    content: {
                        "员工数量": "10",
                        "部门经理": "员工2",
                    }
                }

            ];
            chasepayCache(CACHE_SETTINGS_DEPARTMENT_LIST, cardListData);
            return cardListData;
        }
    }

    getUserList(){
        let cardListData = chasepayCache(CACHE_SETTINGS_DUSER_LIST);
        if (cardListData) {
            return cardListData;
        }
        else {
            cardListData = [
                {
                    id: "001",
                    title: "员工1",
                    img: "https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                    content: {
                        "员工编号": "1",
                        "职位": "部门经理",
                        "所属部门":"部门1",
                    }
                },
                {
                    id: "002",
                    title: "部门2",
                    img: "https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                    content: {
                        "员工编号": "2",
                        "职位": "部门经理",
                        "所属部门":"部门2",
                    }
                }

            ];
            chasepayCache(CACHE_SETTINGS_DUSER_LIST, cardListData);
            return cardListData;
        }
    }

}