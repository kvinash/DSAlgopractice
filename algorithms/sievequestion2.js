let sieve =(A)=>{
        //sieve algorithm
        let sieveArray = [];
        sieveArray[0]=[]
        sieveArray[0].push(0)
        sieveArray[1]=[]
        sieveArray[1].push(1)
        let primeArray = [];
        let finalCount = 0;
        for(i=2;i<=A;i++){
            if(!sieveArray[i]){
                for(count=i;count<=A;count++){
                    if(!sieveArray[count]&&count%i==0){
                      sieveArray[count]=[]
                        sieveArray[count].push(i)
                    } else if(sieveArray[count] && count%i==0){
                        sieveArray[count].push(i);
                    }
                }
            } 
            if(sieveArray[i].length==2){
              finalCount++
            }
            
        }
         console.log(sieveArray)
        console.log(finalCount)
	}

  sieve(12)