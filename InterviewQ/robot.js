// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(R) {
    // write your code in JavaScript (Node.js 8.9.4)
    let pathJson = {};

    let r = 0;
    let c = 0;
    let maxR = R.length-1;
    let maxC = R[0].length-1;
    let totalGrid = 0;

    if(maxR==0 && maxC==0){
        if(R[maxR][maxR]=="."){
            return 1;
        } else {
            return 0;
        }
    }
    if(maxR==0 && maxC>0){
        while(R[r][c]!="X" && c<=maxC){
            totalGrid++;
            c++;
        }
        return totalGrid;
    }

    if(maxC==0 && maxR>0){
        while(R[r][c]!="X" && r<=maxR){
            totalGrid++;
            r++;
        }
        return totalGrid;
    }

    if(maxC>0 && maxR>0){
    let direction = "LR"   //[LR,TB,RL,BT]
    let pathFinder = (r,c,maxR, maxC, direction) => {
        //moving robot
          while(R[r][c]!="X" && r<=maxR && c<=maxC){
            if(pathJson[`${ij}`]){
                if(pathJson[`${ij}`]==1){
                    pathJson[`${ij}`] = pathJson[`${ij}`]+1;
                } else {
                    totalGrid = Object.keys(pathJson).length;
                    return totalGrid;
                }
            } else {
                pathJson[`${ij}`]==1;

            }
             //moving into left to right direction
            if(direction=="LR"){
                c++;
            }
            if(direction=="TB"){
                r++;
            }
            if(direction=="RL"){
                c--;
            }
            if(direction=="BT"){
                r--;
            }
        }  
            //turn robot with current grid data points
           if(direction=="LR"){
               //if c exceeds max limit
               if(c>maxC){
                   c--;
               }
                return pathFinder(r,c,maxR, maxC, "TB")
            }
            if(direction=="TB"){
                 //if r exceeds max limit
                if(r>maxR){
                   r--;
                }
                 return pathFinder(r,c,maxR, maxC, "RL")
            }
            if(direction=="RL"){
                //if c exceeds min limit
               if(c<0){
                   c++;
               }
                 return pathFinder(r,c,maxR, maxC, "BT")
            }
            if(direction=="BT"){
                  //if r exceeds min limit
                if(r<0){
                   r++;
                }
                 return pathFinder(r,c,maxR, maxC, "LR")
            }
      }
        
    }
    

}
