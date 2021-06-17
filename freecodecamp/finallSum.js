function fiboEvenSum(n) {
 let sum = 1;
 let prevSum = 1;
 let finalSum = 0;
 while(Number(sum)<Number(n)){
   if(sum==1){
     sum = sum + sum;
     
   } else {
     let tempSum = sum;
     sum = prevSum + sum;
     prevSum = tempSum
     
   }
    console.log(sum, n)
     if(sum%2==0){
       finalSum+=sum;
     }
 }
  return finalSum;
}

console.log(fiboEvenSum(8))