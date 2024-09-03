# JavaScript -Notes.

1. JavaScript is a scripting language: designed for execution at runtime in a specific runtime environment by an interpreter ( w/o the need to compile it into machine code)
2. Browser looks into each tage in HTML and converts them into objects. Its like < div > tag is parents object of < p > tag. This creates a DOM - Document Object Model tree. The browser breaks the tree and render the view based on it. Different to HTML, with JS, we have chance to modify the nodes of DOM tree : add new nodes, remove nodes, edit notes. This changes the view rendered by the browser. JS allows us to execute dynamic DOM tree on browser
3. JS is used for client side web development: with jQuery, AngularJS, React; it also used for server side development: with Node Js, Express; browser extension, desktop, mobile, IOT applications

## Variable: declaration (var) and definition (=)
- Declaration: no type declaration required. 
- Common type: number ( double, no integers - this is all floating point numbers), string ( no char type, only String type), boolean, undefined, null, symbol
- When we just declare the variable, its value is undefined (not yet filled). When we intend to leave the value empty, we define it as null ( not available). 
- the typeof operator: return type of a variable. Note: type of null is object. 
```js
var a = 5;
var b = 10;
var c = a + b;
var d = "Hello";
var e = true;
a = "hello a"; // no type declaration 
a = null;
console.log(typeof a);
```
## Declare variable with 'let' and 'const'

```js
let message ;
message ="Hello";
alert(message);
```
- Different to const keyword, means “constants”. With const declaration, variable cannot be reassigned. An attempt to do so would cause an error. Let allows reassign variables and declare multiple variables in one line:
```js
let user = 'John', age = 25, message = 'Hello';
```
- Similar to var, we can assign different value for variable message
- Different to var, declaring let  twice for 1 variable will triggers a SyntaxError. Var allows you to re-declare the same variable within the same scope without any error
- Different to var, it does have block scope {}. A let variable is only accessible within the block where it is declared. This means if you declare a varible inside an if statement, it will not be accessible outside that if block.
- Hoisting: with var, variable can be used before it is declared, but its value will be undefined until the line where it is initialised. It is different to let, variable will not be initialized, you will get a ReferenceError instead
```js
console.log(x);
var x =10;
```
- Hoisting creates problem because if we declare a variable with var inside a function, the declaration is moved to the top of that function's scope, but the assignment remains where it was orignally written:
```js
function example(){
    console.log(x);//undefined
    var x =10;
    console.log(x);//10
}
example();
```
- IIFE is created to alleviate this issue of hoisting, to prevent them from polluting the global scope or causing conflicts within loops
```js
var x =10;
(function(){
    var x =20;
    console.log(x);//
})();
console.log(x);
```
```js
for(var i =0; i<3;i++){
    (function(j){
        setTimeOut(function(){
            console.log(j);
        },1000);
    })(i);
}
```
- Above loop using let: let ensures that each iteration of the loop has its own scope for i, so the correct values are logged without needing and IIFE
```js
for(let i =0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
```
- If you declare a var variable globally, it becomes a property of the global object(e.g window), while let will not become property of the global object
## Type coercion: 
- Concatenation with String values
- Values of all types have an associated Bollean value


```js
123 + " 4" // return "1234"
```
## Nullish coalescing operator

The ?? operator provides a way to choose a defined value from a list of variables. The result of a ?? b is a unless it’s null/undefined, then b.

## Type conversion
- String conversion:

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```
- Number conversion:

We can use the Number(value) function to explicitly convert a value to a number:

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```
Numeric conversion rules:

```js
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```
- Boolean conversion:

```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
//in JavaScript, a non-empty string is always true.
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
```
## Equal (== OR ====)
- We use triple equals for precision check ( value + type match)
- Equal is just for value check
```js
var a =10;
var b = 20;
var c = "10";
var d = 0;
if(a==b){
    console.log("values are equal"); //not printed
}
if(a==c){
    console.log("values are equal"); // printed
}
if(a===c){
    console.log("values are equal"); // not printed
}
if(a){
     console.log("a is true"); // printed because a !=0. Falsy if a =0,"", undefined, null
}
if(d){
     console.log("a is false"); // printed because a == 0
}
```
## Objects 
- Not class based: unlike Java which depends on class template. Its free of form, you can add/remove anything in the object anytime
- Objects include properties( attributes/data) and methods(functionalities)
- No compilation step: if you access an property that does not exist --> it is an undefied property

```js
var person = {
    "firstName" : "kat",
    "middleName" : null,
    "lastName" : "M"
};
//if we try to access age property: person.age --> this returns undefined
// person.middleName --> null
```
- Object can have method
- the dot notation/ the square bracket [] notation: access property of object. The square bracket is specificaly used for case when the property name is invalid, like " 1" which is not accessible by dot notation

```js
var myObj = {}; //empty object
console.log(myObj); // return Object {}
myObj.prop = "Hello"; // define a property of MyObj 
// print : Object { prop : "Hello"} --> like adding key, value
myObj.prop2 = 123;
console.log(myObj); // print Object{ prop: "Hello", prop2: 123}
//OTHER OPTION: 
var myObj2 = {
    "prop":"hello",
    "prop1":123,
    "1": "one" // invalid variable name
}
console.log(myObj[prop]); // access prop property

console.log(myObj[1]);
```
- Property name is dynamic. We can assign the name of the property to a variable and get its value using the square bracket
```js
var myObj2 = {
    "prop":"hello",
    "prop1":123,
    "prop2": true
};
var propertyname = "prop1";
console.log(myObj[propetyName]);
```
- The dot notation is faster than square bracket because when the property name is known at compile time (compiled to machine code at runtime uses Just-In-Time compilation technique, during this process, the engines make optimizations based on the patterns they observe, including how properties are accessed). In contrast, the square bracket notation requires engine to evaluate the expression inside the brackets to determine the property name at runtime. So with square bracket, it adds an extra step which can slow down the process. With dot notation, the engine can quickly predict the property location in memory

### Deleting properties with the delete operator (delete)
- Whenever we want the property to disappear from the Object, we should not declare it as undefined but use keyword " delete" to remove the property
```js
delete person.middleName;
```

## Nested object

```js

var myObj2 = {
    "prop":"hello",
    "prop1":123,
    "prop2": true
    "objProp":{
        "innerProp": "Inner property"
    }
};

console.log(myObj2.objProp.innerProp); //  "Inner property" printed

Obj2.objProp.newInner = "new inner value"; // new property defined for objProp

console.log(myObj.objProp[newInner]); // "new inner value" printed
```

## Two objects pointing to the same address location

```js
var myObj = {
    "myProp":"hello"
};
var myObj2;
myObj2 = myObj;

console.log(myObj2.myProp);

// to check if two objects pointing to the same location address
if(myObj === myObj2){
    console.log("Variables are equal");
}

```

## Array

```js
var myArray = [100,200,300];
myArray[0]; 
myArray[1];
myArray[2];

```
- mix type
- if we access non-exist elements return undefined 
- add more items to the array: 

```js
myArray[3] = "hello";
```
- length of array --> myArray.length
- you can print the whole object
- an array is actually an object with properties named 1,2,3..--> therefore we have to user square bracket. JavaScript converts number 1,2,3 to String type.
- key in array has to be a number. Lets say we add new element with key =400:
  ```js
  myArray[400] = "world";
  myArray.length // return 401
  ```
### Array Methods
- Adding and removing elements at the last positon: myArray.push(50); myArray.pop()
- Adding and removing elements from the front of the array: myArray.unshift(42);myArray.shift()
- Look through the array and examine each and every elements of the array: myArray.forEach(function) - it takes function as an argument
```js
var myArray = [10,20,"hello",{}];
myArray.forEach(function(item){
    console.log("for an element"+item);
}); // print for an element 10 for an element 20...for an element [Object object]
```
- The format is: 

myArray.forEach(function(item,index,array){
    console.log(item,index);
});

index is where the loop starts. 
## Math object -> a built in object that has properties and methods for math constants and functions
1. Math.abs(x) -> returns the absolute value of a number
2. Math.ceil(x) -> round up a number
3. Math.floor(x) ->round down a number
4. Math.min, Math.max
5. Math.round(x)-> round a number to the nearest integer
6. Math.sqrt(x)
7. Math.trunc(x) -> returns the integral part of the number x, removing any fractional digits.

## Date object -> deal with date and time
1. Date.now() -> return date in milliseconds since 1 January,1970 UTC
2. var today = new Date()/ new Date('December 17,1995 03:24:00')/new Date(19995,11,17)/new Date(1995,11,17,3,24,0)/new Date('1995-12-17T03:24:00')
3. Date.getValue -> returns integer value representing the number of milliseconds
4. Date.getYear, Date.getMonth,Date.getDay,Date.getHour...second / and set as well

## Wrapper Objects in Java
- String is of primitive type. However we can use String.length --> this indicates that it is converted to String object
- 4 types of wrapper objects: String, Boolean, Number and Symbol
## Functions

1. Functions can be written in literal form
2. A function is a value that can be assigned to a variable
3. Functions are objects
4. Functions can be called by passing in arguments
5. Flexible argument count
6. No function overloading: no matter many arguments are passed,it's the same function
7. Default argument, arguments argument

```js
function sayHello(){
    console.log("hello");
}
sayHello(); // "hello" printed
```
- Arguments can be passed without declaring type
```js
function sayHello(name, timeOfDay){
    console.log("hello" + name + "time of day is" + timeOfDay);
}
sayHello("thuy","morning"); // "hello thuy time of day is morning" printed
```
- If we dont provide enough arguments, the undeclared arguments return undefined
- If we provide more than enough arguments, the non-exist arguments wil be ignore
- To return a value, just add return keyword. Result of a function with return keyword can be assigned to a variable
```js
function sayHello(name, timeOfDay){
    return "hello" + name + "time of day is" + timeOfDay;
}
var a = sayHello("thuy","afternoon") 
```
### Function Expression
- the function itself is a value in JavaScript. So a function without return keyword can also be assigned to a variable. This, we say the variable contains a function. --> function is also an object

```js
var f = function sayHello(){
console.log("hello");
}
f(); // this prints "hello"
```
- Annonymous function expression: notice that above function's name sayHello() is never used, so we can actually remove it:
```js
var f = function (){
console.log("hello");
}
f(); // this prints "hello"
```
### Function as argument
```js
var f = function (){
console.log("hello");
}
var executor = function(x){
console.log(x);
}
var executor1 = function(x){
x();
}
executor(f); // this prints " function f()"
executor1(f); // this prints "hello"
var f1 = function (name){
console.log("hello " + name);
}
var executor2 = function(fn,name){
fn(name);
}
executor2(f,"thuy"); // this prints "hello thuy"
```
### Function as an object's property --> Method
- create method like how you create a property with anonymous function
- execute the method using classname.methodname()
```js
var myObj ={
"testProp" : true
};
myObj.myMethod = function(){
console.log("hello");
}
myObj.myMethod();// "hello" printed
console.log(myObj);// prints: Object{testProp:true,myMethod:myMethod()}
```
- "this" keyword: 

```js
var person = {
    "firstName":"kat",
    "lastName":"Nguyen",
    "getFullName" :function(){
        return person.firstName + " "+person.lastName;
    }
};
var fullName = person.getFullName();
console.log(fullName);
```
- The above code is fragile because it cannot have person variable changed. For example if we have :
```js
var person2 = person;
person = {};
```
If we hardcode like above, we will not be able to call the method and execute it. In order for this to work, for it to work with whaterver the object's name, we use keyword " this":


```js
var person = {
    "firstName":"kat",
    "lastName":"Nguyen",
    "getFullName" :function(){
        return this.firstName + " "+this.lastName;
    }
};
var fullName = person.getFullName();
console.log(fullName);
```

### default function argument
- In java, we declare a varargs parameter: 
```java
public void exampleMethod(String str,int... numbers){/*..*/}
```
this means the method can accept n integers. Inside the method, the varargs parameter is treated as an array. So, in the example above, numbers is actually an int[].
- In javaScript, you get this by default. You can pass "arguments" to a method as an implicit arguments.
-  Arguments value in JavaScript is not an array. It is array-like only that it has length property an allows access to its elements using index notation : arguments[0],arguments[1].However, it does not have array methods like forEach, map, etc. To use array methods, you need to convert it into a real array.
```js
var add = function(a,b){ // NOTE: we dont need to declare "arguments"
    console.log(arguments);
    return a +b;
};
console.log(add(10,30)); 
/*
Arguments { 0:10,1:30,2more...}
40
*/
var add2 = function(a,b){
    var i,sum = 0;
    for(i=0,i< arguments.length,i++){
        sum+= arguments[i];
    }
    return sum;
};
console.log(add(10,30,2,3,5,3));
```
- convert arguments into real array:
```js
let argsArray = Array.prototype.slice.call(arguments);
//or using spread operator
//let argsArray = [...arguments];
```

Other topics:
- Scopes and closures
- Objects and prototypes ( class type in JavaScript)
- Asynchronous JavaScript - Callbacks and Promises: because JS is a single threat program, so it is important to write asynchronous program for it to function smoothly
- Client side frameworks:jQuery, React, AngularJS
- Sever side framework: Node js - MVC

### Arrow functions
```js
let func = (arg1, arg2, ..., argN) => expression;

```
 it’s the shorter version of:
 ```js
 let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```
more example:
```js
let sum = (a, b) => a + b;
//one argument, then parentheses around parameters can be omitted, making that even shorter.
let double = n => n * 2;
//If there are no arguments, parentheses are empty, but they must be present
let sayHi = () => alert("Hello!");
//can be used in the same way as Function Expressions.
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

```
Multi-arrow function: a more complex function, with multiple expressions and statements.We can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).
```js
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
```

## Scopes
Part of program where variables can be accessed

- JavaScript has function scoping not block scoping in { } like java
```js
var name = "thuy";
if(name==="thuy"){
    var school = "accounting";
}
console.log(name); // "thuy" printed
console.log(school); // "accounting"
```
--> not yet creating a scope here, school variable can still be accessed, it is not confined in a block { }
---> if we put if block inside the function  then we cannot access school variable

```js
var name = "thuy";
function allocatedShool(){
if(name==="thuy"){
    var school = "accounting";
}
} 
allocateSchool() // whatever available outside allocateSchool also avail to allocateSchool, in this case is the name variable

console.log(school); // error!
```
- JavaScript when executing a function will look inside the function for the variable, if it is not there, it gonna look for that outside the function

```js
var name = "thuy";

function allocatedSchool(){
    
if(name==="thuy"){
    var school = "accounting";
}else{
    var school = null;
}
return school;
} 
var school = allocatedSchool()
console.log(school); // this returns "accounting" because JS use variable name = "thuy"
```
- if the function has argument, it will create a new variable, assign the value to that variable. It will not use the global variable
```js
var name = "thuy";

function allocatedSchool(name){
    
if(name==="thuy"){
    var school = "accounting";
}else{
    var school = null;
}
return school;
} 
var school = allocatedSchool()
console.log(school); // this returns null because JS use variable name = undefined
```

--> with argument, function will not use out of scope variable. Without argument, when variable inside its scope is not available, it will look for that variable outside of the scope. 

--> avoid using global variable: multiple Js scripts running when loading a webpage -> using global variables will make it accessible for all Js scripts. Secondly, there is a chance that the global variable's name can be clashed with name of a library's variable

--> Immediately invoked function expression (IIFE)

```js
(function(){
    var name = "thuy";
    console.log(name);
} )();
```
## read and write operations

```js
var a = 10;
var b;
b =a 
```
--> a is read operation and b is write operation

--> affect how js deals with error

--> if you use a variable without declaring it, it's ok to do write operation not read operation

```js
foo =10; // run -> no error!
console.log(foo); // without foo =10, error will appear
```

--> if you declare the variable you can work with read and write operations, if you dont, you can do write operation--> Js creates the variable for you, but you cannot do read operation because Js does not create a variable in this case and hence it throws error

## window object

- Variable outside function is global scope. There is a root object that holds all global variables. The root or global object depends on which runtime you are using. 

--> When you run Js in a browser, the global object is window object : the window object -> load the page -> run Js

--> type window and hit run, we see "Window: about privatebrowsing" and underneath are all global variables it contains

--> whenever you create a global variable and run, this variable is added as property of window object. This happens behind the scence. This works the same for when function is created as well. 

## Compilation and interpretation

- In Java, flow is: source code -> compile -> executed. In Js, what you executed is the src code without creating intermediatery refine. However, there is also compilation step in a fraction of seconds in which browser looks into your src code and identifies things that it needs to execute -> then intepretation step happens and code is executed

- The intepretor just looks for variable in scopes (either global or function scope) to use in its execution. It cares about definition of variable not declaration -> look for the variable in associated scope, assign value to the variable. If it doesnt find any variable with the same name, it goes up one scope to global scope to check if its there. 

- If variable is not declared in function scope, it got created at the global scope where it looks for at last

```js
var a =10;
function myfn(){
    var b =a;
    console.log(b);
    c =100;
}
my fn(); 
```
variable c is created at global scope. --> always use var to declare variable

--> we can avoid this using Strict mode that blocking variable auto-creation in reading operation. This is helpful when we have a typo and Js creates a new variable when it does writing operation during interpreting stage.

## Strict mode -"use strict"
```js
"use strict";
var myName ="";
myname ="thuy"; // myname wont be created and it throws error
```
- It applies in the scope you declare "use strict" either in function or global

## Hoisting
- No matter where you declare the variable with 'var', since it is used for compilation step, it will always be read first eventhough you declare them at last in your script

```js
a =10;
console.log(b);
c++;
var a;
var b;
var c;
```

```js
myFn1();
function myFn1(){

};
```

--> this is important for recursive function

--> However this wont work for function expression: var a is created, but when we execute fn(), error is thrown because JS doesnt have the function name in its scope.

```js
fn();
var a = fn(){

};
```
## Closure

```js
var a =10; //execute first
function outer(){
    var b =20;
    var inner =function(){
        console.log(a);
        console.log(b);
    };
    return inner;
}
var innerFn = outer(); //execute next, now innerFn = inner 
innerFin(); // able to access variable a, but inner function is in global scope now and still be able to access variable b

```
--> for inner function to be executed outside outer function scope, Js actually remembers the original scope of inner function, so eventhough inner function is later executed out of original scope, it can still access variables available in the original scope. 

- Clossures: function that remember its scope where it is declared

## copies
- everytime we run the script, copy of variable/instance of variable is created. It is created for each execution
- variable b and variable a are referenced to by inner function, they are used and  not be cleared by garbage collector.Thats why closures is possible. However, its the snapshot of variable b or copy of variable that is created for each and every execution. In each execution, each inner function retains a reference to its own instance of b.

```js
var a =10; //execute first
function outer(){
    var b =20;
    var inner =function(){
        a++;
        b++;
        console.log(a);
        console.log(b);
    };
    return inner;
}
var innerFn = outer(); 
innerFin(); // 11 and 21 printed

var innerFn2 = outer(); 
innerFn2(); //12 and 21 printed --> new copy of b created for each execution of outer function
```

**Execution Flow**
1. First Call to outer:
- outer is called, creating a new execution context with b = 20.
- inner is returned, forming a closure over this specific instance of b.
- innerFn is assigned this closure.
- innerFn() increments a to 11 and b to 21, then logs these values.
2. Second Call to outer:
- outer is called again, creating a new execution context with a new b = 20.
- inner is returned again, forming a new closure over this new instance of b.
- innerFn2 is assigned this new closure.
- nnerFn2() increments a to 12 (continuing to modify the global a) and b to 21 (modifying the new instance of b), then logs these values.

--> In closures, the variables remembered by the closusre have their own new copies in every execution. However, variables in the scope where the execution happens do not get new copies each time. Copies do not mean duplicates but it means the snapshot of the variable is shared across executios of the closure. 

## closures in callbacks

```js
var a = 10;
var fn =function(){
    console.log(a);
};
setTimeout(fn,5000);
console.log("Done");
```
--> fin is executed somewhere else which does not have acess to variable a. Since closures is formed over variable a, it allows setTimeout to execute fn after 5 seconds.

## The module pattern

- How to prevent access to variable that supposed to be private -> use scope as the way to hide things -> enclosing variable in a scope -> create a function

```js
var person = {
    "firstName":"kat",
    "lastName":"Ma",
    "getFirstName":function(){
        return this.firstName;
    },
    "getLastName":function(){
        return this.lastName;
    }
}
console.log(person.firstName); //kat printed
console.log(person.getFirstName);//kat is also printed
//the goal here is to make kat printed only when we use person.getFirstName, not person.firstName
```
To hide firstName property of object variable: 
1. Place the object inside a function: 
```js
function createPerson(){
    var person = {
    "firstName":"kat",
    "lastName":"Ma",
    "getFirstName":function(){
        return this.firstName;
    },
    "getLastName":function(){
        return this.lastName;
    };
    return person;
}
};

var person = createPerson();
console.log(person.getFirstName());
console.log(person.firstName);
//"kat" is still accessible for both executions because firstName is available in person object scope still. 
```
2. Move the variables out of the scope to hide them and make them inaccessible: this way, the function remembers the variables as closures is formed, but in global scope, we are not able to access those variables. 
```js
function createPerson(){
    var firstName = "kat";
    var lastName = "Ma";
    var returnObj = {
    
    "getFirstName":function(){
        return firstName;
    },
    "getLastName":function(){
        return lastName;
    };
    return returnObj;
}
};
var person = createPerson();
console.log(person.getFirstName());
console.log(person.firstName);//undefined
```

## Closures in async callbacks
- This code prints i from 0 to 9: 
```js
var i;
for(i = 0;i<10;i++){
console.log(i);
}
```
- If I want to use setTimeout:
```js
var i;
var print =function(){
console.log(i);
};
for(i = 0;i<10;i++){
setTimeout(print,1000);
}
```
--> This code prints number 10 for 10 times
--> this happens because setTimeout queues up 10 times, waited for the loop to finish to be executed. When the loop finish, i =10 is intepreted before setTimeout queue which leads to above behaviour
--> to fix this issue, we needs to make function print refers to different value of i after each loop
--> we create an annonymous function inside the loop that wraps around the print function, setTimeout and value of i. This function is set to execute immediately after each loop which gives different value of i that each setTimeout refers to.
```js
var i;
for(i = 0;i<10;i++){
(function(){
    var currentValueOfI = i;
    var print =function(){
    console.log(currentValueOfI);
    };
    setTimeout(print,1000);

})();
}
```

## Prototypes for multiple objects
- To create multiple objects, we can create a function and populate the args : 
```js
function createEmployeeObject(firstName,lastName,gender,designation){
    var newObj = {};
    newObj.firstName = firstName;
    newObj.lastName = lastName;
    newObj.gender = gender;
    newObj.designation = designation;
    return newObj;
}
var empp = createEmployeeObject("kat","ma","F","sales");
```
- All above functions has common features that we need to initiate empty object and return the populated object. In order to make it simpler, JavaScript removes those and turn this type of function into "constructor". Since the variable declaration is removed, we use "this" keyword instead.
-  When calling a constructor, we add "new" keyword in front of the function call. 
```js
// CONSTRUCTOR IN JAVASCRIPT
function createEmployeeObject(firstName,lastName,gender,designation){
    // var newObj = {}; -> this is understood and removed
    this.firstName = firstName; // object's name newObj becomes "this"
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
    // return newObj; -> this is understood and removed
}
var empp = new createEmployeeObject("kat","ma","F","sales"); // new keyword is added
```
- Naming convention: name classes with initial-case such as: Employee, Bicycle, Vehicle.. for all functions that are used as constructor

## To default words for every function call: arguments , this
1.  In Js, there is a concept of global object. The global object depends on which runtime environment we are using to run Js. If we are using browser, the global object is window object. When we call a standalone function directly in global scope,  "this" will be referenced to the global object
```js
function a(){
    console.log("hello"); // prints "hello"
    console.log(this); // prints Window -> about: blank
}
a();
```
2. Function as object's property: "this" refered to the  instance of the object
```js
var obj = {"prop":"This is the object itself"};
obj.a = function(){
    console.log("hello"); // prints "hello"
    console.log(this); // prints the object 
}
obj.a();
```
3. Function as a constructor
```js
function a(){
    console.log("hello"); // prints "hello"
    console.log(this); // prints an empty object
}
new a();
```
4. Function inside a constructor that uses the constructor's property
```js
//function to be called in constructor mode
function Bicycle(cadence,speed,gear,tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function(){
        this.tirePressure += 3;
    }
}
// calling the function in constructor mode
var b1 = new Bycycle(50,20,4,25);
b1.inflateTires(); // this.tirePressure -> this refers to instance b1 which has tirePressure = 25
```
- Now I want to create a different object called Mechanic and pass the inflateTires function to this object

```js
function Mechanic(name){
    this.name = name;
}
var mike = new Mechanic("mike");
mike.inflateTires = b1.inflateTires; 
mike.inflateTires(); // this will be refered to mike now, how can fix the default reference in Js to make this refers to its original object instead?
```
## the call function .call()

```js
function a(){}
a.call(); //this is similar to a()
```
The difference is call( {} ) take an object as its argument. It binds the object to "this" keyword of function a --> you can choose which object you want to bind this keyword to. 

--> using call function in previous example:
```js
function Mechanic(name){
    this.name = name;
}
var mike = new Mechanic("mike");
mike.inflateTires = b1.inflateTires; 
mike.inflateTires.call(b1); // execute this we see:
/*
* Object{name:"mike",inflateTires:Bicycle/this.inflateTires(),tirePressure:NaN}
*/
// now we check b1 again we will see the tirePressure has changed!!
```
Note: This also can work in the same manner
```js
function Mechanic(name){
    this.name = name;
    this.inflateTires = function(b1){
       b1.inflateTires();  
}
}
var mike = new Mechanic("mike");
mike.inflateTires(b1);
console.log(b1);
mike.inflateTires(b1);
console.log(b1);
```
- If we create another object of Bicycle called b2 and call : mike.inflateTires(b2) --> this works as well.
- In this way we call the inflateTires method of Mechanic, which then call inflateTires() of b1.
- This only works if we wrap b1.inflateTires() inside a function that takes b1 as its argument. If we dont place b1 as an argument, this wont work if we want to pass, i.e b2 to the function. The only way to go around is re-define b1.
```js
function Mechanic(name){
    this.name = name;
    this.inflateTires = 
       b1.inflateTires();
    
  	
}
var mike = new Mechanic("mike");
mike.inflateTires;
console.log(b1);
mike.inflateTires;
console.log(b1);
```
- In above code, we forgot to wrap b1.inflateTires() inside a function, the second time we use mike.inflateTires gives the same result as the first time.
- This is because this.inflateTires = b1.inflateTires() immediately execute b1.inflateTires() and assign return value to this.inflateTires.
- Other way is this:
```js
var b1 = new Bicycle(40, 20, 4, 25);

function Mechanic(name) {
    this.name = name;
    this.inflateTires = b1.inflateTires;
}

var mike = new Mechanic("mike");
mike.inflateTires();
console.log(b1);
mike.inflateTires();
```
- In the above code, we are copying the reference to the inflateTires method from b1 to the mike object.
- However, the method inflateTires is likely designed to work with this pointing to an instance of Bicycle (i.e., b1). When you call mike.inflateTires(), this now points to mike, not b1. Since mike is an instance of Mechanic, not Bicycle, any code inside inflateTires that relies on this to reference properties or methods of Bicycle will fail or behave unexpectedly.
- Again, we need to use .call or .bind:
  ```js
  var b1 = new Bicycle(40, 20, 4, 25);
  
    function Mechanic(name) {
        this.name = name;
        this.inflateTires = b1.inflateTires.bind(b1);
    }
    var mike = new Mechanic("mike");
    mike.inflateTires();  // Now works correctly
    console.log(b1);
    mike.inflateTires();  // Works again
```
```
## prototypes
- In above code, the function value of inflateTires variable is created everytime a new instance of Bicycle is created
- Everytime a function is created, there are 2 objects created: the function object and a prototype object
- To access the prototype object: function_name.prototype -> return the prototype object
- Lets say we have an empty constructor a(), if we create an instance out of this : 
```js
function a(){};
var myObj = new a(); // print myObj we get the prototype object
a.prototype.test = "This is the prototype object";
myObj.__proto__.test; // this print " This is the prototype object"
a.prototype === myObj.__proto__ ;// return true
```
--> accessing using .prototype or _ _proto_ _ , we get the same prototype object.
- If we try to access a property that does not exist inside object, JS will go and look for it in the prototype object

```js
myObj.hello; //prints undefined
myObj.__proto__.hello = "this value is from the prototype"; // this is called dunder-proto
myObj.hello ;// prints "this value is from the prototype"
```
- Now if we assign a new value for "hello" property inside myObj, new property is created that has new value, which is no longer the property from the prototype anymore.
- If we delete the newly assigned value, myObj.hello again being looked up from the prototype object. 

--> If we access a property from an object myObj.hello, it can be from prototype object or the object itself.

- Multiple objects being created from the same constructor/function --> they share the same prototype object --> they share the same properties contained in prototype object

--> This way we create behaviours applied to multiple objects. 

--> Functions defined in prototype object will not be created multiple times when new instance of object is created.

--> You can add properties to prototype object at runtime and it will be available to all instances ( which is different to Java which you have to define all functions before execution )
### identify the function/constructor that create an object
- function .prototype points to prototype object. The prototype object also has method .constructor that points to the function

```js
function a(){};
a.prototype ;// this prints the prototype object
var b = new a();
b// this prints the prototype object
var c = a.prototype 
c.constructor // this prints function a()
b.constructor //this prints function a()
```
-->  we can get the function that create a particular object: using _ _proto_ _ and .constructor
```js
b.__proto__.constructor // this returns function a()
```
--> this is not recommended to use function this way because we can change the function associated with b._ _proto_ _.constructor

```js
b.__proto__.constructor = function d(){};
c.__proto__.consturctor // it prints function d()
```
## Global function : Object
```js
console.log(Object) // this print function Object()
```
- Another way to create new empty object apart from assigning {} is using Object function in constructor mode:
```js
var simple = {}
var obj = new Obj();
```
- This Object function in constructor mode also has a prototype object. This is the common object with "simple" object
```js
simple.__proto__ === obj.__proto__ //return true
```

- When we create a function named A, and object instance of function named a, a prototype object is automatically created. This prototype object is actually created using Object() function, and points to Object's prototype
```js
function Employee(){};
var emp = new Employee();
emp.prop="Employee";
emp.__proto__.parentProp="Parent of Employee";
emp.parentProp; // this return "Parent of Employee"
emp.__proto__.__proto__===Object.prototype; // return true
Object.prototype.grandparentProp = "grandparent";
emp.grandparentProp ; //this return "grandparent
```
- Using Object.prototype like this we can implement property that available to all objects in our system.
## Inheritance in JavaScript
- Now if we want to create a Manager object that inherits properties of Employee but still has its own properties
```js
function Employee(name){
    this.name = name};
Employee.prototype.getName =  function(){return this.name}; // function is created in prototype object so it will not be created again and again everytime we create an instance of Employee
var emp1 = new Employee("Jim");
emp1.getName();
function Manager(name,dept){this.name = name;this.dept = dept};
Manager.prototype.getDept = function(){ return this.dept;};
var mgr = new Manager("Micheal","Sales");

console.log(mgr.getName()) // return error!
```
-  to make mgr to accessible to .getName(),we can either place .getName method inside Object's Prototype OR we make Manager's Prototype points to Employee's Prototype
  ![Screenshot 2024-08-09 152422](https://github.com/user-attachments/assets/4f1ed53f-dfc7-4361-b091-fb6c8e18c160)

```js
mgr.__proto__.__proto__ === Object.prototye ; // return true
mgr.__proto__.__proto__ = Employee.prototye

console.log(mgr.getName()) // now return Micheal!
```
## Interaction: alert, prompt, confirm
- Alert: It shows a message and waits for the user to press “OK”.The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.
- Prompt:   
```js
// result = prompt(title, [default]);
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
```
--> It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. default is optional, it's the initial value for the input field. Title is text showing to user.Prompt is shown,then we get that text in the result. Or user can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.
--> The call to prompt returns the text from the input field or null if the input was canceled.
--> The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.So, for prompts to look good in IE, we recommend always providing the second argument:

```js
let test = prompt("Test", ''); // <-- for IE
```
- Confirm:

The function confirm shows a modal window with a question and two buttons: OK and Cancel.
```js
// result = confirm(question);
// The result is true if OK is pressed and false otherwise.
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
```



