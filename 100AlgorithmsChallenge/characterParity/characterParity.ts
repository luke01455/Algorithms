function characterParity(symbol: string): string {
   
   const result = parseInt(symbol);

    if (result % 2 === 0) {
        return 'even';
    }
    else if (isNaN(result)) {
        return 'is not a number';
    }
    else {
        return 'odd';
    }
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
