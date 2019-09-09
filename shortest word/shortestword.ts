function findShort(s){
    const newArr = s.split(" ");
    let shortest = newArr[0].length;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].length <= shortest) {
                shortest = newArr[i].length;    
            }
        }
        return shortest;
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));