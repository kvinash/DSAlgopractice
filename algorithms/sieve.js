let sieveFunction = (num) => {

  //create sieve algorithm
 let primeNum = [];
  primeNum[0]= 0;
  primeNum[1]= 1;
  let largeNum = num;

  for(let i = 2;i<largeNum;i++) {
    if(!primeNum[i]){
       primeNum[i] = i;
       let counter = i;
      multiple = counter * i;
      while (multiple <= largeNum) {
         console.log(multiple, largeNum, counter)
        if (!primeNum[i * counter]) {
            primeNum[i * counter] = i;
        }
         counter++
         multiple = counter * i;
      }
    }

            }

            console.log(primeNum)
}

sieveFunction(1000)