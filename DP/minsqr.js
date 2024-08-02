let minsqr = (A) => {
 
	   let dp = [];
  dp[0]=0;
	   for(let i=1;i<=A;i++){
          dp[i] = i;
       console.log(dp[i])
		  for(let y=1 ; y*y<=i;y++){
            console.log(dp[i], Math.min(dp[i], dp[i-(y*y)]+1))
			  dp[i] = Math.min(dp[i], dp[i-(y*y)]+1)
		  }
	   }
	   return dp[A];
}

minsqr(4);