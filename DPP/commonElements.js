let commonElements = (A, B) => {
       let bigLength = A.length>B.length ? A.length : B.length
       let Amap = {};
       let Bmap = {};
       let finalArray = [];
       for(let i=0 ; i<bigLength; i++){
           if(A[i]){
              if(Amap[A[i]]){
                  Amap[A[i]]++
              } else {
                  Amap[A[i]] = 1
              }
              
           }
           if(B[i]){
               if(Bmap[B[i]]){
                   Bmap[B[i]]++
               } else {
                   Bmap[B[i]] = 1;
               }
           }
            if(A[i]){
               if(Bmap[A[i]]>0){
                   finalArray.push(A[i])
                   Amap[A[i]]--
                   Bmap[A[i]]--
                   
               }
           }
           
           if(B[i]){
               if(Amap[B[i]]>0){
                   finalArray.push(B[i])
                   Amap[B[i]]--
                   Bmap[B[i]]--
               }
           }
          
       
       }

       
      console.log(Amap, Bmap);
      console.log(finalArray)

	}

  commonElements([2,1,4,10], [3,6,2,10,10])