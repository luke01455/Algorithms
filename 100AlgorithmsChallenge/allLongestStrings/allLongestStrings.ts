function allLongestStrings(inputArray: string[]): string[] {

    let longestLength = 0;

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    const newArr = [];
    inputArray.forEach((word: string) => {
        if(word.length === longestLength) {
            newArr.push(word);
        }
    })

    return newArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));