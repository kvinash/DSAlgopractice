let s1 = "abcd";
let s2 = "dabc";

let checkPermutation = (s1, s2) => {
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
 let isPermute = false
 let s1Obj = {};
  if(s1Arr.length!=s2Arr.length){
     isPermute = false
  }
  for(let i=0; i<s1Arr.length;i++){
    s1Obj[s1Arr[i]] = true;
  }
console.log(s1Obj)
  for(let i=0; i<s2Arr.length;i++){

    if(!s1Obj[s2Arr[i]]){
      isPermute = false
      return isPermute
    }
      isPermute = true
  }

  return isPermute;
}

console.log(checkPermutation(s1, s2))