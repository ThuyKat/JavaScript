// create an array
let myArray = ['Banana','Apple'];
let myArray2 = new Array('Banana','Apple');
let myArray3 = new Array(2).fill('Banana','Apple') // only use the first elemetn to create array, 'Apple' is ignored
console.log(myArray3)
//comparing arrays
console.log(myArray == myArray2); // false -> dont compare with  ==
console.log('0' == 0); // true -> it converts one to another which is not right

//add element(s)
    //at the end
myArray.push('Kiwi');
console.log( "add 1 element at the end: "+ myArray);
myArray.push("Dragon Fruit", "Pineapple")
console.log("add 2 element at the end: "+ myArray);
    //at the beginning
myArray.unshift('Orange');
console.log("add 1 element at the beginning: "+myArray);
    // of other arrays --> this create a new array out of the original ones
let myNewArray = myArray.concat("concat1","concat2");
console.log("concat other array"+ myNewArray);
    // at an index
myArray.splice(1,0,"Mandarine");
console.log("add element at particular index: "+ myArray);
    //fill with an repeating value from start-index to end-index
myArray.fill("apple",3,6);
console.log("fill with an repeating value from start-index to end-index: "+ myArray);
    //copy from start-index to end-index and inject those in target index: maintain length
console.log("testing copyWithin")
myArray.copyWithin(5,0,2); // from index 5 inject elements from 0 to 2 up to the length of array
console.log(myArray);

//delete element(s)
    //at the end
myArray.pop(); // only one by one
console.log(myArray);
    //at the beginning
myArray.shift(); // only one by one
console.log(myArray);
    //at an index - maintain length
delete myArray[1];
console.log(myArray); 
    //at an index - adjust length
myArray.splice(1,1);
console.log(myArray);
    // delete whole array --> myArray.length = 0
    // cut off a part at the end
myArray.length = 3;
console.log(myArray);

//replace element(s)
    //at an index - single
myArray[1] = "replace 1";
console.log(myArray);
    //at an index -multiple
myArray.splice(1,2,"Apple","Orange");
console.log(myArray);

//copy element(s) --> it creates a new copied array
    //at an index to an index
let copiedArray = myArray.slice(0,1);
console.log("copiedArray :" + copiedArray);
    // slice(0) accepts negative indexing: below code will take last 2 elements
let copiedArray2 = myArray.slice(-2);

    //whole array
let copiedWholeArray = myArray.slice();
console.log(copiedWholeArray);

//get element
    //the last element
    let lastElement = myArray.at(-1);
    console.log(lastElement);
    // at an index
    // satisfy certain criteria -> return the first found element form left to right. If it returns true, the search is stopped, the item is returned
        //if we assign directly: foundElement =  myArray.find(...), this will returns only the item - Orange
        // if we call foundElement separately like below and assign the value once found, it can store multiple props like an object. Use return true to stop the find operation
    let foundElement = null
    myArray.find((item,index,array) => {
        console.log(`current item: ${item}`);
        console.log(`current index: ${index}`);
        console.log(`array being searched: ${array}`);
        if(item === "Orange") {foundElement= {index,item}; return true}
    } );
    if(foundElement){
        console.log(`item named Orange is found at index ${foundElement.index} : ${foundElement.item}`);
    }
// get multiple elements
    //satisfy certain criteria --> return an array with matched elements
    let count = 0;
    let matchedElements = myArray.filter(item => {if(item === 'Orange') {count = count +1; return true}});
    console.log(`${count} matched elements: ${matchedElements}`);

// get index of element except NaN otherwise return -1 ( looking from left to right)
    console.log( `index of Banana element is: ${myArray.indexOf("Banana")}`);
    //if we want the search to include NaN, use: 
    console.log(`index of Banana element using arr.findIndex is: ${myArray.findIndex((item) => item === 'Banana')}`)
    //looking from right to left
    console.log( `index of Banana element is: ${myArray.lastIndexOf("Banana")}`);
    console.log(`index of Banana element using arr.findLastIndex is: ${myArray.findLastIndex((item) => item === 'Banana')}`)

// check if element exists including NaN
    console.log(`existance of element Kiwi in array is : ${myArray.includes("Kiwi")}`);

// loop over arrays' value. If array is empty, looping wont happen!
for (fruit of myArray){
    console.log(fruit);
}
// console.log("using for in")
// for (fruit in myArray){
//     console.log(fruit);
// }
    //multiple arrays : print each array - forEach always returns undefined, it is used for iteration and side effects and not for transforming arrays. 
[myArray,myArray2].forEach((item,index,array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});


// transform each element and return an array of transformed elements
let transformedArray = myArray.map((item,index) => item+index);
console.log(transformedArray);

//sort existing array 
    //compared as String ( default) --> myArray.sort()
    // compared using a function --> myArray.sort(function)
    console.log("sorting array according to each element's length")
    function compareLength(a,b){
        if(a.length > b.length) return 1; // acs type of sort, bigger is towards the end of array, can be any number, example a.length - b.length
        else if(a.length < b.length) return -1;
        else return 0;

    }
    myArray.sort(compareLength);
    console.log(myArray);

// reverse array 
console.log("reversing order of array");
    console.log(myArray.reverse()); // print the same as myArray.reverse() then console.log(myArray) because it returns the reversed array after operation done
    console.log(myArray);

//split a string into array of characters : myString.split('') --> length control? 
// split by a delim  

// glue all elements of array into a string using glue : myArray.join(' ');

// transform whole array into a single result using calculation performed on its elements: with initial value to avoid error with empty array
let myNumArray = [1,2,3,4,6,7,4];
console.log("using reduce to calculate the sum of numeric elements ");
//array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]) -> 2 parts: callback function and initial value
console.log(myNumArray.reduce((sum,current,index) => { 
    console.log("current index is "+ index + " and current sum is "+ (sum+current));
    return (sum + current);} ,0));
    // going from right to left instead: myNumArray.reduceRight(...)

// confirm if an object is an array: Array.isArray(myArray) -> return true
