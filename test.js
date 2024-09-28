
//primitive type: pass a copy of the value ( pass by value)
let num =10;
function modifyPrimitive(value){
    value=20;
}
modifyPrimitive(num);
console.log(num); // output: 10( unchanged)

num = 20; // this is not changing the value, but makes num points to a new value
console.log(num);

//proving if 2 variable pointing to the same value
num1 = num;
console.log(Object.is(num, num1)); // this proves num and num1 pointing to same value

//proving function is of reference type
let a = function(){
    console.log('2')
}
c = a;
c.bind = 'ok';
console.log(a.bind);

