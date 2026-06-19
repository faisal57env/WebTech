 ## JAVASCRIPT
 Java Scipt is a scripting language which is used to add the functionality to the webpage

 --> By using javascript we can convert the satic webpage into dynamic webpage

 # introduction 

 -> it was introduced by Brendon Eich in the year 1995. 
 initially it was named as MOCHA, later it was changed to LIVESCRIPT then to JAVASCRIPT and now it is also called as ECMA SCRIPT

 -> It was first used in the browser called " Netscape Navigator ".

 # Versions of JavaScript

 1995 - ES1
 1996 - ES2
 1997 - ES3
 1998 - ES4
.
.
2015 - ES6 (ES2015)

ECMAScript 2023
ECMAScript 2024
ECMAScript 2025


# NOTE

--> Java and Javascript are two independent languages { that is there is no relation between them }

--> js is used in both frontend and backend.
--> It is client side and Serverside language

in Javascript semicolon (;) is not mandatory to rterminate the statement, but it is highly recommended

# Features of js

1. lightweight programming language 
2. Platform Independent             -> can run on any operating system

3. Open Source                      -> can be used by anyone 

4. Dynamically Typed language       -> Can assign any type of datatype need not to specify (can be changed at run time dynamically )

5. Not Complied language            -> Does not contain any compiler 

6. Interpreted language             -> Interpretes the code line by line

7. OOPS & OBPS lang                 -> Treats real time enties 
8. Prototype based 
9. Synchronous lang
10. Error based 
11. Case sensitive 
12. Loosely Typed
13. Single-Thereaded lang


# JS Engine 

-->  It is software present in browser and responsible for executing javascript code.

--> all the modern browser are integrated with js engine



| Browser           | JavaScript Engine                  |
| ----------------- | ---------------------------------- |
| Google Chrome     | V8                                 |
| Microsoft Edge    | V8                                 |
| Mozilla Firefox   | SpiderMonkey                       |
| Safari            | JavaScriptCore (also called Nitro) |
| Opera             | V8                                 |
| Brave             | V8                                 |
| Vivaldi           | V8                                 |
| Samsung Internet  | V8                                 |
| Tor Browser       | SpiderMonkey                       |
| Internet Explorer | Chakra                             |


##   Ways To Execute the Javascript we need a browser .




┌─────────────┐
│  script.js  │
└──────┬──────┘
       │ linked in
       ▼
┌─────────────┐
│  index.html │
└──────┬──────┘
       │ open
       ▼
┌─────────────┐
│   Browser   │
│ (Chrome,    │
│ Firefox...) │
└─────────────┘


--> To Execute the javascript outside the browser, we need NodeJS.

┌─────────────┐
│  app.js     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Node.js     │
│ Runtime     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Terminal    │
│ Output      │
└─────────────┘  --> command = node app.js


--> Summary 
               ┌─────────────┐
               │  app.js     │
               └──────┬──────┘
                      │
      ┌───────────────┼───────────────┐
      │               │               │
      ▼               ▼               ▼
┌─────────┐    ┌──────────┐    ┌──────────┐
│ Node.js │    │ Browser  │    │ VS Code  │
└────┬────┘    └────┬─────┘    └────┬─────┘
     │              │               │
     ▼              ▼               ▼
 Terminal      HTML/Console     Terminal
  Output          Output         Output

  If you're learning JavaScript, the most common methods are Node.js (node file.js) and Browser + HTML (<script src="file.js">).    

  

# Datatypes

                    JavaScript Data Types
                             │
              ┌──────────────┴──────────────┐
              │                             │
      Primitive Types              Reference Types(Non-Premitive)
              │                             │
   ┌──────────┼──────────┐          ┌───────┼────────┐
   │          │          │          │       │        │
 String    Number    Boolean      Object  Array  Function
   │          │          │
 "Hello"      42       true

   ┌──────────┼──────────┬──────────┐
   │          │          │          │
Undefined   Null      Symbol     BigInt
   │          │          │          │
undefined   null   Symbol()      123n





### Primitive Data Types

| Data Type     | Definition                                                                |
| ------------- | ------------------------------------------------------------------------- |
| **String**    | Represents textual data as a sequence of characters.                      |
| **Number**    | Represents numeric values, including integers and floating-point numbers. |
| **BigInt**    | Represents integers larger than the safe range of the `Number` type.      |
| **Boolean**   | Represents a logical value: `true` or `false`.                            |
| **Undefined** | Represents a variable that has been declared but not assigned a value.    |
| **Null**      | Represents the intentional absence of a value.                            |
| **Symbol**    | Represents a unique and immutable identifier.                             |

### Reference (Non-Primitive) Data Types

| Data Type    | Definition                                                         |
| ------------ | ------------------------------------------------------------------ |
| **Object**   | Represents a collection of related data stored as key-value pairs. |
| **Array**    | Represents an ordered collection of values.                        |
| **Function** | Represents a reusable block of executable code.                    |
| **Date**     | Represents and manipulates date and time values.                   |
| **Map**      | Represents a collection of key-value pairs with keys of any type.  |
| **Set**      | Represents a collection of unique values.                          |
| **RegExp**   | Represents a pattern used for matching text.                       |
| **Promise**  | Represents the eventual result of an asynchronous operation.       |

### Quick Classification

```text id="jk43yf"
JavaScript Data Types
│
├── Primitive
│   ├── String
│   ├── Number
│   ├── BigInt
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   └── Symbol
│
└── Reference
    ├── Object
    ├── Array
    ├── Function
    ├── Date
    ├── Map
    ├── Set
    ├── RegExp
    └── Promise
```

### Memorization Rule

* **Primitive Types** → Store the actual value directly.
* **Reference Types** → Store a reference (memory address) to the value.




--> BigInt in JavaScript

BigInt is used when you need to work with integers larger than the maximum safe integer supported by the Number type.

Why BigInt?

JavaScript Number can safely represent integers only up to:

Number.MAX_SAFE_INTEGER
// 9007199254740991

Creating a BigInt
1. Add n to the end of an integer
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);


# how to check the type of datatype in js
In JavaScript, you can check a value's data type using the typeof operator.

typeof "Hello";      // "string"
typeof 42;           // "number"
typeof 123n;         // "bigint"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof Symbol();     // "symbol"

==> Variables 

let name = "John";
let age = 25;

console.log(typeof name); // "string"
console.log(typeof age);  // "number"

Special Cases
Arrays
let arr = [1, 2, 3];

console.log(typeof arr); // "object"



## imp

let e = null;

console.log(e);        // null
console.log(typeof e); // "object"
```

### Why does `typeof null` return `"object"`?

When JavaScript was first implemented in the 1990s, values were represented internally using type tags. Due to a bug in that implementation, `null` was assigned a type tag that overlapped with the tag used for objects.

As a result:

```javascript id="gz7oc8"
typeof null === "object" // true
```

This behavior became part of the language specification. Changing it today would break a large amount of existing code, so it remains for backward compatibility.

### Is `null` actually an object?

No.

```javascript id="8h9th7"
let e = null;

console.log(e instanceof Object); // false
```

`null` is a **primitive value** that represents the intentional absence of any object value.

### How to correctly check for `null`

Use strict equality:

```javascript id="e5jzlu"
if (e === null) {
    console.log("e is null");
}
```

### Summary

| Expression               | Result          |
| ------------------------ | --------------- |
| `null`                   | Primitive value |
| `typeof null`            | `"object"`      |
| `null instanceof Object` | `false`         |
| `null === null`          | `true`          |

**Interview answer:**

> `typeof null` returns `"object"` because of a historical bug in the original JavaScript implementation. Although `null` is a primitive type, the behavior was preserved for backward compatibility and is now part of the language specification.


# why havent we fixed it yet?

-> typeof null returns "object" because of a historical bug in JavaScript's original implementation. It has not been fixed because changing it would break existing web applications, violating JavaScript's backward-compatibility principle of not breaking the web.

Brendan Eich, the creator of JavaScript, has publicly acknowledged that typeof null === "object" was an early mistake. However, after decades of web development, it's effectively impossible to change without causing widespread compatibility issues.



## How to add js to the webpage / types of Js 

--> There are two ways to add the js
1. internal Javascript
2. External Javascript

==> Internal Javascript -> Inside the bosy tag we create script tag and write all the js code in it.

ex:

<body>
       <script>

              js code

       </script>
</body>

==> External Javascript -> We create a new file with .js as an extension and write all the js code in it and then we link it to your html file by using script tag with scr attribute.

<body>
       <script src" path of js file "> </script>
</body>


## Output statements :

document.write()   --> Prints the output in the webpage in the same line

document.writeln() --> Prints the output in the webpage in the same line with one space

console.log()      --> Prints the output in console


## Tokens
Thses are the smallest units of any programming language. Here we have 

1. Comments

2. Seprators -> used to seprate the value / block of code / array of elements / parameters

3. litrals   -> values / data given by user 
eg 10; alex;

4. Identifiers -> It is a name given to variable/ function/array/ etc.

Rules to write Identifiers :

 1. Cannot start with Number but can containn the numbers
 2. Identifier cannot be a keyword 
 3. Space is not allowed
 4. Special Characters are not allowed except the $ and _ .


 ## Keywords

 1. These are the Predefined words( Which have a specific functionality ).
 2. Must be written in lowercase
3. Cannot be used as identifer eg if, else.....
4. There are 3 special Keywords i.e var, let, const keywords


# Variable 

==> variable is like a container used to store the data/ value.in it.

==> To declare the variable in js , we use var, let,const keywords.

==> Once a variable is declaration is declared it can store any data.

//! 2. Non-Primitive (Reference) Data Types

// These can store collections of data and more complex entities.
/*
Reference Types:

Object
Array
Function
Date
Map
Set
RegExp
Promise

*/

--> Null is not a datatype it is a value.

--> clg(typeof 100)          -> number
--> clg (typeof true)        -> boolean
--> clg(typeof typeof 100)   -> string





==============================================================================================================
==============================================================================================================






```markdown
# JavaScript Core Fundamentals

A comprehensive guide covering the architectural foundations, runtime environments, data specification, and structural mechanics of JavaScript.

---

## 1. Architectural Evolution & Runtime Mechanics

### 1.1 Taxonomy and Context
JavaScript is a high-level, single-threaded, garbage-collected, interpreted (or Just-In-Time compiled) language designed to inject dynamic behavioral logic into static environments (e.g., the Document Object Model) and backend runtimes. 

* **Historical Evolution:** Engineered by Brendan Eich in 1995 within 10 days under the codename **Mocha**, briefly renamed **LiveScript**, and eventually commercialized as **JavaScript**. Standardized under **ECMAScript** to ensure cross-platform uniformity.
* **The Java vs. JavaScript Fallacy:** JavaScript shares no architectural heritage, memory management design, or type-system axioms with Java. The naming convention was entirely a marketing strategy.

### 1.2 Execution Environments
JavaScript requires a host environments embedded with a script execution engine.

#### Browser Environment (Client-Side)
Executes within the browser sandbox. The script is linked via an HTML document and interacts with the DOM/BOM.


```

┌─────────────┐             ┌─────────────┐             ┌─────────────┐
│  script.js  │ ──linked──> │  index.html │ ──opened──> │   Browser   │ ──> Developer Console
└─────────────┘             └─────────────┘             └─────────────┘

```

#### Node.js Environment (Server-Side)
An open-source, cross-platform runtime environment that executes JavaScript code outside a browser, leveraging the V8 engine bound to low-level C++ APIs.


```

┌─────────────┐             ┌─────────────────┐             ┌─────────────────┐
│   app.js    │ ──────────> │ Node.js Runtime │ ──────────> │ Terminal Output │
└─────────────┘             └─────────────────┘             └─────────────────┘

```
*Execution command:* `node app.js`

### 1.3 JavaScript Engine Registry
Modern browsers utilize specialized execution engines to parse, compile (via JIT), and execute source code:

| Browser | JavaScript Engine |
| :--- | :--- |
| **Google Chrome / Chromium-based** | V8 (C++) |
| **Mozilla Firefox** | SpiderMonkey (C++) |
| **Safari** | JavaScriptCore / Nitro (Objective-C/C++) |
| **Microsoft Edge** | V8 (Legacy: Chakra) |

---

## 2. Core Features & Language Paradigms

* **Dynamically & Loosely Typed:** Type profiles are bound to *values*, not variables, at runtime. Variables can be reassigned across divergent types without explicit casting.
* **Single-Threaded Synchronous Execution:** Operates on a single call stack, executing one command at a time sequentially. Asynchronous execution is delegated to the hosting environment's Web APIs/Event Loop.
* **Interpreted / JIT Compilation:** Code is processed line-by-line by the engine interpreter, with modern engines optimizing hot code paths via Just-In-Time compilation into native machine code.
* **Prototype-Based OOP:** Inheritance is managed through a chain of direct object references (prototypes) rather than classical blueprint definitions.

---

## 3. Data Specification & Type System

JavaScript splits its type framework into two distinct categories: **Primitive** types (immutable, stored by value on the stack) and **Reference** types (mutable, stored by reference on the heap).


```

```
                  JavaScript Data Types
                           │
     ┌─────────────────────┴─────────────────────┐
     ▼                                           ▼

```

Primitive Types                            Reference Types
(Value-based, Stack)                       (Pointer-based, Heap)
│                                           │
├─ String                                   ├─ Object
├─ Number                                   ├─ Array
├─ BigInt                                   ├─ Function
├─ Boolean                                  ├─ Date / Map / Set
├─ Undefined                                ├─ RegExp
├─ Null                                     └─ Promise
└─ Symbol

```

### 3.1 Primitive Types vs. Reference Types

| Characteristic | Primitive Types | Reference Types |
| :--- | :--- | :--- |
| **Allocation** | Stored directly in the execution stack frame. | Allocated on the heap; stack stores a pointer to the memory address. |
| **Immutability** | Completely immutable. Operations yield *new* values. | Mutable. Structural fields can be manipulated without changing the pointer location. |
| **Comparison** | Compared by **Value** (`10 === 10`). | Compared by **Reference** (Two structural identical objects point to different addresses). |

### 3.2 The `typeof` Operator & System Anomalies

The evaluation of data types at runtime can be audited using the unary `typeof` operator. 

```javascript
typeof "Hello";      // "string"
typeof 42;           // "number"
typeof 123n;         // "bigint"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof Symbol();     // "symbol"
typeof [1, 2, 3];    // "object" (Arrays are specialized object instances)
typeof typeof 100;   // "string" (Evaluates to typeof "number")

```

#### The `typeof null` Bug Architecture

Evaluating `null` yields an apparent contradiction:

```javascript
let e = null;
console.log(typeof e); // "object"

```

> **Correction of Common Misconception:** `null` *is* a primitive data type under the ECMAScript specification. The behavior of `typeof null === "object"` is a legacy implementation flaw dating back to JavaScript 1.0.
> In the initial implementation, values were represented as a type tag combined with the actual value pointer. Object references used the type tag `000`. The pointer representation for `null` was the Null Pointer (all zeroes). Because of this bit-pattern overlap, the engine incorrectly flagged `null` as an object. This cannot be modified because fixing it breaks backward compatibility across the legacy global web.

#### Verifying a Pure `null` Value

To validate a variable as `null` without interference from the type tag bug:

```javascript
// Check via strict identity comparison
if (e === null) {
    console.log("Value is explicitly null");
}

// Instance verification yields correct logic
console.log(e instanceof Object); // false

```

### 3.3 Large Integer Resolution with `BigInt`

The standard `Number` type represents values using IEEE 754 double-precision floats, establishing a safe integer boundary at $2^{53} - 1$.

$$\text{Maximum Safe Integer} = 9,007,199,254,740,991$$

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Arbitrary precision declaration requires the 'n' literal marker
const bigNumber = 123456789012345678901234567890n; 

```

---

## 4. Syntax Elements & Program Execution

### 4.1 Script Integration Mechanics

JavaScript is injected into HTML through the `<script>` tag via two primary patterns:

#### Internal Implementation

Embedded directly inside structural markup components:

```html
<body>
    <script>
        console.log("Inline execution thread.");
    </script>
</body>

```

#### External Implementation

Maintains separation of concerns by pointing to a modular source asset file.

```html
<body>
    <script src="path/to/script.js"></script>
</body>

```

### 4.2 Stream IO Operations

Methods used to interface with output streams:

```javascript
document.write("Text");   // Injects content inline into the active DOM document stream.
document.writeln("Text"); // Identical to write(), but appends an inline space/newline character.
console.log("Text");      // Outputs structural data to the system's debugger/console abstraction layer.

```

### 4.3 Tokenization Rules

Tokens are the minimal lexical building blocks recognized by the compiler/interpreter engine.

* **Identifiers:** Custom labels assigned to state definitions (variables, references) and routines (functions).
* *Rule 1:* Alpha characters, `$`, or `_` can be used to start a name. Numerical digits `0-9` are forbidden as initial characters.
* *Rule 2:* Reserved system keywords cannot be repurposed as identifiers.
* *Rule 3:* Whitespace and specialized characters are strictly prohibited outside `$` and `_`.


* **Keywords:** Token primitives reserved for controlling execution flow, scope constraints, and class definitions (e.g., `let`, `const`, `var`, `if`, `class`). Must be completely lowercase.

```

### Key Technical Fixes and Enhancements Applied:
* **The `null` Data Type Clarification:** Your notes stated "*Null is not a datatype it is a value*". This is a common point of confusion. `null` **is** a primitive data type in ECMAScript, but the `typeof` operator returns `"object"` due to a historical bitmask bug. I updated this section to explain *why* it behaves this way using first-principles system mechanics.
* **Array Typings:** Added clarity on why arrays return `"object"` when evaluated with `typeof`.
* **BigInt Boundary Logic:** Explained the structural limitation of standard Numbers using IEEE 754 precision constraints ($2^{53} - 1$) instead of just stating the arbitrary limit.
* **Formatting Rebuild:** Converted basic terminal text drawings into clear Markdown code blocks and layout tables for clean readability on a GitHub repository page.

```