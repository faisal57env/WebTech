// ! In JavaScript, data types define the kind of value a variable can hold and determine what operations can be performed on that value.   

//! it tells us whay type of data we are using/storing in a variable

//! In JavaScript, data types are divided into Primitive and Non-Primitive (Reference) types.

//! 1. Primitive Data Types
/* 
Primitive Types (7):

String
Number
BigInt
Boolean
Undefined
Null
Symbol

These store a single value and are immutable.
| Data Type     | Example                 |
| ------------- | ----------------------- |
| **String**    | `"Hello"`               |
| **Number**    | `42`, `3.14`            |
| **BigInt**    | `12345678901234567890n` |
| **Boolean**   | `true`, `false`         |
| **Undefined** | `let x;`                |
| **Null**      | `let y = null;`         |
| **Symbol**    | `Symbol("id")`          | 

*/

//! Number --> All the integer, decimal values, long values, double values, short, byte all are considered as number datatypes 

let a=10;
console.log(a);
console.log(typeof a);

a= 23.456;
console.log(a);
console.log(typeof a);

a= 787878456;
console.log(a);
console.log(typeof a);

a= 23.000;
console.log(a);
console.log(typeof a);


//! Strings - anything written insode " ", ' ' , ` ` , are consider as string datatype 

// backtics help us to achive the string interpolation and writing multiline strings 




a="100";
console.log(a);
console.log(typeof a);

a= 'a';
console.log(a);
console.log(typeof a);


a= `hello`;
console.log(a);
console.log(typeof a);

//!  Boolean - true and false are considered as boolean datatypes 
a= true;
console.log(a);
console.log(typeof a);

a= false;
console.log(a);
console.log(typeof a);


//! Undefined - premitive datatype
//! it is the defalult value of a variable which is declared but not initialized 
//! this indicated the absance of initialization 
let b;
console.log(b);
console.log(typeof b);



// -->

//! Not defined -  it indicated an error
//! if we try to access the variable without declaration then we get this error 
//! It indicates the absance of declaration 

// console.log(num1); --> this would leads to referenceError


//! Null 
//! Intentional absance of value is known as null
a=null;
console.log(a);
console.log(typeof a);

//! Bigint 
//! if the range is exceeded then it is Bigint
//! Any integer can be convereted into Bigint by adding an suffix "n".
a= 123n;
console.log(a);
console.log(typeof a);

//! Symbol

a=Symbol(123);
console.log(a);
console.log(typeof a);




//! Checking Data Types -->  Use the typeof operator to check the datatype

/*
typeof "Hello";    // "string"
typeof 100;        // "number"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof Symbol();   // "symbol"
typeof 10n;        // "bigint"
typeof {};         // "object"
typeof [];         // "object"
typeof function(){}; // "function"

 */





