var chasepayCache = (function(){

    var cache = {};
	
	return function(key,value){
	  if(value)
	  {
	      cache[key] = value;
	  }
	  else
	  {
	      if(key)
		  {
		     return cache[key];
		  }
		  else
		  {
		      return cache;
		  }
	  }
	}
}())