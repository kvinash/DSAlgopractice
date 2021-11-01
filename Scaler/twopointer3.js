let A =  [ 1, 2, 6, 6, 7, 9, 9 ];
let B = 13;

let twopoint = (A,B) =>{

  let freqJson = {};
        let count = 0;
    
 //created a frequency json
        for(let i=0; i<A.length; i++){
          if(freqJson[A[i]]){
              freqJson[A[i]] += 1;
            } else {
              freqJson[A[i]]=1;
          }
         }

         for(let i=0; i<A.length; i++){
           console.log(freqJson)
            if(freqJson[B-A[i]]>0){
              if(B-A[i]!=A[i]){
                count = (count + freqJson[B-A[i]])%1000000007;
              } else {
    
                count = (count + freqJson[B-A[i]] - 1)%1000000007;
              }
                
                freqJson[A[i]]--;
            }
         }

        return count;
}

console.log(twopoint(A,B));