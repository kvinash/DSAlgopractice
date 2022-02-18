let sameLinePoint = (A, B) => {

    let gcd = (A,B) => {
      console.log(A,B);
      if(B==0){
        return A;
      }
     return gcd(B, A%B );
    }

  let json = {};
 
  for(let i=0;i<A.length;i++){

    for(let j=i+1;j<A.length;j++){
      if(A[i]==A[j] && B[i]==B[j]){
        continue;
      }
      let num = A[i]-A[j];
      let den = B[i]-B[j];
        let gc = gcd(num,den);
        if(json[`${num/gc}_${den/gc}`]){
          json[`${num/gc}_${den/gc}`]++
        } else {
       json[`${num/gc}_${den/gc}`] = 1;
       }
    }
	}

  console.log(json);
}
