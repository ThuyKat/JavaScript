function Add(nums){
    let[...args] = nums[0]
        if(nums[0].length===0){
            nums[0][0] = 0
        }
        if(nums.length >0){
            for (let i=0;i<args.length;i++){
                for(let j=1;j<nums.length;j++){
                    if(nums[j].length===0){
                        nums[j][0]=0
                    }
                    args[i] += nums[j][i]
                } 
            }
        }
    let result = args.reduce((sum,current) => sum+current,0);
    return result
}
let result = Add([[1,2],[3,4]])
console.log(result)
let result2=Add([[],[]])
console.log(result2)
const arrayMethods = Object.getOwnPropertyNames(Array.prototype);
console.log(arrayMethods);
