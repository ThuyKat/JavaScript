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