let sieveapp = (A,B) => {
            //create sieve algorithm
             //create sieve algorithm
            let primeNum = [];
            let resultAarray = []
            let arrayobject = {};
            primeNum[0]= 0;
            primeNum[1]= 1;
            let largeNum = 1000000;
            let min = 0;
            
  for(let i=0;i<B.length;i++){
       if(B[i]>min){
         min = B[i]; 
      }
      arrayobject[B[i]] = 1;
  }
  
  let minDivisor = Math.floor(1000000/min);

  for(let i = 2;i<1000000;i++) {
    if(!primeNum[i]){
       primeNum[i] = i;
       let counter = i;
      multiple = counter * i;
      while (multiple <= 1000000) {
      
         
        if (!primeNum[multiple]) {
          
            primeNum[multiple] = i;
             if(arrayobject[i]){
          
            arrayobject[i]++
        }
        }
         counter++
         multiple = counter * i;
      }
     
    }

            }
            
            
            for(let i=0;i<B.length;i++){
                    resultAarray[i] = arrayobject[B[i]]
            }
       console.log(resultAarray)
            return resultAarray
}


sieveapp(1, [11])