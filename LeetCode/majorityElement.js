var majorityElement = function(nums) {
    nums.sort((a, b)=>{return b - a});
    let freq=1;
    for(let i =1;i<nums.length;i++){

       if(nums[i]==nums[i-1]){
        freq++;
       } else {
        freq=1;
       }
        if(freq>nums.length/2){
            return nums[i];
        }
    }
    return nums[0];
};
let nums =[2,2,1,1,1,2,2];

console.log(majorityElement(nums))