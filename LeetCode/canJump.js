/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reachIndex = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= reachIndex) {
            reachIndex = i;
        }

    }
    if (reachIndex == 0) {
        return true
    }
    return false;

}