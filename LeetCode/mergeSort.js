/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let nums1 = [2, 0];
let nums2 = [1];
let m = 1;
let n = 1;

var merge = function(nums1, m, nums2, n) {

    //I have to define a end index for nums1 and nums2

     let endIndex = nums1.length - 1;
        let nums2Iteration = n - 1;
        let nums1Iteration = m - 1;
    let z = 0;
       console.log("nums1Iteration", nums1Iteration)
        if (m==0) {
            console.log(nums2)
            while(nums2Iteration>-1){
              nums1[endIndex]  = nums2[nums2Iteration];
              nums2Iteration--;
              endIndex--;
            }
            return nums1;
        } else {
            console.log("idharaaya")
             while (nums2Iteration >= 0 && nums1Iteration>=0) {
                 if(z==50){
                     return 0;
                 }
                 z++;
                 console.log("nums2Iteration", nums2Iteration);
                 console.log("nums1Iteration", nums1Iteration);
                 console.log("nums2[nums2Iteration]", nums2[nums2Iteration]);
                 console.log("nums1[nums1Iteration]", nums1[nums1Iteration]);
                 console.log("endIndex", endIndex);
                 console.log("----------------")
            if (nums2[nums2Iteration] > nums1[nums1Iteration]) {
                console.log("1")
                nums1[endIndex] = nums2[nums2Iteration];
                nums2Iteration--;
                endIndex--;
            } else if (nums2[nums2Iteration] < nums1[nums1Iteration]) {
                 console.log("2")
                nums1[endIndex] = nums1[nums1Iteration];
                nums1Iteration--;
                endIndex--;

            } else if (nums2[nums2Iteration] == nums1[nums1Iteration]) {
                 console.log("3")
                nums1[endIndex] = nums2[nums2Iteration];
                endIndex--;
                nums2Iteration--;
                nums1[endIndex] = nums1[nums1Iteration];
                endIndex--;
                nums1Iteration--;
            }
            console.log("nums1", nums1);
         //
        }

             while(nums2Iteration>=0 && endIndex>=0){
                 nums1[endIndex] = nums2[nums2Iteration];
                 nums2Iteration--;
                 endIndex--;
             }
            console.log("answer", nums1);
        return nums1;
        }
};
merge(nums1, m, nums2, n);

