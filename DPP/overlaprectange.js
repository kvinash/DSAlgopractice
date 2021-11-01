let overlap = (A, B, C, D, E, F, G, H)=> {
               
              let xRec1Set = [];
              let xRec2Set = [];
              let yRec1Set = [];
              let yRec2Set = [];
              
              
            //   -10000 <= A < C <= 10000

            //   -10000 <= B < D <= 10000

            //   -10000 <= E < G <= 10000

            //   -10000 <= F < H <= 10000
              
              
              if(A>C){
                 while(A>=C){
                     xRec1Set.push(A)
                     A--
                 } 
              } else {
                   while(C>=A){
                     xRec1Set.push(C)
                     C--
                 } 
              }
              
               if(E>G){
                 while(E>=G){
                     xRec2Set.push(E)
                     E--
                 } 
              } else {
                   while(G>=E){
                     xRec2Set.push(G)
                     G--
                 } 
              }
              
              if(B>D){
                 while(B>=D){
                     yRec1Set.push(B)
                     B--
                 } 
              } else {
                   while(D>=B){
                     yRec1Set.push(D)
                     D--
                 } 
              }
              
              
              if(F>H){
                 while(F>=H){
                     yRec2Set.push(F)
                     F--
                 } 
              } else {
                   while(H>=F){
                     yRec2Set.push(H)
                     H--
                 } 
              }
console.log(xRec1Set, xRec2Set, yRec1Set, yRec2Set)
              
 let xintersection = xRec1Set.filter(x => xRec2Set.includes(x));
 let yintersection = yRec1Set.filter(x => yRec2Set.includes(x));
console.log(xintersection, yintersection);
              
	}


  overlap(-7,-85,9,50,9,-3,91,88);