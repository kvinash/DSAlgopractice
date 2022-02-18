let fun = (A) => {

         let ans = []; 
        for(let i=0;i<A;i++){
            
                if(i==0){
                    ans.push("11")
                } else if(i==1) {
                    
                    ans.push("22")
                } else {
                    let ele;
         
                    if(i%2==0){
                         ele = Math.floor((i-1)/2);
                         ans[i] = ans[ele].substring(0,ans[ele].length/2)+1+1+ans[ele].substring(ans[ele].length/2, ans[ele].length);
                         console.log(i, ele, ans[ele], ans[ele].substring(0,ans[ele].length/2))
                    } else {
                       ele = Math.floor((i-2)/2);
                       ans[i] = ans[ele].substring(0,ans[ele].length/2)+2+2+ans[ele].substring(0,ans[ele].length/2);
                       console.log(i, ele)
                    }
                    
                    
                }
        }
console.log(ans)
        return ans[A-1];
}

let A = 9

console.log(fun(9));