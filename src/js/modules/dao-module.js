class DaoModule extends HTMLElement{
    constructor(){
        super();
    }

    _getData(data){
        let key ;
        try
		{
		    key = JSON.parse(data); 
		}
        catch(e)
        {
        }
        return ChasePayDataService.get(key);
    }
    _render(){

    }
};