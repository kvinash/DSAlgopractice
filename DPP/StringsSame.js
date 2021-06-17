let stringSame = (A) => {
	       let oneCount =0 ;
	       let zeroCount = 0;
	       let sameStringCount = 0;
            for(let count=0;count<A.length;count++){
              
                console.log(A[count])
               if(A[count]=='0'){
                   zeroCount++
               }
               if(A[count]=='1'){
                   oneCount++
               }
                 console.log(zeroCount, oneCount)
               if(zeroCount==oneCount){
                   sameStringCount++
                   zeroCount =0 
                   oneCount =0
               }
               console.log(sameStringCount)
            }
            console.log(sameStringCount)
            return sameStringCount
	}


stringSame("00100000100101111111")