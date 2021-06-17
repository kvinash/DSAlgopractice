
let array = []

for(let i=1;i<=100;i++){
array.push(i)
}
let array2=[]
for(let i=0;i<array.length;i+=2){
  array2.push(array[i])
}


console.log(array2)

let array3=[]
for(let i=0;i<array2.length;i+=2){
  array3.push(array2[i])
}
console.log(array3)

let array4=[]
for(let i=0;i<array3.length;i+=2){
  array4.push(array3[i])
}
console.log(array4)

let array5=[]
for(let i=1;i<array4.length;i+=2){
  array5.push(array4[i])
}
console.log(array5)

let array6=[]
for(let i=0;i<array5.length;i+=2){
  array6.push(array5[i])
}
console.log(array6)


let array7=[]
for(let i=0;i<array6.length;i+=2){
  array7.push(array6[i])
}
console.log(array7)

let array8=[]
for(let i=1;i<array7.length;i+=2){
  array8.push(array7[i])
}
console.log(array8)