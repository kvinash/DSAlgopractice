function sym(...args) {
 // console.log(args)
 let prevArray = args[0]; 
 let count = 1;
 for(let counter = 0;counter<args.length;counter++){
   args[counter] = args[counter].sort() 
 }
  console.log(args)

  for(let argsCount = 1 ; argsCount<args.length;argsCount++){
     prevArray = mergeTwoArray(prevArray,args[argsCount] )
  }

  return prevArray

}
let mergeTwoArray = (set1, set2) => {
    set1 = set1.sort();
    set2 = set2.sort();
    let tempArray = [];
    let set1Len = set1.length;
    let set2Len = set2.length;
    let set1Counter = 0;
    let set2Counter = 0;

    while (set2Counter<set2Len || set1Counter<set1Len) {
     
      if(set2Counter<set2Len && set1Counter >= set1Len){
        tempArray.push(set2[set2Counter])
        
         set2Counter++
         set1Counter++
          while(set2[set2Counter] ==set2[set2Counter-1] ){
            set2Counter++
          }
         continue;
      }
      if(set1Counter<set1Len && set2Counter >= set2Len){
        tempArray.push(set1[set1Counter])
         set1Counter++
         set2Counter++
         while(set1[set1Counter] ==set1[set1Counter-1] ){
            set1Counter++
          }
         
         continue;
      }

      if (set1[set1Counter] > set2[set2Counter]) {
          tempArray.push(set2[set2Counter])
          set2Counter++
           while(set2[set2Counter] ==set2[set2Counter-1] ){
            set2Counter++
          }
          continue
      } 

       if (set2[set2Counter] > set1[set1Counter]) {
          tempArray.push(set1[set1Counter])
          set1Counter++
         while(set1[set1Counter] ==set1[set1Counter-1] ){
            set1Counter++
          }
         
          continue
      } 
      console.log(tempArray)
       if (set2[set2Counter] == set1[set1Counter]) {
          set2Counter++
          set1Counter++
           while(set1[set1Counter] ==set1[set1Counter-1] ){
            set1Counter++
          }
           while(set2[set2Counter] ==set2[set2Counter-1] ){
            set2Counter++
          }
       }
    }
   // console.log(tempArray)
    return tempArray;

  }


console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));