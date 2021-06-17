function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    // Only change code below this line
    let currentNode = head;
    let prevNode = null;
    while(currentNode && currentNode.element !== element){
      prevNode = currentNode;
      currentNode = currentNode.next;
      
    }
    if(currentNode && currentNode.element==head.element){
        head = currentNode.next;
       length--
      } else {
        if(currentNode){
           prevNode.next = currentNode.next;
            length --
        }
       
      }
      console.log(length);
    return length
  
    
    // Only change code above this line
  };

   this.addAt = (index,element) => {
    if(index<0 ||index >= length){
      return false
    }
    let newNode  = new Node(element)

    let cursor = 0;

    currentNode = head;
        
     if(index === 0){
       newNode.next = head.next
       head = newNode
    
     } else {
       prevNode = head;
       while(cursor!==index-1){
       
          currentNode = currentNode.next;
          cursor++
       }
       console.log("new", newNode);
       console.log("currentNode", currentNode);
      
       newNode.next = currentNode.next
       currentNode.next = newNode
   
       length++
     }
    
  }
}


let myLinkedList = new LinkedList();
myLinkedList.add(3);
myLinkedList.add(2);
myLinkedList.add(6);
console.log(myLinkedList.addAt(,5));
console.log(JSON.stringify(myLinkedList.head()))

