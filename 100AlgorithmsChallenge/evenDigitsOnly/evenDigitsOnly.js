function evenDigitsOnly(n) {
const numberToString = n.toString();

let result = false;

    for(let i = 0; i < numberToString.length; i++ ) {
        let num = numberToString[i];
        if( num % 2 === 0 ) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
console.log(evenDigitsOnly(1234567890));
console.log(evenDigitsOnly(2468));