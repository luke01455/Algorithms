function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let max = 0;
    for(let i = 0; i < inputArray.length -1; i++) {
        max = Math.abs(inputArray[i] - inputArray[i+1]) > max ? Math.abs(inputArray[i] - inputArray[i+1]) : max
    }
return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([1, 22, 88, 55]));