let strSub = (A) => {
  let str = "";
    for(let i =0;i<A.length;i++){
     // console.log(A[i]);
      if(A[i]=="a"||A[i]=="e"||A[i]=="i"||A[i]=="o"||A[i]=="u"){
        str = str+A[i]
      }
    }

    return str
}


console.log(strSub("weqwreq"));