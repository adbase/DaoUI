import app from "./app.js";

class app2 extends app{
    constructor(){
        super();
        console.log("test 1 : this is app2 constructor");
        this.show("this is app1 show");
    }

    func(){
        console.log("this is app2 func");
    }
}

var appobj = new app2();
appobj.func();