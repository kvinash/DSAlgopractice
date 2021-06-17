var subsetXORSum = function(nums) {

    const getAllSubsets =(nums) => nums.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

    let subSetsArray = getAllSubsets(nums);
    let finalSum = 0; 
    for(let i=0;i<subSetsArray.length;i++){
        console.log(subSetsArray[i])
        let eachSubSetSum = 0
        for(let j=0;j<subSetsArray[i].length;j++){
          console.log(eachSubSetSum, subSetsArray[i][j],eachSubSetSum ^ subSetsArray[i][j] )
          if(subSetsArray[i][j]!=0 && j==0){
            eachSubSetSum = subSetsArray[i][j]
          } else {
            console.log(eachSubSetSum, subSetsArray[i][j],eachSubSetSum ^ subSetsArray[i][j] )
 eachSubSetSum = eachSubSetSum ^ subSetsArray[i][j]
          }
           
        }
        finalSum = finalSum + eachSubSetSum
    }
    return finalSum
};

console.log(subsetXORSum([3,4,5,6,7,8]))