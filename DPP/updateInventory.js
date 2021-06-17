function updateInventory(arr1, arr2) {
    let largeLength = arr1.length>arr2.length? arr1.length : arr2.length;

    let finalObject = {};
 
    for(let i=0;i<largeLength ; i++){
  
       if(arr1[i]&& arr1[i][1]){
if(finalObject[arr1[i][1]]){
            finalObject[arr1[i][1]] = finalObject[arr1[i][1]] + arr1[i][0];
        } else {
 finalObject[arr1[i][1]] =  arr1[i][0];
        }
       }
        if(arr2[i]&&arr2[i][1]){
if( finalObject[arr2[i][1]]){
            finalObject[arr2[i][1]] = finalObject[arr2[i][1]] + arr2[i][0];
        } else {
          finalObject[arr2[i][1]] =  arr2[i][0];
        }
        }

        
    }
    arr1=[];
    
    let sortKeyArray = Object.keys(finalObject).sort()

    for(let index=0;index< sortKeyArray.length ; index++){
      let key = sortKeyArray[index];
      arr1.push([finalObject[key],key])
       
    }
console.log(arr1)
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

Math

/**
 * Test cases
 *The function updateInventory should return an array.

Passed
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return an array with a length of 6.

Passed
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

Passed
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

Passed
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

Passed
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]. 
 */