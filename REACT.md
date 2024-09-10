## FUNDAMENTAL
- Logical AND(&&) /OR(||)
```js
let a =false;
let b= true;
console.log(a&&b);
// it checks for a, if a is true then it continues checking b
//if a is false then return false without checking for b
```
- Template literals
```js
let firstName = "John";
let lastName = "Doe";
console.log(firstName+""+lastName);
console.log(`${name1} ${name2}`); // not this `` is the backticks - template literals- instead of single quotes
```
- Ternary operator
```js
let showRecipeOne =false;
function getRecipeOneName(recipleName){
    return recipeName;
}

function getRecipeTwoName(recipleName){
    return recipeName;
}

if(showRecipleOne){
    console.log(getRecipeOneName("Pizza"));
}else{
    console.log(getRecipleTwoName("Coke"));
}

//condition ? statement 1: statement 2

showRecipeOne?console.log(getRecipeOneName("Pizza")):console.log(getRecipleTwoName("Coke"));
```

- Short-hand an object construction
```js
const id =1;
const productName ="Apple Watch";
const rating = 5;
const product ={
    id:id,
    productName: productName,
    rating:rating
};
console.log(product);
    // key-value names are matching, we can short-hand it: 
    const product ={
        id,
        productName,
        rating,
    };
```
- De-structuring assignment
```js
//de-structuring assignment: take property out of an object and assign it to a const or variable
    const product2={
        description: 'product 2 description',
        id,
        productName,
        rating
    };
    const getProductTwoDescription = product2.description;
    console.log(getProductTwoDescription);
    //short-hand version:
    const{description} = product2
    console.log(description);
    // another example
    const array =[1,2,3];
    const[arrayFirstElement,arraySecondElement] = array;
    console.log(arrayFirstElement);//print 1
    console.log(arraySecondElement);//print 2
```
--> if we give non-exist array elements ( lets say 4th element), return will be null
- default parameters, spread and rest operators
```js
    function multiple(num1=1,num2=2){
        return num1*num2;
    }
    console.log(multiple(10,20)); // default value (1,2) will be replaced with (10,20)
    console.log(multiple(10)) // default value 1 will be replaced with 10

//spread operator
    const array2 =[2,3,4];
    console.log(...array2); //this print 2,3,4
    //if we want it to be in form of an array
    console.log([...array2]);// this print [2,3,4]
    //multiple array spreading
    const array 3 = [10,20,30];
    console.log([...array2,...array3]); // this print [2,3,4,10,20,30]
    console.log([99,...array2,100,...array3]); // this print [99,2,3,4,100,10,20,30]

    function  getInfo(a,b,...c){ 
        //NOTE: you need to pass the spread as the last argument
        // you can just pass (a,...c) and console.log(a,c)
        console.log(a,b,c);
        return "kat";
    }

    console.log(getInfo(1,2,3,4,5,3,4,2,4,3,3,4)); // this will print all numbers

```
    - map, filter,find,some,every,includes,indexOf,findIndex
```js
    const personsArray =[
        {
            name:'Person 1',
            age:30,
            country:'USA',
        },
        {
            name:'Person 2',
            age:40,
            country:'Russia',
        },
        {
            name:'Person 3',
            age:50,
            country:'Japan',
        }
    ]
    //now we want to get the array which has only name of all people in personsArray
    //NOTE1: if you include the curly braces, you must explicitly use the 'return' statement to return a value
    //NOTE2: map() method always return an array in JavaScript. The length of the new array returned will always be the same as the original array. 
    //NOTE 3: this is different to Java stream: map() in Java stream is only an intermediate function, we need to use .collect() or .reduce() to get the returned results. map() in Java stream only transform the elements of the stream via a function, and doesn't guarantee the same number of elements in its output. 

    let getAllNames = personsArray.map((singlePerson,index)=>{
        console.log(singlePerson,index); // this prints each object and its index
        return singlePerson.name
    });
    console.log(getAllNames);
    //NOTE 4: when you call console.log(getAllName); you are logging the getAllNames array, which was already populated by the map() method. 
    //NOTE 5: return can be re-written in literals:
    return `${singlePerson.name} age is ${singlePerson.age}`
    // this prints ["Person 1 age is 30","Person 2 age is 40","Person 3 age is 50"]

    //using find() to find person which is from USA and immediately return the object
    let getPersonFromUSA = personsArray.find((singlePerson,index)=>{
        return singlePerson.country ==='USA';
    });
    console.log(getPersonFromUSA);
    // using filter() to find all person which is from USA and return all objects satisfy the condition.
    // using some() will return true if a person object satisfies the condition exist.
    let checkAge = personsArray.some((singlePerson)=> {
        return singlePerson.age >40;
    });
    console.log(checkAge); //return true which means a person with age .40 exist
      // using every() will return true if all conditions are satisfied
    let checkEvery = personsArray.every((singlePerson)=>{
        return singlePerson.age >40;
    });
    console.log(checkEvery); // returns false that there is a person not satisfies the condition. 

    // using include() to check if a specific element exists in the array
    const fruitsArray =["apple","banana","orange"];
    console.log(fruitsArray.include("apple"),fruitsArray.indexOf("banana")); // returns true,1

    // using indexOf() to see the current index of the element. if the index is non-exist returns -1
    console.log(fruitsArray.include("kat"),fruitsArray.indexOf("kat"));// returns false,-1

    // find the index of person from Russia
    let getIndexOfPersonFromRussia = personsArray.findIndex((singlePerson)=>{
        return singlePerson.country ==='RUSSIA';
    });
    console.log("getIndexOfPersonFromRussia");

