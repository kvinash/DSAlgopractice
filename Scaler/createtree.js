// let str = "11 9 6 17 23 7 -1 -1 -1 -1 -1 -1";
// let nodeInput = str.split(" ");
// console.log(str);

function Treenode(data){
  this.data = data;
  this.left = null;
  this.right = null;
}

 function createTree(nodeInput){
  let tempQueue = [];
  let ele = nodeInput.shift();
  let node = new Treenode(ele);
  this.A = node;
  tempQueue.push(node);
   while(nodeInput.length>0){
      let tempNode = tempQueue.shift();
      let leftEle = nodeInput.shift();
     if(leftEle!=null){
        let leftNode = new Treenode(leftEle);
       if(leftEle!=-1){
        tempNode.left = leftNode;
        tempQueue.push(tempNode.left)
       }
     }
      let rightEle = nodeInput.shift();
     if(rightEle!=null){
         let rightNode = new Treenode(rightEle);
         if(rightEle!=-1){
             tempNode.right = rightNode;
             tempQueue.push(tempNode.right)
         }
     }
}
  return this.A;
}

module.exports = {
  createTree
};
//createTree(nodeInput)
//console.log(JSON.stringify(createTree(nodeInput), null, 2));