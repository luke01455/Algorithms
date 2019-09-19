function convertString(s: string, t: string): boolean {
const trueArray = [];
console.log(s)
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++) {
                console.log(s[j])
                console.log(t[j])
                if(t[i] === s[j]) {
                    
                    trueArray.push(t[i]);
                    break;
                }
        }

    }
    const newArr = trueArray.join("")
    console.log(newArr)
    console.log(trueArray)
    return trueArray.join("") === t ? true : false;
   
    console.log(trueArray)
}

//console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
