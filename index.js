// let largestRectangleArea =  (A) => {
  
  
//   function Stack() {
//             this.count = 0;
//             this.storage = {};

//            this.push = function (value) {
//                 this.storage[this.count] = value;
//                 this.count++;
//             }

//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined;
//     }
//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   }

//   this.peek = function () {
//     return this.storage[this.count - 1];
//   }

//   this.size = function () {
//     return this.count;
//   }
// }

// let indexStack = new Stack();

//      let maxArea = 0;
//      let minimumLeftIndex = 0;
//      for(let i=0; i< A.length;i++){
//        let minimumRightIndex = i;
//        let localMin = 1000000009;
//        let stackEle =  {value : A[i], index : i};
//        let tempArea = 0; 

//        if(i==0){
//          maxArea = A[i];
//          stackEle.index = 0;
//         indexStack.push(stackEle)
//          continue;
//        }

//        if(i==A.length-1){
//           indexStack.push(stackEle)
//        }
       
//        while((indexStack.peek() && A[i]<=indexStack.peek().value && indexStack.size()>0)||(indexStack.size()>0 && i==A.length-1)){
//          let popEle = indexStack.pop();
//          if(popEle.value < localMin){
//              localMin = popEle.value;
//            minimumLeftIndex = popEle.index;
//           tempArea = (minimumRightIndex - minimumLeftIndex)*localMin;
//               if(tempArea > maxArea){
//               maxArea = tempArea;
//            }
//            stackEle.index = minimumLeftIndex;
//            console.log("tempArea", tempArea, minimumRightIndex, minimumLeftIndex, localMin );
//          }
//        }

       
       
//        if(i!=A.length-1){
         
//          indexStack.push(stackEle)
//        }
        
//        console.log(indexStack)
//      }
 
//   return maxArea;
// };

let codeList =[ 'apple apple', 'apple anything apple', 'apple apple' ] 
let shoppingCart =[
  'kiwi',  'apple',
  'apple', 'apple',
  'apple', 'orange',
  'apple', 'orange',
  'apple', 'orange',
  'apple', 'apple'
]
 let shoppingCartCounter = 0;
let match = false;
    for(let i=0;i<codeList.length;i++){
        let fruitList = codeList[i].split(" ");
       let startingCounter = shoppingCartCounter;
        for(let j=0;j<fruitList.length;j++){
            console.log(fruitList[j]);
           let inLoop = true
         
           if(shoppingCartCounter >=shoppingCart.length){
                    console.log(0)
               return 0;
           }
            while(shoppingCartCounter<shoppingCart.length && inLoop){
                if(fruitList[j]!="anything"){
                    if(fruitList[j]!=shoppingCart[shoppingCartCounter] && j!=0){
                    shoppingCartCounter = startingCounter + 1;
                    startingCounter = startingCounter+1;
                      j=0;
                         console.log(0)
                     // return 0
                    } if(fruitList[j]!=shoppingCart[shoppingCartCounter] && j==0){
                        inLoop = true;
                        shoppingCartCounter++;
                      match=false
                    }
                    if(fruitList[j]==shoppingCart[shoppingCartCounter]){
                        inLoop = false;
                        shoppingCartCounter++;
                      match=true
                    }
                  
                } else {
                    inLoop = false;
                    shoppingCartCounter++;
                  match = false;
                }
             
            }
        }
    }
if(match){
  console.log("1")
  return 1
} else{
  console.log("dasd", 0)
}
