let findSmallGcd = (A, B, C) => {
  
	    if(A<B || A<C){
	        return 0
	    }
            let intCount = 0;
            let smallNum = 0;
            let bigNum = 0;
            
            if(B>C){
                bigNum = B;
                smallNum = C;
            } else {
                bigNum = C;
                smallNum = B;
            }
            let num = bigNum; 
          
            let counter=1;
            while(num<=A){
                if((bigNum*counter)%smallNum==0 && bigNum<=A){
                   intCount++ 
                }
                num = bigNum*counter;
                counter++
                console.log(num, counter);
            }
            return intCount;
          
}

console.log(findSmallGcd(81991, 2549, 7));