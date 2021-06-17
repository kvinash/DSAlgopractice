/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
    
   
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
            let cursor = 0;
            let currentNode  = this.head;
            console.log("dekho", this.length, index)
            if(index>=this.length || index<0){
                return -1
            }
    
            while(cursor!==index){
                currentNode = currentNode.next
            }
            return currentNode.value;
    
    
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
       
   let newNode = {
     value : val,
     next : null
   }
    let head = this.head;
    if(head){
        newNode.next = head;
    }
      this.head = newNode
      this.length++
  
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    if(index > this.length || index <0){
        return 
    }
      
    
        
   let newNode = {
       element : val,
       next : null
   }
   let currentNode = this.head;
        let cursor = 0
        if(index===0){
          console.log("yaha aaya")
           newNode.next = this.head;
           this.head = newNode
        } else {
           console.log("yaha nahe aaya")
           while(cursor!=index-1){
           currentNode = currentNode.next
           cursor++
        }
          newNode = currentNode.next
          currentNode.next = newNode
         
        }
         this.length++
    
};
let newLinkList = new MyLinkedList();

newLinkList.addAtHead(5)
newLinkList.addAtTa(4)
newLinkList.addAtHead(3)
console.log(newLinkList.head)
console.log(newLinkList.get(0))
newLinkList.addAtIndex(1, 2)

console.log(newLinkList.head)