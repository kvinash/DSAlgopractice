let fun = (A)=> {
         
         let power = 1;
         let totalZero = 0;
         while(Math.pow(5, power)<=A){
           console.log(totalZero, Math.pow(5, power))
                totalZero = totalZero + (A/Math.pow(5, power))*power;
                power++
         }
         return totalZero
	}

  fun(1000)