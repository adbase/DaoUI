var ChasePayDataService = (function(){
	
	function getChasePayDataByKey(input)
	{
		//let f = eval(key);
        //let a = f();
        //return a;

		let className = input.className;
		let methodName = input.methodName;
		let condtionMap = input.condtionMap;
		let classObject = eval(className);
        let myClass = new classObject();
        console.log("ChasePayDataService : " +input.methodName);
		let data = myClass[methodName](condtionMap);
        return data;	
	}
	

	return {
		get: getChasePayDataByKey,
	}
	
}());