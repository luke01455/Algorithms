function containsCloseNums(nums: number[], k: number): boolean {
    const repeatsArray = [];

        for (let i  = 0; i < nums.length; i++)  {
            for(let j = nums[i] + 1; j < nums.length; j++) {
                if(nums[i] === nums[j]) {  
                    repeatsArray.push(i)
                }
            }
        }

        for(let i = 0; i < nums.length; i++) {
            
        }

    console.log(repeatsArray)

    return (Math.abs(repeatsArray[0] - repeatsArray[1]) <= k) ? true : false;
 }

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));