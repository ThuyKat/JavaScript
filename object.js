// Object: free of form , mutable,a single entity that stores data items by key.
// properties, methods
// dot/square bracket
    //square bracket is use if we want to bring existing variables inside the object
// delete myObject.property
    //check if props is in an objects: ===undefined vs 'in' operator??
//object destructuring : unpack object into variables. Left side: corresponding properties - list of variable names in a bracket- in object-like pattern
//--Right side: existing object that we want to split into variables
//-- dont know how many props are there in objs -> rest pattern
//--dont need to destructure all properties are there in the existing objects
//-- Order is not important as long as names are matched
//-- set other name using colon
//--set default value: value, function call, expression prompt(''), if props does not exist, its value is undefined
//--use existing variables -> JS understands it is a code block --> wrap it in a parenthesis
//--nested objects: more complex patterns to extract deeper portions
//--pass params as a object --> function destructures them into vars --> assume: function takes an argument
//--- functions donot take args --> make {} default value for object of params--> always something to destructuring
//Object: store data by keys

let myObject = {}; //const myObject can be modified -> to make a property const inside object -> use property flags/special attributes
let personObject ={
    name: "John",
    age:25,
    sleep : function(){
        console.log("sleeping John")
    },
    1:1,
    todos: {
        todo1:"first thing to do",
        todo2:"second thing to do"
    }
}

// dot notation - square bracket

console.log(personObject.name);
console.log(personObject['name']);

//creating property

personObject.height = 170;
console.log(personObject);

//delete myOBject.property
delete personObject[1];
console.log(personObject);

//object destructuring : 
let{name, height } = personObject; 

let{name:n,height:h} = personObject;

let{name1,...rest} = personObject;


let{weight = 65,...rest1} = personObject;

let{
   todos: {
    todo1,todo3
   }

} = personObject;

console.log(todo1);

// passing object of params to a function

function listAllProperties({name, age}){
    console.log(name);
    console.log(age);
}

listAllProperties(personObject);

//cloning object: Object.assign(dest,...src) --> for multiple srcs + modify existing objects while spread operator is one at a time + create new copies without modifying original

//note: cloning be aware of reference type property -> pass by reference -> structuredClone(object)

