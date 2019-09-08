function candies(n: number, m: number): number {

    let ans = m / n;
    return Math.floor(ans) * n;
}

console.log(candies(3, 10));
console.log(candies(3, 55));
console.log(candies(3, 9));
