let A = "{([])}";
A = A.split("");
console.log(A)
    let stack = [];
                    for(let i=0;i<A.length;i++){
                      //console.log(A[i])
                      
                        if(A[i]=='{' || A[i]=='('  || A[i]=='[' ){
                                stack.push(A[i]);
                                continue;
                        }

                        if(A[i]=='}' || A[i]==')'  || A[i]==']'){console.log("andar aaya")
                                let ele = stack.pop();
                          console.log(ele);
                                if(A[i]=='}'){
                                 if(ele=='{'){
                                        continue;
                                 } 
                                  return 0;
                                }
                                if(A[i]==')'){
                                     if(ele=='('){
                                        continue;
                                 } 
                                  return 0;
                                }
                                if(A[i]==']'){
                                      if(ele=='['){
                                        continue;
                                 } 
                                  return 0;
                                }
                        }
                    }
    console.log(stack);
                    if(stack.length>0){
                        return 0
                    } else {
                        return 1
                    }