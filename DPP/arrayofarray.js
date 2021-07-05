let arrayofarray = (A) => {
	      let mainArr = [[1]];
        for(let i = 1 ; i < A ; i++){
          mainArr.push([...mainArr[i-1],i+1]);
        }
        return mainArr
	}
arrayofarray(3)