function Stack() {
this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.peek = function () {
    return this.storage[this.count - 1];
  }

  this.size = function () {
    return this.count;
  }
}

let calculate = (operandA, operandB, operator) => {
  let result = 0;
  switch(operator){
    case "+"  : 
      result = eval(operandB) + eval(operandA);
      break;
    case "-"  : 
      result = eval(operandB) - eval(operandA);
      break;
    case "/"  : 
      result = eval(operandB) / eval(operandA);
      break;
    case "*"  : 
      result = eval(operandB) * eval(operandA);
      break;
  }

  return result;
  
}
let A =  [ "4", "13", "5", "/", "+" ];
// console.log(forInfix(A));

let forInfix = (arrA) => {
  
  let stackSol = new Stack();

  for(let i=0;i<arrA.length;i++){
console.log(stackSol.storage, arrA[i])
    if(stackSol.size==0){
        stackSol.push(arrA[i]);
      continue;
    }
    if(stackSol.size!=0){
    if(arrA[i]=="+" ||arrA[i]=="*" || arrA[i]=="/" || arrA[i]=="-" ){
       let operandA = stackSol.pop();
       let operandB = stackSol.pop();
       stackSol.push(calculate(operandA, operandB, arrA[i]))
    }else {
      stackSol.push(arrA[i])
    }
  } 
    
}
  return stackSol.pop();
}
console.log(forInfix(A));