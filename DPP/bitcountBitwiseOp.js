let bitcount = (A)=> {
                
              let moduloNum = 1000000007;
                let totalBit = 0;
                for(let i=1; i <=A;i++){
                 for(let j=0;j<32;j++){
                   if(i & 1 << j){
                     totalBit++
                   }
                 }
                }
              
                return totalBit%moduloNum
              
	}

  console.log(bitcount(10))