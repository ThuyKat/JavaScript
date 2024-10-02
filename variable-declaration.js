//variable

//var - let - const

//var vs let??

var a =10;

(function(){
var a =20;

console.log(a); //20
})();

console.log(a); // 10(unchanged!)


//hosting: 

console.log(b) // undefined

var b =30;

console.log(b) //30


//writing operation

c = 40; 
console.log(c);

// 

for(var i =0;i<3;i++){
    setTimeout(()=>console.log(i),1000);
} //3,3,3

//































