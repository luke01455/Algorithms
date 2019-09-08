function checkPalindrome(inputString: string): boolean {
const reversedString = inputString.split("").reverse().join("");

return inputString.toLowerCase() === reversedString.toLowerCase();
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
