/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        // execute right most function (use the index) -> push it out of array
        while(functions.length >0){
             x = functions.at(-1)(x); //8
            functions.pop(functions[-1]);
            
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */