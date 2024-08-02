let addTree = require("./createtree");

let str = "9 2 10 2 4 -1 -1 -1 -1 -1" ;
let nodeInput = str.split(" ");

let tree = addTree.createTree(nodeInput);




let oddandlevel = (A) => {
            let level = 1;
            this.queue = [];
            let sum = 0;
            
          this.queue.push(A)
            while(this.queue.length>0){
                
                    this.tempQueue = [];
              console.log(level, this.queue);
                    while(this.queue.length>0){
                        
                      let node  = this.queue.shift();
                      console.log(node, node.data)
                      if(level%2==0){
                           sum = sum-node.data; 
                      } else {
                          sum = sum+node.data;
                      }
                      
                      if(node.left){
                         console.log("data left", node.left)
                          this.tempQueue.push(node.left);
                        console.log("left", this.tempQueue);
                      }

                      if(node.right){
                        console.log("data right", node.right)
                          this.tempQueue.push[node.right];
                          console.log("right", this.tempQueue);
                      }
              
                    }
                    level++
              
                    this.queue = [...this.tempQueue];
                
            }
            return sum;
}

oddandlevel(tree)
