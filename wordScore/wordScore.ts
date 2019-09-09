function high(x){
const newArr = x.split(" ")
let highScore = [0, 0];

    for(let i = 0; i < newArr.length; i++) {
      let wordScore = [letterScore(newArr[i]), newArr[i]]
      if(wordScore[0] >= highScore[0]) {
          highScore = wordScore;
      }
    }
    return highScore[1];
}

const letterScore = (str) => {
    let score = 0;
    for(let j = 0; j < str.length; j++) {
        score += str[j].charCodeAt(0)-96;
    }
    return score;
}
console.log(high('what time are we climbing up the volcano'));
console.log(high('man i need a taxi up to ubud'));
console.log(high('take me to semynak'));