function selectionSort(array) {
  // Only change code below this line
  for(let start =0 ;start<array.length;start++){
    
    for(let counter = start+1;counter<array.length;counter++){
     if(array[start]>array[counter]){
      let temp = array[start]
        array[start] = array[counter];
        array[counter] = temp
     }
    
    }
console.log(array)
  }
  return array;
  // Only change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);