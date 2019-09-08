function arrayPreviousLess(items: number[]): number[] {
 const newArr = [];
    for(let i = 0; i < items.length; i++) {
        for(let j = i; j >= 0; j--) {
            if(items[i] > items[j]) {
                newArr.push(items[j])
                break;
            }
            if(!newArr[i]) {
                newArr.push(-1)
            }
        }
    }
    newArr.shift();
    return newArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([3, 5, 5, 4, 5, 9]));
console.log(arrayPreviousLess([11, 3, 3, 12, 5, 5]));
console.log(arrayPreviousLess([66, 22, 3, 44, 33, 5]));
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([0, 9, 4, 11, 9]));
console.log(arrayPreviousLess([52, 95, 21, 3, 55]));
console.log(arrayPreviousLess([69, 1, 200, 350, 60]));