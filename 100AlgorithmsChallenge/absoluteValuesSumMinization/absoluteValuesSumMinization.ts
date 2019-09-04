function absoluteValuesSumMinimization(a: number[]): number {

const ans = a[Math.floor((a.length + 1) / 2) -1]

return ans;

}

 console.log(absoluteValuesSumMinimization([2, 4, 7]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8, 12, 18, 22, 44, 84, 99]))
