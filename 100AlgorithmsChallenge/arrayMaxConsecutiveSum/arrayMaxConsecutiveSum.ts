function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

    let sum = 0;
    let max = 0;

    for (let i = 0; i < k; i++){
        sum += inputArray[i]
        console.log(sum)
    }

    for (let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i-k];
        sum += inputArray[i];

        if(sum > max) {
            max = sum;
        }
        console.log(sum)
    }
    console.log(max)
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

//console.log(arrayMaxConsecutiveSum([2, 3, 10, 1, 6], 3));