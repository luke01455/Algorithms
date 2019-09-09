function circleOfNumbers(n: number, firstNumber: number): number {

    let pointsOnCircle: number[] = [];
    const ans = n / 2;
    const ans2 = ans + firstNumber;

    for (let i = 0; i < n; i++) {
        pointsOnCircle.push(i);
    }
 
    return  (ans2 >= n) ? pointsOnCircle[ans2 - n]: pointsOnCircle[ans2];

}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 3));
console.log(circleOfNumbers(10, 4));
console.log(circleOfNumbers(10, 5));