let prevSmaller = (A) => {
    let smallNum = [];
    let resultArr = [];
    let peek = (Arr) =>{

        if(Arr.length>0){
            return Arr[Arr.length-1];
        } else {
            return null;
        }
        
    }
    for(let i=0;i<A.length;i++){
        if(i==0){
            resultArr.push(-1);
            smallNum.push(A[i]);
          continue;
        }
     
//console.log(smallNum, peek(smallNum));
                while(peek(smallNum)!==null && peek(smallNum)>A[i]){
                    smallNum.pop();
                }
                if(smallNum.length>0){
                    resultArr.push(peek(smallNum));
                  smallNum.push(A[i]);
                } else {
                    resultArr.push(-1);
                    smallNum.push(A[i]);
                }
        
    }
    return resultArr;
}

let A = [ 34, 35, 27, 42, 5, 28, 39, 20, 28 ]

console.log(prevSmaller(A));