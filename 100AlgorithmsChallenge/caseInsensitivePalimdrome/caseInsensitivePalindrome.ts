function isCaseInsensitivePalindrome(inputString: string): boolean {
    const newStr= [];
    
    const splitStr = inputString.split('')
    console.log(splitStr);
    for (let i = splitStr.length -1 ; i >= 0; i--) {
        newStr.push(splitStr[i]);
    }
    
    return newStr.join("").toLowerCase() === splitStr.join("").toLowerCase()
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));