var ChasePayDataService = (function(){
	
	function getChasePayDataByKey(input)
	{
		//let f = eval(key);
        //let a = f();
        //return a;	
		let className = input.className;
		let methodName = input.methodName;
		let condtioMap = input.condtioMap;
		let classObject = eval(className);
        let myClass = new classObject();
		let data = myClass[methodName](condtioMap);
        return data;	
	}
	

	return {
		get: getChasePayDataByKey,
	}
	
}());