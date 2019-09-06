function almostIncreasingSequence(sequence: number[]): boolean {

    let count = 0;
    for(let i = 0; i < sequence.length - 1; i++) {
        if(sequence[i] < sequence[i + 1]) {
           continue;
         } else {
             count += 1;
         }
    }

    const result = count < 2 ? true : false;

    return result;
}

 console.log(almostIncreasingSequence([1, 3, 1, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2])) 
 console.log(almostIncreasingSequence([1, 3, 2, 6, 7]))
 console.log(almostIncreasingSequence([1, 3, 2, 2, 7]))
 console.log(almostIncreasingSequence([1, 3, 2, 5, 7, 10, 11]))
 console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]));
console.log(almostIncreasingSequence([1, 2, 2, 3])); 