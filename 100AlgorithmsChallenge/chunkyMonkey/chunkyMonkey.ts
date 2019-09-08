function chunkyMonkey(arr: any[], size: number): any[][] {

    let currArr = [];

    while(currArr.length < arr.length) {
    for(let i = currArr.length; i <= arr.length ; i += size) {
        currArr.push(arr.slice(i, i + size));  
    }

    for(let i = 0; i < currArr.length; i++) {
            var filtered = currArr.filter(function(value, index, arr){

                return index < size;
            
            });
        
    }
    
    return filtered;
}
console.log(filtered)
console.log(currArr.length)
console.log(arr.length)
    console.log(arr);
    console.log(currArr);
}




console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey([0, 1, 2, 4, 4, 6], 7));
console.log(chunkyMonkey([0, 1, 3, 3, 4, 5], 5));

