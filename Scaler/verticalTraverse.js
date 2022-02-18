let addTree = require("./createtree");

let str = "7722 9970 4002 7668 7935 1936 8299 9867 4806 5189 3778 8567 5263 189 8603 8477 6760 9299 9796 3139 1319 4025 6778 4701 9212 3082 2462 3251 1148 4323 7475 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1" ;
let nodeInput = str.split(" ");

let tree = addTree.createTree(nodeInput);
//console.log(JSON.stringify(tree, null, 2))


// let verticalTraversel = (A)=> {
//        let ans = [];
//        this.distanceJson = {};
//         let dist = 0;
//         // console.log(this.distanceJson, A)
//        this.vertical = (A,dist) => {
//          // console.log(this.distanceJson)
//            if(A==null){
//                return 0
//            }
//            if(this.distanceJson[dist]){
//               this.distanceJson[dist].push(A.data)
//            } else {
//                this.distanceJson[dist] = [];
//                 this.distanceJson[dist].push(A.data)
//            }
//            this.vertical(A.left, dist-1)
//            this.vertical(A.right, dist+1)
//        }
//       this.vertical(A, dist);
//   console.log(this.distanceJson)
//    for(let ele in  this.distanceJson){
//     ans.push(this.distanceJson[ele][0]) 
//    }
//      return ans 
// 	}


let verticalTraversel2 = (A) => {

  this.queue = [];
  this.dist = 0;
  this.queue.push({dist:this.dist, node:A});
  this.objectJson = {};



    while(this.queue.length>0){
     
      let ele = this.queue.shift();
      let dist = ele.dist
    if(!this.objectJson[ele.dist]){
      this.objectJson[ele.dist] = ele.node.data;
    }
    if(ele.node.left){
     this.queue.push({node: ele.node.left, dist:dist-1})
    }
    if(ele.node.right){
     this.queue.push({node: ele.node.right, dist:dist+1})
    }
      
  }
    
}
console.log("ans",verticalTraversel(tree))