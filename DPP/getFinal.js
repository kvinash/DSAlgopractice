let	getFinal = (A, B)=> {

                while(A!=B && A!=0 && B!=0){
                    if(A>B){
                       A = A - B
                    } else {
                       B = B - A
                    }
                    console.log(A, B);
                }
                return A+B;
	}     


  getFinal(5, 15);