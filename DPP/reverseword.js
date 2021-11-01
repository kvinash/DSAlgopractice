let reversesentennce = (A) => {
        
        let reverseWord = (word) => {
	    let start = 0;
	    let end = word.length-1;
	    word = word.split("");
           while(start<end){
               let temp = word[end];
               word[end] = word[start];
               word[start] = temp;
               start++
               end--
           }
           word = word.join("");
   
          return word
	}
	
	A = reverseWord(A);
  console.log(A);

	let finalstr = "";
	
	for(let i=0;i<A.length;i++){
	   let start = i;
        let end = i;
	    while(A[i]!=" "&& i<A.length){
	        i++
         	 end = i;
	    }

	   if(finalstr.length>0){
	        finalstr = finalstr+" "+reverseWord(A.substring(start, end));
	   } else {
	        finalstr = finalstr+reverseWord(A.substring(start, end))
	   }
	 
	    
	}
	
	  return  finalstr;
	
	
	}



  console.log(reversesentennce("qxkpvo  f   w vdg t wqxy ln mbqmtwwbaegx   mskgtlenfnipsl bddjk znhksoewu zwh bd fqecoskmo"))

  fqecoskmo bd zwh znhksoewu bddjk mskgtlenfnipsl   mbqmtwwbaegx ln wqxy t vdg w   f  qxkpvo