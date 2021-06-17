/**
 * Given an array A of size N, groot wants *you to pick 2 indices i and j such that
 *1 <= i, j <= N
 *A[i] % A[j] is maximum among all possible pairs of (i, j).
Help Groot in finding the maximum value of A[i] % A[j] for some i, j.
 */


let maxmod = (A) => {
     A = A.sort((a,b)=>a-b);
   //  console.log(A);
     let max = A[A.length-1];
    for(let i=A.length-2;i>=0; i--){
    let mod = A[i]%max
    if(mod>=A[i]){
      console.log("yaha aaya")
      console.log(mod);
      return mod
    }
    
    }
    console.log("0 return krega")
    return 0
	}


maxmod([5,5,5]);