let sievearray = (A) => {
            let givePrimeArray = (max) => {
                let sieveArry = [];
                sieveArry[0]=0;
                sieveArry[1]=1;
                let primArray = [];
                for(let i=2;i<max;i++ ){
                    let counter = i;
                    if(!sieveArry[i]){
                      //console.log("ii", i);
                        primArray.push(i);
                             while(counter<max){
                        if(counter%i==0 && !sieveArry[counter]){
                            sieveArry[counter] = i; 
                        }
                        counter++
                     }
                    }
                }
                
                return primArray;
                
              
            }
            
            
     A =  A.sort((a,b)=>{
          return a-b
      })
      
      let max = A[A.length-1];
      console.log(A);
      let primeArray = givePrimeArray(max);
      console.log(primeArray)
      let previousj = 0
      let totalCount = 0;
      for(let i=0;i<primeArray.length;i++){
          let count = 0;
          while(A[previousj]<primeArray[i]){
             console.log(A[previousj], primeArray[i])
              count++
              previousj++
             
          }

          totalCount = totalCount + Math.pow(2,count)-1
      }

      console.log("totalCount", totalCount)

}


sievearray([2,4,6])

