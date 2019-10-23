class CacheAPI {
    constructor(){
        this.data = new Map();
        this.init();
    }
    init(){
        this.data.set("navdata",navdata);
        this.data.set("routerMap", routerMap);
    }
    get(key){
        return this.data.get(key)
    };
    set(key,value){
        this.data.set(key,value);
    }
}


const routerMap=[
        "home",
        "list",
        "detail",
];
const navdata=[
    {
        name:"所有商品",
        url:"/test1",
        sub: [
            {
                name:"list1",
                url:"/list1",
            },
            {
                name:"list2",
                url:"/list2",
            }
        ]
    },
   {
        name:"解决方案",
        url:"/test2",
        sub:[
            {
                name:"list3",
                url:"/list3",
            },
            {
                name:"list4",
                url:"/list4",
            }
        ]
    },
    {
        name:"发布商品",
        url:"/public",
    }
];