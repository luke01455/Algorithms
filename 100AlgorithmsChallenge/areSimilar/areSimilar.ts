function areSimilar(a: number[], b: number[]): any {
   
    const aArr = a.toString();
    const bArr = b.toString();
    if (aArr === bArr) {
        return true;
    }

    const tempArr = [];
    for(let i = 0; i < b.length -1; i++)
    {
        const replace = a.slice(0);
        replace[i] = replace[i+1];
        replace[i+1] = replace[i];
        const aArr2 = a.toString();
        const bArr2 = b.toString();

        if (aArr2 === bArr2) {
            return true;
 
        } else {
            return false;
        }
    }



}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
