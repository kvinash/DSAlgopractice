var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add =  (data) => {
    let currentNode = new Node(data, null)
    if(this.head == null){
        this.head = currentNode
        this.tail = currentNode
    } else {
      currentNode.next = this.head;
      this.head.prev = currentNode;
      this.head = currentNode
    }
  }

  this.remove = (element) => {
    if(this.head == null){
      return null
    }

    let traversalNode = this.head;
    //for firstnode
    if(traversalNode.data==element){
       if(traversalNode.next){
         traversalNode = traversalNode.next
         traversalNode.prev = null;
         this.head = traversalNode;
       } else {
         this.head = null;
         this.tail = null;
       }
     }
 
          //for firstnode till second last node
      while(traversalNode.next!==null){
      if(traversalNode.data===element){
       console.log("error node", traversalNode)
          traversalNode.prev.next = traversalNode.next
          traversalNode.next.prev = traversalNode.prev;
        }
        traversalNode = traversalNode.next;
      }

      //for last node
      if(traversalNode.prev!==null && traversalNode.next==null && traversalNode.data===element){
          traversalNode.prev.next = null;
          this.tail = traversalNode.prev;
      }
    
}
 this.reverse = () => {
    if(this.head == null){
      return null
    }
    if (this.head !== this.tail) {
      let currentNode = this.tail.prev;
      let traverseNode = this.tail;
      

      if(traverseNode && traverseNode.prev){
        traverseNode.next = traverseNode.prev
        traverseNode.prev =null;
      }
      while (currentNode !== null) {
      console.log("currentNode", currentNode)
      console.log("traverseNode", traverseNode)
        currentNode.next = currentNode.prev
        currentNode.prev = traverseNode;
        traverseNode = currentNode;
        currentNode = currentNode.next
      }
     this.head = this.tail;
     this.tail = traverseNode;
    
    }

    
  }

};

let testDlist = new DoublyLinkedList();
testDlist.add(3);
 testDlist.add(4);
testDlist.add(6);

// console.log("after addition", testDlist.head, testDlist.tail);
// testDlist.remove(3);
console.log("after remove",testDlist.head);
testDlist.reverse()
console.log("after reverse",testDlist.head, testDlist.tail);
