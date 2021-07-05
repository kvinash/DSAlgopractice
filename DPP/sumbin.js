let addBinary = (A, B) => {
       
  
       let lengthDiff = Math.abs(A.length-B.length);
       let postBinString = "";
       while(lengthDiff>0){
         postBinString= postBinString + "0";
         lengthDiff--;
       }

       if(A.length<B.length){
         A = postBinString+A;
       } else {
         B = postBinString+B;
       }
       let carry = 0;
       let resultStr = "";
 
       for(let i=A.length-1;i>=0;i--){
                let aBin  = A[i] ? A[i]:0;
                let bBin  = B[i] ? B[i]:0;
                console.log("ll", aBin, bBin, carry)
                let sumBin = Number(aBin) + Number(bBin) + Number(carry);
                if(sumBin ==2){
                    sumBin = 0;
                    carry = 1;
                }  else if(sumBin==3) {
                    carry = 1;
                    sumBin = 1;
                } else {
                  carry = 0
                }
              
                resultStr = resultStr + String(sumBin)
                  console.log("resultStr",resultStr)
	}
  console.log("carry", carry)
 if(carry){
   console.log("aaya")
  resultStr =  resultStr+"1"
 }
 console.log("dasdas", resultStr)
	return  [...resultStr].reverse().join('')
}

console.log(addBinary("1", "1"))


1001110001111010101001110