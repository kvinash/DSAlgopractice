let nums = [1,2,3,4,5,6,7];
let k = 3;

var rotate = function(nums, k) {
    k = k%nums.length;

    function reverse(startIndex, lastIndex){

            while(startIndex<lastIndex){
               let temp  = nums[startIndex];
                nums[startIndex] = nums[lastIndex];
                nums[lastIndex] = temp;
                startIndex++;
                lastIndex--;
            }
    }

    reverse(0,nums.length-1);
    reverse(0,k-1);
    reverse(k, nums.length-1);
};


rotate(nums, k);