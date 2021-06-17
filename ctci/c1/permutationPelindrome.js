let s1 = "das das";




let isPalindrome = (s1) => {
 let obj = {};
 let isPalindrome = true
let arrS = s1.split("");
for(let i=0; i<arrS.length;i++){

   if(obj[arrS[i]]){
     obj[arrS[i]]++
  
   } else {
     obj[arrS[i]] = 1
   }
}
let spaceCount = obj[' '];
let finalLength = arrS.length - spaceCount;
console.log(arrS, obj, finalLength)
if(finalLength%2==0){
  console.log(arrS, obj)
  for(let key in obj){
    if(obj[key]%2!=0){
      if(obj[key]!=''){
        isPalindrome = false
       return isPalindrome
      }
       
    }
  }
} else {
  console.log("odd",obj)
  let oneOdd = false;
   for(let key in obj){
     if(key!=' '){
       console.log(key)
       if(obj[key]%2!=0){
      if(oneOdd){
        isPalindrome = false
        return false
      } else {
        oneOdd = true
      }
    }
     }
    
  }
}
return isPalindrome;
}

console.log(isPalindrome("tact boa"))