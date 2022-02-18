let A = [ 15, 2, 48, 19, 28, 22, 44, 2, 32, 46, 46, 24, 1, 23, 49, 26, 23, 17, 17, 46, 4, 30, 40, 36, 20, 5 ];
let B = 82;
	let solve = (A, B)=> {

      let array = [];
      let i=0,j=0;
      let sum = A[i];
         array.push(A[i]);
      while(i<A.length && j<A.length){
        console.log(i,j,sum)
        if(i===j){
          console.log("aaya")
          if(sum==B){
            console.log(array)
            return;
          }
          if(j<A.length){
            j++;
            sum = sum + A[j];
               array.push(A[j]);
          }
        }

        if(i<j){
          if(sum<B && j< A.length){
             j++;
                sum = sum + A[j];
             array.push(A[j]);
          
          } else if(sum>B){
            sum = sum - A[i];
            i++;
            array.shift();
          }

          if(sum===B){
            console.log("inside",i,j)
            console.log(array)
            return;
          }
        }
      }  
    
      return;
  }

  solve(A,B)
