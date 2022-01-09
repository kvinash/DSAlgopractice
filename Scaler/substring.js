let fun = (A, B)=> {
       let json = {};
	     let arra = B.split('');
       let mod = B.length%A;

  if(mod>0){
    return -1
  }
	   arra.map((eachEle)=>{
		   	  if(json[eachEle]){
				   json[eachEle]++;
			   } else {
				   json[eachEle] = 1;
			   }
      
	   })

	 for(key in json){
		 if(json[key]%A>0){
			 return -1;
		 }
	 }
	return 1
	}

fun(2, "bbaabb");