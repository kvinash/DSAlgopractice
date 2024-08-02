let A = "bebdeeedaddecebbbbbabebedc";
let B = "abaaddaabbedeedeacbcdcaaed";
let lcs = (A, B) =>{
         
         let dp = [];
         A = A.split("");
         B = B.split("");
         for(let i=0;i<A.length;i++){
             dp[i]=[];
             for(let j=0;j<B.length;j++){
            
                 if(A[i]==B[j]){
                     if(i-1<0 || j-1<0){
                         dp[i][j] = 1;
                     } else {
                         dp[i][j] = 1+dp[i-1][j-1];
                     }
                 } else {
                   if(j-1<0 && i-1<0){
                       dp[i][j] = 0
                   }
                    if(j-1<0 && i-1>=0){
                       dp[i][j] = dp[i-1][j]
                    }
                    if(i-1<0 && j-1>=0){
                       dp[i][j] = dp[i][j-1]
                    }

                    if(i-1>=0 && j-1>=0){
                        dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j] )
                    }
                 }

                
             
             }
           console.log("=>", dp[i]);
         }
  //console.log(dp)
        return dp[A.length-1][B.length-1];
	}

lcs(A,B);
