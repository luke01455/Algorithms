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

 console.log(almostIncreasingSequence([1, 3, 2, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2])) 
 console.log(almostIncreasingSequence([1, 3, 2, 6, 7]))
 console.log(almostIncreasingSequence([1, 3, 2, 2, 7]))
 console.log(almostIncreasingSequence([1, 3, 2, 5, 7, 10, 11]))