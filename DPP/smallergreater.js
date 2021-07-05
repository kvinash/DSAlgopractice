let smallgreat = (A) => {
       A =  A.sort((a,b)=>{
         return a - b
       });
       let totalCount = 0;
       let skip = 0;
      console.log(A)
       for(let i=1;i < A.length;i++){
           if(A[i]>A[i-1]){
               if(A[i+1]){
                if (A[i]<A[i+1]){
                   totalCount  = totalCount + 1 + skip
                   skip = 0;
               } else {
            
                   skip++
               }
               } else {
                   totalCount = totalCount + skip
                   skip = 0 
               }
              
           } else {
               if(skip>0){
                   skip++
               }
           }
       }
       console.log(totalCount)
       return totalCount
	}


  smallgreat([ 241, 710, 751, 904, 264, 955, 413, 163, 914, 173, 940, 164, 494, 545, 750, 685, 665, 619, 99, 953, 759, 783, 534, 706, 771, 570, 471, 543, 658, 674, 634, 766, 931, 40, 244, 209, 360, 517, 962, 420, 155, 711, 845, 646, 117, 641, 458, 790, 620, 46, 837, 560, 374, 510, 133, 214, 322, 275, 342, 460, 642, 153, 751, 317, 71, 8, 256, 195, 256, 469, 16, 986, 339, 753, 773, 921, 638, 529, 333, 73, 393, 985, 846, 175, 548, 694, 560, 174, 710, 478, 316 ])