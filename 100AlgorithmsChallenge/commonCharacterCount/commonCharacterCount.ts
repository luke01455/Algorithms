function commonCharacterCount(s1: string, s2: string): number {

    let count = 0;
    const newStr1 = s1.split("");
    const newStr2 = s2.split("");

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
        if (newStr1[i] === newStr2[j] && newStr1[i] !== undefined) {

            count++
            newStr1.splice(i, 1);
            newStr2.splice(j, 1);
            console.log(newStr1)
            console.log(newStr2)
            continue;
        }
    }
    }

    return count;
}

//console.log(commonCharacterCount('aabcc', 'adcaa'));
//console.log(commonCharacterCount('affff', 'adffv'));
//console.log(commonCharacterCount("Hello", "World"));
console.log(commonCharacterCount("Hello", "Hello"));