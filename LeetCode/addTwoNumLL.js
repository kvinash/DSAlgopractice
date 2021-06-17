function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  let l1 = new ListNode(9,null);
  
  let l11 = new ListNode(9,null);
  l1.next = l11;
  
 
  let l12 =new ListNode(9,null);
  l11.next = l12
  let l13 =new ListNode(9,null);
  l12.next = l13
  let l14 =new ListNode(9,null);
  l13.next = l14
  let l15 =new ListNode(9,null);
  l14.next = l15
  let l16 =new ListNode(9,null);
  l15.next = l16

   let l2 = new ListNode(9,null);
  
   let l21 = new ListNode(9,null);
    l2.next = l21;
   
   let l22 =new ListNode(9,null);
   l21.next = l22;

    let l23 =new ListNode(9,null);
   l22.next = l23;
  console.log(l1, l2)
let addTwoNumbers = function(l1, l2) {

    let ansL = new ListNode(null,null);
    let finalNode = ansL;
    let carry = 0;
    let array = [];
 
        while(l1||l2){
           console.log("inside", l1, l2, carry)
           let num1 = l1 && l1.val ? l1.val : 0;
           let num2 = l2 && l2.val ? l2.val : 0;
           ansL.val = Number(num1) + Number(num2) + Number(carry)
           if(ansL.val && String(ansL.val).length>1){
               let value = String(ansL.val).split("");
               console.log("value", value)
               ansL.val = Number(value[1])
               carry = Number(value[0]);
           } else {
               carry = 0;
           }
          
            if((l1 && l1.next) || (l2 && l2.next)){
                 let newNode = new ListNode(null,null);
                 ansL.next = newNode;
                 ansL = ansL.next;
                 
            } else if(carry && carry>0){
                 let newNode = new ListNode(carry,null);
                 ansL.next = newNode;
                
            } 
            l1 = l1 && l1.next ? l1.next : null
            l2 = l2 && l2.next ? l2.next : null
        }
    return finalNode
  
};

