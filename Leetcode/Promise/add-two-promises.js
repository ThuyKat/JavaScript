var addTwoPromises = async function(promise1, promise2) {
    var x1 = await promise1;
    var x2 = await promise2;
   return x1+x2
};

//NOTE:
    //new Promise(resolve => setTimeout(() => resolve(2), 20)) is different to Promise.resolve(resolve => setTimeout(() => resolve(2), 20)). 
    //Promise.resolve() can take either a promise, non-promise or thenable object as argument. It returns a settled promise with a resolved value
    // Promise.all() can be applied to wait for both promises to resolve concurrently
    //Promise.all() method takes an iterable of Promises and returns a single Promise that resolves when all of the input Promises have resolved, or rejects if any of the Promises reject
    //await without a try-catch block : exception will be thrown, not an undefined value returned. The code after an await that throws an exception (due to a rejected Promise) will not execute
    //You don't always need try-catch with await, but you do need to handle potential rejections somewhere.
    //If this exception continues to bubble up without being caught, it can reach the top level of your program. At this point, if there's still no error handler, it becomes an "unhandled rejection."
    //unhandled rejections can cause issues in your application, potentially crashing Node.js processes or logging errors in browsers.
    //Need to have error handling strategies at appropriate levels in async code to prevent this.
    var addTwoPromises = async function(promise1, promise2) {
        try{
            const results = await Promise.all([promise1, promise2]);
            return results.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        } catch(error) {
            throw new Error(`Parent rejected due to ${error}`)
        }
    };  

    //Promise.resolve() is used to 1/ make sure return result is a promise 2/ flatten nested promises if any
    // To access the resolved value, either use then() to chain asynchronous operations that depend on each other, Promise.all() to execute parallel operations and need to wait for all promises to resolve before proceeding, or async/await to break the operation into steps