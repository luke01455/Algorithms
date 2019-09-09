function chunkyMonkey(arr: any[], size: number): any[][] {

    const bigArray = [];
 
    while (arr.length > 0) {
        bigArray.push(arr.splice(0, size));
    }
 
    return bigArray;
}





console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey([0, 1, 2, 4, 4, 6], 7));
console.log(chunkyMonkey([0, 1, 3, 3, 4, 5], 5));
console.log(chunkyMonkey(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));

