var menu = [
    {id: 1, name: "办公管理", pid: 0 ,
        children:[
            { id: 2, name: "请假申请", pid: 1,
                hildren:[
                    { id: 4, name: "请假记录", pid: 2 },
                ],
            },
            { id: 3, name: "出差申请", pid: 1},
        ]
    },
    {id: 5, name: "系统设置", pid: 0 ,
        children:[
            { id: 6, name: "权限管理", pid: 5,
                hildren:[
                    { id: 7, name: "用户角色", pid: 6 },
                    { id: 8, name: "菜单设置", pid: 6 },
                ]
            },
        ]
    },
];