//Data types: number, string, boolean, null, undefined, symbol

let number = 10.5
let type = typeof number;
console.log(type);

//char: not in JS 

let character = 'c';
console.log(typeof character);

let emptyVariable = null;
console.log(emptyVariable); 


//primitive datatype 

let num1 = 5;

let num2 =num1;

console.log(Object.is(num1,num2));

function modifyNum(num){
    num = 20;
    return num;
}

num1 = modifyNum(num1)
console.log(num1); //5 - unhanged

Object.is()

//reference datatype : mutable, pass by reference. objects, functions, arrays
