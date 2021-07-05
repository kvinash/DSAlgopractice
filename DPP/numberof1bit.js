let numberof1bit = (A) => {
 A = A.sort((a,b)=>{
	       return b - a
	   })
console.log(A)
	   let biggestOdd = -1;
	   let secondBiggestOdd = -1;
	   let biggestEven = -1;
	   let secondBiggestEven = -1;
	   
	   for(let i = 0;i<A.length;i++){
       
	       if(A[i]%2==0){

            if(secondBiggestEven < 0 && biggestEven >= 0){
	               secondBiggestEven = A[i]
	           }
	           if(biggestEven<0){
	               biggestEven = A[i]
	           }
	          
	       } else {
           if(secondBiggestOdd<0 && biggestOdd>0 ){
	               secondBiggestOdd = A[i];
	           }
	           if(biggestOdd<0){
	               biggestOdd = A[i]
	           }
	           
	       }
	}
    if(biggestEven<0){
             biggestEven = 0;
           }
            if(secondBiggestEven<0){
             secondBiggestEven = 0;
           }
           if(biggestOdd<0){
             biggestOdd = 0;
           }
            if(secondBiggestOdd<0){
             secondBiggestOdd = 0;
           }
  console.log(biggestEven,secondBiggestEven, biggestOdd, secondBiggestOdd )

	       if(biggestEven >=0 && secondBiggestEven >=0 && biggestOdd>=0 && secondBiggestOdd>=0){
           
	           let finalEvenSum = biggestEven + secondBiggestEven;
	           let finalOddSum = biggestOdd + secondBiggestOdd;
             console.log(finalEvenSum,finalOddSum, secondBiggestOdd,secondBiggestEven );
	            return finalEvenSum > finalOddSum ? finalEvenSum : finalOddSum
	           
	       }

}


  console.log(numberof1bit([2,3,4]))