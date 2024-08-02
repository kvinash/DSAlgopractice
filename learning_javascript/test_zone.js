// function a(d){
//   console.log(d());
//   console.log(typeof(d))
  
// }

// a(function(){console.log("inside functions")
//             return 1;});

// function a() {
//   return function(){
//     console.log("inside functions");
//     // return function(){
//     //   console.log("inside inside fucntions")
//     // }
//   }
// }

// var d = a();  
// //console.log(d()); 
// console.log(a());

// function makeWorker(){
//   var name = "pete";
//   return function(){
//     console.log(name)
//   }
// }
// var name = "john"
// var fun = makeWorker();
// fun();

// function makeWorker(){
//   var name = "pete";
//   return function(){
//     console.log(name)
//   }
// }
// var name = "john"
//  var fun = makeWorker();
// console.log(name)
// fun();


function counter()
{

  var count = 0;
  return function(a)
  {
    console.log(a, count++);
  }
}

var incr = counter();
incr("incr");
incr("incr");
incr("incr");
var incr2 = counter();
incr2("incr2");
incr2("incr2");








