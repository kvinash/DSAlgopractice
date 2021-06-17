let merge = (array1, array2)=>{
    let finalArray = [];
    let counter1 = 0;
    let counter2 = 0;
    while(array1.length>counter1 && array2.length>counter2){
      if(array1[counter1] >=array2[counter2]){
          finalArray.push(array2[counter2])
          counter2++
      } else {
         finalArray.push(array1[counter1])
          counter1++
      }
    }
    console.log(counter1, counter2)
    while(counter1<array1.length){
        finalArray.push(array1[counter1])
        counter1++
    }
    while(counter2<array2.length){
        finalArray.push(array2[counter2])
        counter2++
    }
    return finalArray;
  }

  function mergeSort(array) {
  // Only change code below this line
 
  let start = 0;
  let end = array.length;
  console.log("1", array);
if(start==end-1)
return array

    let mid  = Math.floor((start+end)/2);
    let tempArr1 = array.slice(start, mid);
    let tempArr2 = array.slice(mid, end);
    console.log(tempArr1, tempArr2);
    let list1 = mergeSort(tempArr1);
    let list2 =mergeSort(tempArr2);
    console.log("merge list", merge(list1,list2))
    return merge(list1, list2)
  

  
  // Only change code above this line
}

console.log(mergeSort([5,4,3,2,1]));


// console.log(merge([1,5,10,15],[2,4,5,16,24,35]));