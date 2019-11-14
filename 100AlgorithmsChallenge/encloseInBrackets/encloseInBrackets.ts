function encloseInBrackets(inputString: string): string {
const newString = `(` + inputString + `)`;
return newString

}

console.log(encloseInBrackets('abacaba'));