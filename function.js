//function: building blocks, write once use multiple times 
//in built functions: alert( message), prompt(message), confirm(question)
//create function of our own: function declaration, function expression. Hoisting
 function sleep(){
    console.log("sleep");
}
//function -> object -> asign to a variable 
let myfunction =  function (){
    console.log("sleep");
}

myfunction();

//arguments: flexible counts, no overloading, unprovided argument takes undefined value, arguments argument

// public void myMethod(String str, int...numbers){...} --> int[]
let printFunction = function(a,b){
    console.log(arguments);
}

printFunction(10,20);

//arguments: length, index, convert to Arrays to use array method: let argArray = [...arguments]


// arrow function: with bracket --> return statement, without bracket 

// closure: function remember the properties inside the scope where it is declared --> module pattern
//ES6- module
// from function to constructor of object: this - to create constructor + new keyword- to call constructor

