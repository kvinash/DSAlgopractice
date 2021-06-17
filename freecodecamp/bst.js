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
  
  // Only change code above this line
}


let bst = new BinarySearchTree();
bst.add(5)
bst.add(8)
bst.add(4)
bst.add(10)




function isBinarySearchTree(tree) {
  // Only change code below this line
  displayTree(tree)
  let currentNode = tree.root
  if (currentNode == null) {
    return true
  }

  let checkBalancedNode = (node) => {
    console.log("2 log")
    if(!node.right && !node.left){
      return true
    }
    if (node.right && node.left) {
          console.log("3 log")
      if (node.right.value > node.value && node.left.value < node.value) {
        console.log("4 log")
        let rightBalance = checkBalancedNode(node.right) 
        let leftBalance = checkBalancedNode(node.left)
        if(rightBalance && leftBalance){
          return true
        } else {
          return false
        }
      } else {
        return false
      }
     
    } else {
      return false
    }
    
  }
   return checkBalancedNode(currentNode)
  
  // Only change code above this line
}


console.log(isBinarySearchTree(bst));