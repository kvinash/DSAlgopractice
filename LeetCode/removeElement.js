/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let nums = [0,1,2,2,3,0,4,2];
let val = 2;

var removeElement = function(nums, val) {
    let k = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        console.log(i);
        if (nums[i] === val) {
            k = k - 1;
            nums[i] = "_";
        }

    }
    console.log("Accurance", k);

    let underScoreIndex = -1;
    console.log("nums", nums, k);
    for (let j = 0; j < nums.length; j++) {
        console.log("j=>", j);
        if (nums[j] == "_") {
            underScoreIndex = j;
        }
        // while(underScoreIndex>=0 && underScoreIndex<k){
        console.log("underscore", underScoreIndex, "k", k);
        if (underScoreIndex >= 0 && underScoreIndex < k) {


            for (let y = underScoreIndex; y < nums.length - 1; y++) {
                console.log("y=>",y,"array length", nums.length);
                if (y == 10) {
                    return nums.length;
                }
                let temp = nums[y];
                nums[y] = nums[y + 1];
                nums[y + 1] = temp;
                if(temp==="_"){
                    y=y-1;
                }
                console.log("nums", nums);
            }

            underScoreIndex = -1;
        }
        // }
    }
    return k;
}
removeElement(nums, val);