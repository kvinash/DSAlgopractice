 let secondHigh = (A) => {
            let bigNum = 0;
            let secondBigNum = 0;
            for(let count=0;count<A.length;count++){
                    if(A[count]>bigNum){
                      secondBigNum = bigNum;
                        bigNum = A[count];
                        
                    }
                    if(secondBigNum< A[count] && A[count] <bigNum){
                      secondBigNum = A[count] 
                    }

                    console.log(bigNum, secondBigNum)
            }
            return secondBigNum
	}


secondHigh([ 927, 707, 374, 394, 279, 799, 878, 937, 431, 112 ])