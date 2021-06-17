var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = (value) => {
    let newNode = new Node(value);
    if(this.root==null){
      this.root = newNode
      return undefined
    }
    let currentNode = this.root
    while(currentNode.value != value){
     
          if(currentNode.value == value){
            return null
          }
          if(currentNode.value > value){
            if(!currentNode.left){
              currentNode.left = newNode
              return undefined
            } 
            currentNode = currentNode.left
          } 

          if(currentNode.value < value){
            if(!currentNode.right){
              currentNode.right = newNode
              return undefined
            } 
            currentNode = currentNode.right
          }

    }
    return null
  }

   this.inorder = (root = this.root, arr = []) =>{
    
    let tempArr = [];
    if(root==null){
      return null
    } else {
     let currentNode = root;
     console.log("currenNode", displayTree(root))
      while(currentNode!==null){
        tempArr.push(currentNode);
        currentNode = currentNode.left
      }

      while (tempArr.length > 0) {
        let insertNode = tempArr.pop()
        arr.push(insertNode.value);
        if (insertNode.right) {
           this.inorder(insertNode.right, arr)
        }
      }
      return arr

     
    }

    
  }

  this.preorder = (root = this.root, arr=[], tempArr = []) => {
  
    if (root == null) {
      return null
    } else {
      let currentNode = root;
      displayTree(currentNode)
      while (currentNode) {
        arr.push(currentNode.value)
        if(currentNode.right){
          tempArr.push(currentNode.right)
        }
        currentNode = currentNode.left;
      }

       if(tempArr.length>0){
             let rightNode = tempArr.pop();
             this.preorder(rightNode, arr, tempArr)
      }
      return arr
    }
  }

  this.postorder = (root= this.root, arr=[], tempArr = []) => {
      if (root == null) {
      return null
    }
    

    let currentNode = root;
    while(currentNode){
      tempArr.push(currentNode)
      currentNode = currentNode.left;
    }


    while(tempArr.length>0){
     let endNode = tempArr.pop();
     console.log("endNode", endNode)
     if(endNode.right){
        this.postorder(endNode.right, arr,[])
        arr.push(endNode.value)
     } else {
       arr.push(endNode.value);
     }
     
    }

    return arr
  }

  this.levelOrder = (root = this.root, arr = [], finalArr=[]) => {
     let tempArr = [];
        if(root == null && arr.length==0){
          return null
        } else if(arr.length==0) {
           tempArr.push(root)
      
        }
       
        while(arr.length>0){
          let elem = arr.pop();
          if(elem.left){
            tempArr.push(elem.left)
          }
          if(elem.right){
            tempArr.push(elem.right)
          }
          
          finalArr.push(elem.value)
        }
        this.levelOrder(null, tempArr, finalArr)
        
        return finalArr  
        
    }
  // Only change code above this line
}


let bst = new BinarySearchTree();
bst.add(5)
bst.add(8)
bst.add(2)
bst.add(1)
bst.add(3)
bst.add(10)
bst.add(15)
bst.add(13)
bst.add(20)



// console.log(bst.inorder())

//console.log(bst.preorder())
console.log(bst.levelOrder())