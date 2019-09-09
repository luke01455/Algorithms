function compareIntegers(a: string, b: string): string {

    if(a > b) {
        return 'Greater';
    } else if (b > a) {
        return 'Lesser';
    } else {
        return 'Equal'
    }

}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
