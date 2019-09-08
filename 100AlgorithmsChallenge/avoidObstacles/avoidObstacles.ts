function avoidObstacles(inputArray: number[]): number {
    inputArray = inputArray.sort((a,b) => a-b);

    const largestArrayVal = inputArray[inputArray.length -1];
   
    for (let i = 1; i <= largestArrayVal + 1; i++) {
        if(inputArray.every((element) => element % i !== 0)){
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([5, 55, 44, 33, 11, 2, 33, 6, 7, 8, 9, 11, 10, 13, 12, 14, 15, 16, 17, 18, 19, 20, 21]));