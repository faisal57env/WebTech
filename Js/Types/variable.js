// ! Variables : it is like some containee which is used to store the values / data in it. 
// ! To declare the variable i JS, we use var, let and const keywords.
// ! Once a variable is declared, it can styore any type of data.



//!  var KEYWORDS

var a; // declaration is possible
a= 10; // initialization is possible 
console.log(a); 
var a;  // re - declaration is possible
a = 100; // re- initialization is possible 
console.log(a);

//! Let Keyword 

let b;
b=20;
console.log(b);

//let  b; //  re - declaration is not possible
b= 200; // re- initialization is possible 
console.log(b);

//! const keyword 

//const c;
// c=30;

const c= 30;
console.log(c);

// c= 30; //  re - declaration is not possible
//console.log(c); // re- initialization is possible


let  num1 = 100;
let num2 = 200;
console.log(" Sum of " + num1 + " and " + num2 + " is " + (num1+num2) );
console.log(`Sum of ${num1} and  ${num2}  is ${num1+num2}` );
console.log(" Sum of ${num1} and  ${num2}  is ${num1+num2}" );
console.log(' Sum of ${num1} and  ${num2}  is ${num1+num2}' );

//! string interpolation
