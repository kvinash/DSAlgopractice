let A = [ 8, 5, 1, 10, 5, 9, 9, 3, 5, 6, 6, 2, 8, 2, 2, 6, 3, 8, 7, 2, 5, 3, 4, 3, 3, 2, 7, 9, 6, 8, 7, 2, 9, 10, 3, 8, 10, 6, 5, 4, 2, 3 ];

let B = 3;


let funA = (A,B) => {
     let diffjson = {};
                let count = 0;

                A.map((eachelement) => {
                     if(diffjson[eachelement]){
                         diffjson[eachelement] += 1;
                     } else {
                          diffjson[eachelement] = 1;
                     }
                   
                    return 1;
                })

                if(B==0){
                      for(let i=0;i<A.length;i++){
                           if(diffjson[A[i]]>0){
                               count++; 
                               diffjson[A[i]] = 0;
                           }
                      }
                }

                if(B>0){
                    for(let i=0;i<A.length;i++){
                     
                    if(diffjson[A[i] - B]>0){
                       diffjson[A[i] - B]  = 0;
                       count++
                    }
                  if(diffjson[A[i] + B]>0){
                       diffjson[A[i] + B]  = 0;
                       count++
                    }
    console.log(diffjson)
                }
            }
        return count
}

console.log(funA(A,B))