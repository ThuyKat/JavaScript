// console.log('Start');
// setTimeout(()=>{
//     console.log('Timeout 1');
// },100);
// let p = new Promise((resolve)=>{
//     console.log('Promise executor');
//     resolve('Resolved');
// });
// p.then((value)=>{
//     console.log(value);
// });
// setTimeout(()=>{
//     console.log('Timeout 2');
// },50);
// console.log('End');

//EX 1: 
// const randomPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Randomly decide whether to resolve or reject
//       const shouldResolve = Math.random() > 0.5;
  
//       if (shouldResolve) {
//         resolve("Hello World");
//       } else {
//         reject("Error occurred");
//       }
//     }, 2000);
//   });
  
//   randomPromise
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//EX2: 
// const double = function(value){
//      return new Promise(function(resolve){
//         resolve(value *2 )
// })};

// const addTen = function(value){
//     return new Promise (function(resolve){
//         resolve(value + 10)
// })};

// const multiplyByThree = function(value){
//     return new Promise(function(resolve){
//     resolve(value *3)
// })};


// double(5).then(addTen).then(multiplyByThree).then(function(result){
//     console.log(result)
// } );

//EX: using promise to show avatar from github
// Use a GitHub username directly
const username = "ThuyKat"; // You can replace this with any GitHub username

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    
    let container = document.getElementById('avatar-container');
    container.appendChild(img);

    console.log(`Avatar URL: ${githubUser.avatar_url}`);
    console.log(`User Name: ${githubUser.name}`);
    console.log(`Public Repos: ${githubUser.public_repos}`);

    // Remove the image after 3 seconds
    setTimeout(() => {
      img.remove();
      console.log("Image removed");
    }, 3000);
  })
  .catch(error => console.error('Error:', error));