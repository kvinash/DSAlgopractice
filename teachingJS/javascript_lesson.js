// //prmitive data types we have
// String
// Number
// Boolean
// undefined
// null

// Symbol

var user =  {
  name : "john",
  lastname : "doe",
  age : "30"

}

//older way
// let name = user.name;
// let lastname = user.lastname;

//newer way

const {name, lastname} = user;
console.log(name, lastname)




