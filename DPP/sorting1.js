let sorting = (A, B) => {
       let finalArray = [];
       for(let i=0; i<B.length;i++){
           let remainingCost = B[i];
           let count = 0;
           for(let j=0;j<A.length; j++){
            
                if(A[j]<=remainingCost){
                    count++
                    remainingCost = remainingCost - A[j];
                } 
                  if(j==A.length-1||A[j]>remainingCost){
                    finalArray.push(count);
                    j = A.length;
                    console.log(finalArray)
                  }
                    
                
           }
       }
       return finalArray;
       
	}

let A =  [ 23, 36, 58, 59 ];
let B = [ 3, 207, 62, 654, 939, 680, 760 ];
  console.log(sorting(A,B))