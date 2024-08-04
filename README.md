# JavaScript -Notes

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
## Type coercion: 
- Concatenation with String values
- Values of all types have an associated Bollean value


```js
123 + " 4" // return "1234"
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
     console.log("a is true"); // printed because a !=0. same applied if a ="", undefined, null
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
    "firstName" : "Koushik",
    "middleName" : null,
    "lastName" : "Kothagal"
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