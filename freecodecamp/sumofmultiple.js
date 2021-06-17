function multiplesOf3and5(number) {

 number= number-1;
  let giveMeSumOfMultiple = (number, multiple) => {
    
       let totalTerms = Math.floor(Number(number)/Number(multiple));
       let sum = (totalTerms/2)*((2*multiple)+(totalTerms-1)*multiple)

       return sum
  }

 let finalSum = giveMeSumOfMultiple(number,3) + giveMeSumOfMultiple(number,5) - giveMeSumOfMultiple(number,15)
return finalSum;

}
console.log(multiplesOf3and5(1000))


