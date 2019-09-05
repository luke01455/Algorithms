function adjacentElementsProduct(inputArray: number[]): any {

    const resultsArr = [];
    for(let i = 0; i < inputArray.length; i++) {
        resultsArr.push(inputArray[i] * inputArray[i + 1])
    }

    let highestNum = 0;
    for(let i = 0; i < inputArray.length - 1; i++) {
        if(resultsArr[i] >= highestNum) {
            highestNum = resultsArr[i];
        }
    }


    return highestNum;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));