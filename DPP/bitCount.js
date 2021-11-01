let bitcount = (A)=> {
                
              let moduloNum = 1000000007;
                let bitJson = {0:0};
                let lastHalf = 0;
                let totalBit = 0;
                for(let i=1; i <=A;i++){
                  let halfNum = Math.floor(i/2)
                    if(i%2!=0){
                       bitJson[i] = bitJson[halfNum]+1
                    } else {
                      bitJson[i] = bitJson[halfNum]
                    }
                    if(lastHalf<halfNum){
                        delete bitJson[lastHalf];
                        lastHalf = halfNum

                    }
                     totalBit+=bitJson[i]
                }
              
                return totalBit%moduloNum
              
	}

  bitcount(10)