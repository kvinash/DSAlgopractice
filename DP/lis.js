let arr =  [2, 1, 4, 3];
let findLIS = (A) => {

				let tempArr = [0];
			    let insertDataViaBinarySearch = (data) =>{
          console.log("data", data);
					let start = 0;
					let end = tempArr.length-1;
					let mid = Math.floor((start+end)/2);
            console.log(start, end, mid);
					while(start<end){
            console.log(tempArr, start, end, mid, data)
						if(tempArr[mid]>=data){
							end = mid-1;
						} else if (tempArr[mid]<data){
							start = mid + 1
						}
					}
					if(end==tempArr.length-1){
						tempArr.push(data);
					} else {
						tempArr[end] = data;
					}
					
				}
				for(let i=0;i<A.length;i++){
					insertDataViaBinarySearch(A[i]);
				}

			

				return tempArr[tempArr.length-1];
	}

findLIS(arr);