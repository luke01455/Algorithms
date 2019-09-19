function depositProfit(deposit: number, rate: number, threshold: number): number {
 const percentage = (rate / deposit) + 1

 let count = 0;

 for(let i = deposit; i <= threshold; i = i*=percentage) {
    count++
    console.log(i)
 }

 return count;
}

//console.log(depositProfit(100, 20, 170))
console.log(depositProfit(100, 35, 190))