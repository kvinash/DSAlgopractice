let gcdBigNum = (A, B) => {
            let gcd = (x, y) => {
                 if(y==0){
                     return x
                 } else {
                     return gcd(y, x%y)
                 }
            }
            
            let startNum = BigInt(A);
            let endNum = BigInt(B);
            let lastGcd = startNum;
            console.log(startNum, endNum);
            for(let i=startNum+BigInt(1); i<=endNum; i++){
                if(lastGcd==1){
                    return Number(1)
                } else {
                  console.log(lastGcd, i);
                    lastGcd = gcd(lastGcd, i);
                }
            }
            return Number(lastGcd);
	}

  console.log(gcdBigNum("678728391838182039102", "678728391838182039103"))