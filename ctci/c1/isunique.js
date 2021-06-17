let  s = "qwertyuiopasdfgg";

let isunique = (stringS) => {
  let arrayS = stringS.split("");
  let uniqueObj = {};
  for(let i=0;i<arrayS.length;i++){
    if(arrayS[arrayS[i]]){
      return false
    } else {
      arrayS[arrayS[i]] = true
    }
  }
  return true
}

console.log(isunique(s))