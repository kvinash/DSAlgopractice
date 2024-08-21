let anagram =  function(A){

           let strArr = A.split("");
    console.log(strArr, A)
           for(let i=0;i<strArr.length/2;i++){
               console.log("hahah ", strArr[i],strArr[strArr.length-i-1]);
               if(strArr[i]!=strArr[strArr.length-i-1]){
                   return 0;
               }
           }
           return 1;
  };


let ans = anagram('a');
console.log("ans", ans);